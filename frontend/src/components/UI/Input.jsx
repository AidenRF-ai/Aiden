export default function Input({
  value,
  onChange,
  placeholder
}) {
  return (
    <input
      className="aiden-input"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
}
