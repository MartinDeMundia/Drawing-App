const Triangle = ({ dimensions, onResize , onDelete }) => (
    <div
      style={{
        width: '0',
        height: '0',
        borderLeft: `${dimensions.width / 2}px solid transparent`,
        borderRight: `${dimensions.width / 2}px solid transparent`,
        borderBottom: `${dimensions.height}px solid ${dimensions.color}`,
        position: 'relative',
      }}
      onMouseDown={(e) => {
        const startX = e.clientX;
        const startY = e.clientY;
  
        const handleMouseMove = (e) => {
          const newWidth = Math.abs(e.clientX - startX) * 2;
          const newHeight = Math.abs(e.clientY - startY);
          //onResize({ width: newWidth, height: newHeight });
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

export default Triangle;