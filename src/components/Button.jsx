const Button = ({ children, onClick, type }) => {
  return (
    <button
      className={`${
        type === "primary" ? "bg-green-500" : "bg-slate-300"
      }  p-1  text-black rounded-md`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
