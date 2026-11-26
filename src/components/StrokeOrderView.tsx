import React, { useEffect, useState } from 'react';

interface StrokeOrderViewProps {
  char: string;
}

interface CharSvgData {
  char: string;
  code: string;
  svgContent: string;
}

export const StrokeOrderView: React.FC<StrokeOrderViewProps> = ({ char }) => {
  const [svgList, setSvgList] = useState<CharSvgData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [isAnimated, setIsAnimated] = useState<boolean>(false);

  // Split multi-character kana (e.g. きゃ -> ['き', 'ゃ'])
  const chars = Array.from(char);

  useEffect(() => {
    let isCancelled = false;
    setLoading(true);

    const loadSvgs = async () => {
      const results: CharSvgData[] = [];

      for (const c of chars) {
        const code = c.charCodeAt(0).toString(16).padStart(5, '0');
        try {
          // Fetch from local public/strokes/
          const response = await fetch(`./strokes/${code}.svg`);
          if (response.ok) {
            let svgText = await response.text();

            // Strip XML declaration, doctype, and comments
            svgText = svgText
              .replace(/<\?xml[\s\S]*?\?>/i, '')
              .replace(/<!DOCTYPE[\s\S]*?>/i, '')
              .replace(/<!--[\s\S]*?-->/g, '');

            results.push({
              char: c,
              code,
              svgContent: svgText.trim(),
            });
          }
        } catch {
          // fallback
        }
      }

      if (!isCancelled) {
        setSvgList(results);
        setLoading(false);
      }
    };

    loadSvgs();

    return () => {
      isCancelled = true;
    };
  }, [char]);

  if (loading) {
    return (
      <div className="stroke-order-loading">
        <span>Loading stroke order...</span>
      </div>
    );
  }

  if (svgList.length === 0) {
    return (
      <div className="stroke-order-fallback">
        <span>Stroke order not available for this character.</span>
      </div>
    );
  }

  return (
    <div className={`stroke-order-panel ${isAnimated ? 'animated-mode' : ''}`}>
      <div className="stroke-order-header">
        <span className="stroke-order-title">Stroke Order Guide</span>
        <button
          type="button"
          onClick={() => setIsAnimated(prev => !prev)}
          className={`stroke-anim-toggle-btn ${isAnimated ? 'active' : ''}`}
          title="Toggle animation"
        >
          {isAnimated ? 'Show Numbers' : 'Animate'}
        </button>
      </div>

      <div className="stroke-order-grid">
        {svgList.map(item => (
          <div key={item.code} className="stroke-char-card">
            <span className="stroke-char-label">{item.char}</span>
            <div
              className="stroke-svg-container"
              dangerouslySetInnerHTML={{ __html: item.svgContent }}
            />
          </div>
        ))}
      </div>
      <div className="stroke-order-legend">
        <span>Follow numbers 1, 2, 3... in direction of strokes.</span>
      </div>
    </div>
  );
};
