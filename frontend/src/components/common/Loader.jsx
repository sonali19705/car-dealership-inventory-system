export default function Loader({
  text = "Loading..."
}) {

  return (
    <div className="flex items-center justify-center gap-2">

      <div className="h-5 w-5 rounded-full border-2 border-white border-t-transparent animate-spin"></div>

      <span>{text}</span>

    </div>
  );

}