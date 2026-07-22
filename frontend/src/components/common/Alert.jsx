export default function Alert({
  message,
  type = "error",
}) {

  if (!message) return null;

  const styles = {
    error:
      "bg-red-100 border border-red-300 text-red-700",
    success:
      "bg-green-100 border border-green-300 text-green-700",
    warning:
      "bg-yellow-100 border border-yellow-300 text-yellow-700",
  };

  return (
    <div
      className={`rounded-xl px-4 py-3 text-sm ${styles[type]}`}
    >
      {message}
    </div>
  );

}