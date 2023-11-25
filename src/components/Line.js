import React from 'react';

const Line = ({ dimensions, onResize , onDelete  }) => (
  <div
    style={{
      width: dimensions.width + 'px',
      height: '2px',
      background: 'black',
      transform: `rotate(${dimensions.rotation || 0}deg)`,
      position: 'relative',
    }}
    onMouseDown={(e) => {
      const startX = e.clientX;
      const startY = e.clientY;

      const handleMouseMove = (e) => {
        const newRotation = (Math.atan2(e.clientY - startY, e.clientX - startX) * 180) / Math.PI;
        onResize({ width: dimensions.width, rotation: newRotation });
      };

      const handleMouseUp = () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };

      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }}
  >
    <div
      style={{
        position: 'absolute',
        top: '-4px',
        left: '-5px',
        width: '10px',
        height: '10px',
        background: 'black',
        borderRadius: '50%',
        cursor: 'pointer',
        transform: 'rotate(45deg)',
        boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.75)',
      }}
    ></div>
      <span onClick={onDelete} style={{ cursor: 'pointer', position: 'absolute', top: '-12px', right: '0px', color: 'white',zIndex:"2000" }}>
      <img src="delete.png" style={{width:"20px",height:"20px"}}></img>
    </span>
  </div>
);

export default Line;


// const Line = ({ dimensions, onResize }) => (
//     <div
//       style={{
//         width: dimensions.width + 'px',
//         height: '2px',
//         background: 'black',
//         transform: `rotate(${dimensions.rotation || 0}deg)`,
//         position: 'relative',
//       }}
//       onMouseDown={(e) => {
//         const startX = e.clientX;
//         const startY = e.clientY;
  
//         const handleMouseMove = (e) => {
//           const newWidth = Math.sqrt((e.clientX - startX) ** 2 + (e.clientY - startY) ** 2);
//           const newRotation = (Math.atan2(e.clientY - startY, e.clientX - startX) * 180) / Math.PI;
//           onResize({ width: startX, rotation: newRotation });
//         };
  
//         const handleMouseUp = () => {
//           document.removeEventListener('mousemove', handleMouseMove);
//           document.removeEventListener('mouseup', handleMouseUp);
//         };
  
//         document.addEventListener('mousemove', handleMouseMove);
//         document.addEventListener('mouseup', handleMouseUp);
//       }}
//     ></div>
//   );

// export default Line;