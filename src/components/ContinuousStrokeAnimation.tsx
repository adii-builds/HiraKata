import React, { useEffect, useState, useRef } from 'react';

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

  // Active stroke count currently visible/drawn (1-indexed: 0 means blank guide, 1 means stroke 1 drawn, etc.)
  const [activeStrokeStep, setActiveStrokeStep] = useState<number>(0);
  const [isResetting, setIsResetting] = useState<boolean>(false);

  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const chars = Array.from(char);

  // 1. Load SVG path data
  useEffect(() => {
    let isCancelled = false;
    setLoading(true);
    setActiveStrokeStep(0);
    setIsResetting(false);

    const loadPaths = async () => {
      const results: CharData[] = [];

      for (const c of chars) {
        const code = c.charCodeAt(0).toString(16).padStart(5, '0');
        try {
          const res = await fetch(`./strokes/${code}.svg`);
          if (res.ok) {
            const svgText = await res.text();
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

  // 2. Synchronized Loop Controller
  useEffect(() => {
    if (loading || charsData.length === 0) return;

    // Find the maximum strokes across the characters
    const maxStrokes = Math.max(...charsData.map(c => c.paths.length));
    const STROKE_DRAW_MS = 460;   // Time for each stroke to draw
    const COMPLETE_PAUSE_MS = 650; // Pause with full character completed
    const BLANK_PAUSE_MS = 250;    // Faint guide pause before starting next loop

    let currentStep = 0;
    setIsResetting(false);
    setActiveStrokeStep(0);

    const runStep = () => {
      currentStep++;

      if (currentStep <= maxStrokes) {
        // Drawing next stroke
        setIsResetting(false);
        setActiveStrokeStep(currentStep);
        timerRef.current = setTimeout(runStep, STROKE_DRAW_MS);
      } else {
        // Full character complete: pause for user to examine
        setIsResetting(false);
        setActiveStrokeStep(maxStrokes);

        timerRef.current = setTimeout(() => {
          // Reset to blank guide
          setIsResetting(true);
          setActiveStrokeStep(0);

          // After short blank pause, restart loop from stroke 1
          timerRef.current = setTimeout(() => {
            currentStep = 0;
            setIsResetting(false);
            runStep();
          }, BLANK_PAUSE_MS);
        }, COMPLETE_PAUSE_MS);
      }
    };

    // Start drawing stroke 1 after initial brief delay
    timerRef.current = setTimeout(runStep, 150);

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [loading, charsData, char]);

  if (loading || charsData.length === 0) {
    return null;
  }

  return (
    <div className="continuous-stroke-wrapper" aria-label={`Stroke order animation for ${char}`}>
      {charsData.map(cData => (
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

            {/* Synchronized animated active strokes */}
            <g className="stroke-active-layer">
              {cData.paths.map((p, idx) => {
                const isDrawn = idx < activeStrokeStep;
                const offset = isDrawn ? 0 : 100;
                // Transition only when actively drawing, no transition on instant reset
                const transitionStyle = isResetting
                  ? 'none'
                  : 'stroke-dashoffset 0.42s ease-out';

                return (
                  <path
                    key={`active-${idx}`}
                    d={p.d}
                    pathLength="100"
                    style={{
                      strokeDasharray: 100,
                      strokeDashoffset: offset,
                      transition: transitionStyle,
                    }}
                  />
                );
              })}
            </g>
          </svg>
        </div>
      ))}
    </div>
  );
};
