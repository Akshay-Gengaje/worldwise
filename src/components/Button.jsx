const Button = ({ children, onClick, type }) => {
  return (
    <button
      className={`${
        type === "primary"
          ? "bg-green-500"
          : type === "outlined"
          ? "bg-transparent border border-gray-500 text-gray-300 bg-opacity-5 "
          : "bg-slate-300"
      }  px-3 py-1  text-black rounded-md`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
