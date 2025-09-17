export const Button = ({ children, bg, color, hover }) => {
  return (
    <button
      className={`flex items-center gap-2 rounded-lg px-5 py-3 font-medium transition ${bg} ${color} ${hover}`}
    >
      {children}
    </button>
  );
};