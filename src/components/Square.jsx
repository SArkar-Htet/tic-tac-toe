const Square = ({value, onClick, borderX, borderY}) => {
  return (
    <button 
      className={`square ${borderX} ${borderY}`} 
    >
    {value ? "X" : "O"}
    </button>
  );
};

export default Square;
