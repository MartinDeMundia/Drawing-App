const Circle = ({ dimensions, onResize , onDelete  }) => (
    <div
      style={{
        width: dimensions.width + 'px',
        height: dimensions.height + 'px',
        borderRadius: '50%',
        background: dimensions.color,
        position: 'relative',
      }}
      onMouseDown={(e) => {
        const startX = e.clientX;
        const startY = e.clientY;
  
        const handleMouseMove = (e) => {
          const newDiameter = Math.max(dimensions.width + e.clientX - startX, dimensions.height + e.clientY - startY);
          //onResize({ width: newDiameter, height: newDiameter });
        };
  
        const handleMouseUp = () => {
          document.removeEventListener('mousemove', handleMouseMove);
          document.removeEventListener('mouseup', handleMouseUp);
        };
  
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
      }}
    >
    <span onClick={onDelete} style={{ cursor: 'pointer', position: 'absolute', top: '2px', right: '2px', color: 'white',zIndex:"2000" }}>
      <img src="delete.png" style={{width:"20px",height:"20px"}}></img>
    </span>
    </div>
  );
export default Circle;