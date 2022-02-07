const Square = ({value, classes, onClick}) => {
  return (
    <button 
      className={`${classes}`} 
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default Square;
