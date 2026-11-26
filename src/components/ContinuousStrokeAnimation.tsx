import React, { useEffect, useState } from 'react';

interface ContinuousStrokeAnimationProps {
  char: string;
}

interface ParsedPath {
  id: string;
  d: string;
}

interface CharData {
  char: string;
  code: string;
  paths: ParsedPath[];
}

export const ContinuousStrokeAnimation: React.FC<ContinuousStrokeAnimationProps> = ({ char }) => {
  const [charsData, setCharsData] = useState<CharData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const chars = Array.from(char);

  useEffect(() => {
    let isCancelled = false;
    setLoading(true);

    const loadPaths = async () => {
      const results: CharData[] = [];

      for (const c of chars) {
        const code = c.charCodeAt(0).toString(16).padStart(5, '0');
        try {
          const res = await fetch(`./strokes/${code}.svg`);
          if (res.ok) {
            const svgText = await res.text();

            // Extract all paths inside StrokePaths group
            const pathRegex = /<path\s+id="([^"]+)"\s+d="([^"]+)"/g;
            const paths: ParsedPath[] = [];
            let match;

            while ((match = pathRegex.exec(svgText)) !== null) {
              paths.push({
                id: match[1],
                d: match[2],
              });
            }

            if (paths.length > 0) {
              results.push({ char: c, code, paths });
            }
          }
        } catch {
          // ignore
        }
      }

      if (!isCancelled) {
        setCharsData(results);
        setLoading(false);
      }
    };

    loadPaths();

    return () => {
      isCancelled = true;
    };
  }, [char]);

  if (loading || charsData.length === 0) {
    return null;
  }

  return (
    <div className="continuous-stroke-wrapper" aria-label={`Stroke order animation for ${char}`}>
      {charsData.map(cData => {
        const strokeCount = cData.paths.length;
        // Total duration: 0.45s per stroke + 0.8s pause at the end
        const strokeDuration = 0.45;
        const totalDuration = strokeCount * strokeDuration + 0.8;

        return (
          <div key={cData.code} className="continuous-stroke-char">
            <svg
              viewBox="0 0 109 109"
              className="continuous-stroke-svg"
              width="64"
              height="64"
            >
              {/* Background faint guide paths */}
              <g className="stroke-guide-layer">
                {cData.paths.map((p, idx) => (
                  <path key={`guide-${idx}`} d={p.d} />
                ))}
              </g>

              {/* Animated active strokes */}
              <g className="stroke-active-layer">
                {cData.paths.map((p, idx) => {
                  const delay = idx * strokeDuration;
                  return (
                    <path
                      key={`active-${idx}`}
                      d={p.d}
                      pathLength="100"
                      style={{
                        animation: `continuousDraw ${totalDuration}s cubic-bezier(0.4, 0, 0.2, 1) infinite`,
                        animationDelay: `${delay}s`,
                      }}
                    />
                  );
                })}
              </g>
            </svg>
          </div>
        );
      })}
    </div>
  );
};
