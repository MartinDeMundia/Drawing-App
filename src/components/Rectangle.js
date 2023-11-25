const Rectangle = ({ dimensions, onResize , onDelete  }) => (
    <div
      style={{ width: dimensions.width + 'px', height: dimensions.height + 'px', background: dimensions.color, position: 'relative' }}
      onMouseDown={(e) => {
        //const startX = e.clientX;
        //const startY = e.clientY;
  
        const handleMouseMove = (e) => {
          //const newWidth = dimensions.width + e.clientX - startX;
          //const newHeight = dimensions.height + e.clientY - startY;
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
      <img alt="Delete" src="delete.png" style={{width:"20px",height:"20px"}}></img>
    </span> 
    </div>
  );

export default Rectangle;