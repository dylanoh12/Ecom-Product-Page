import React, { useState, useRef, useEffect } from 'react';

interface ImageMagnifierProps {
  src: string;
  alt: string;
}

export const ImageMagnifier = ({ src, alt }: ImageMagnifierProps) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [showMagnifier, setShowMagnifier] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const magnifierSize = 300;
  const zoomLevel = 2;

  const updateMagnifier = (e: React.MouseEvent<HTMLDivElement>) => {
    const img = imgRef.current;
    if (!img) return;

    const rect = img.getBoundingClientRect();
    const x = ((e.pageX - rect.left) / rect.width) * 100;
    const y = ((e.pageY - rect.top) / rect.height) * 100;

    setPosition({
      x: Math.max(0, Math.min(x, 100)),
      y: Math.max(0, Math.min(y, 100))
    });
  };

  return (
    <div className="relative inline-block">
      <div
        className="aspect-square bg-[#F8F8EA] rounded-lg p-8 cursor-zoom-in relative"
        onMouseEnter={() => setShowMagnifier(true)}
        onMouseLeave={() => setShowMagnifier(false)}
        onMouseMove={updateMagnifier}
      >
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          className="w-full h-full object-contain"
        />
        {showMagnifier && (
          <div
            className="absolute pointer-events-none"
            style={{
              left: `${position.x}%`,
              top: `${position.y}%`,
              width: '100px',
              height: '100px',
              transform: 'translate(-50%, -50%)',
            }}
          />
        )}
      </div>

      {showMagnifier && (
        <div
          className="absolute shadow-lg"
          style={{
            left: '100%',
            marginLeft: '20px',
            top: '50%',
            transform: 'translateY(-50%)',
            width: `${magnifierSize}px`,
            height: `${magnifierSize}px`,
            border: '1px solid #ddd',
            borderRadius: '8px',
            overflow: 'hidden',
            backgroundColor: 'white',
            zIndex: 999,
          }}
        >
          <img
            src={src}
            style={{
              position: 'absolute',
              left: `${-position.x * 1.5}%`,
              top: `${-position.y * 1}%`,
              width: `${magnifierSize * zoomLevel}px`,
              height: `${magnifierSize * zoomLevel}px`,
              maxWidth: 'none',
              objectFit: 'contain',
              pointerEvents: 'none'
            }}
            alt="Magnified view"
          />
        </div>
      )}
    </div>
  );
};