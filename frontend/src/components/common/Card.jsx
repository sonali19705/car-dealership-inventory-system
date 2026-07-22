import { CARD } from "../../utils/theme";

export default function Card({
  children,
  className = "",
}) {
  return (
    <div className={`${CARD} ${className}`}>
      {children}
    </div>
  );
}