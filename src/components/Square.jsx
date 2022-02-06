const Square = ({value, onClick, borderX, borderY}) => {
  return (
    <button 
      className={`square ${borderX} ${borderY}`} 
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default Square;
