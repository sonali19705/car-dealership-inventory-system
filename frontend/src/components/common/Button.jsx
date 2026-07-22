import { BUTTON } from "../../utils/theme";

export default function Button({
  children,
  type = "button",
  onClick,
  disabled = false,
  className = "",
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${BUTTON.primary} ${className}`}
    >
      {children}
    </button>
  );
}