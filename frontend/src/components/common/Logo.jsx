import { CarFront } from "lucide-react";
import {
  APP_NAME,
  APP_TAGLINE,
} from "../../utils/constants";

export default function Logo() {
  return (
    <div className="flex items-center gap-3">

      <div className="bg-blue-600 p-3 rounded-xl shadow-md">
        <CarFront className="text-white w-7 h-7" />
      </div>

      <div>
        <h1 className="text-2xl font-bold text-slate-900">
          {APP_NAME}
        </h1>

        <p className="text-sm text-slate-500">
          {APP_TAGLINE}
        </p>
      </div>

    </div>
  );
}