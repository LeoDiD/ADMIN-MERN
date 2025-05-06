import React, { useEffect, useRef } from 'react';

const QuantumBarChart = ({ darkMode, percentage = 8 }) => {
  const canvasRef = useRef(null);
  const dataSetColor = '#00FF96'; // New consistent color
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Fixed data values - similar to MinimalBarChart but with some variance
    const values = [5, 8, 6, 7, 9, 6];
    
    // Draw the non-aligned bars with rounded corners
    for (let i = 0; i < values.length; i++) {
      const x = 3 + (i * 7);
      const isEven = i % 2 === 0;
      
      // Adjust height and position based on value and whether index is even/odd
      const value = values[i];
      const height = value * 3.5; // Scale to fit canvas
      
      // Y-position is different for even/odd bars to create staggered effect
      const y = isEven ? 40 - height : 30 - height;
      const barWidth = 4;
      
      // Draw bar with rounded corners
      const radius = 1.5;
      
      ctx.beginPath();
      
      // Top left corner
      ctx.moveTo(x, y + radius);
      ctx.arcTo(x, y, x + radius, y, radius);
      
      // Top right corner
      ctx.lineTo(x + barWidth - radius, y);
      ctx.arcTo(x + barWidth, y, x + barWidth, y + radius, radius);
      
      // Bottom right corner
      ctx.lineTo(x + barWidth, y + height - radius);
      ctx.arcTo(x + barWidth, y + height, x + barWidth - radius, y + height, radius);
      
      // Bottom left corner
      ctx.lineTo(x + radius, y + height);
      ctx.arcTo(x, y + height, x, y + height - radius, radius);
      
      ctx.closePath();
      
      // Gradient fill with new color
      const gradient = ctx.createLinearGradient(0, y, 0, y + height);
      gradient.addColorStop(0, '#00FF96'); // Bright green at top
      gradient.addColorStop(1, 'rgba(0, 255, 150, 0.7)'); // Faded green at bottom
      
      ctx.fillStyle = gradient;
      ctx.fill();
      
      // Add subtle glow for more polish
      ctx.shadowColor = 'rgba(0, 255, 150, 0.5)';
      ctx.shadowBlur = 3;
      ctx.shadowOffsetX = 0;
      ctx.shadowOffsetY = 0;
      
      // Reset shadow for next iteration
      ctx.shadowColor = 'transparent';
      ctx.shadowBlur = 0;
    }
    
    // Draw center line (subtle) for the alternating pattern
    ctx.beginPath();
    ctx.moveTo(0, 25);
    ctx.lineTo(40, 25);
    ctx.strokeStyle = darkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)';
    ctx.lineWidth = 0.5;
    ctx.stroke();
    
  }, [darkMode]);
  
  return (
    <div style={{ 
      position: 'relative', 
      height: '50px',
      width: '40px',
      marginLeft: 'auto',
      marginRight: '2px',
      marginTop: '8px'
    }}>
      {/* Percentage indicator */}
      <div 
        style={{ 
          position: 'absolute', 
          top: '-16px',
          right: '0',
          fontSize: '10px',
          fontWeight: '500',
          color: percentage > 0 ? dataSetColor : '#ff4d4d'
        }}
      >
        {percentage > 0 ? `+${percentage}%` : `${percentage}%`}
      </div>
      
      <canvas 
        ref={canvasRef} 
        width="40" 
        height="50" 
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
};

export default QuantumBarChart;