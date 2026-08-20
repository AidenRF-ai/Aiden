export default function Button({
  children,
  onClick,
  type = "button",
  disabled = false
}) {
  return (
    <button
      className="aiden-button"
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
