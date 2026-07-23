import { CarFront } from "lucide-react";
import {
  APP_NAME,
  APP_TAGLINE,
} from "../../utils/constants";

export default function Logo({ compact = false }) {
  return (
    <div className="flex items-center gap-2 sm:gap-3">
      {/* Logo Icon */}
      <div className="bg-blue-600 p-2.5 sm:p-3 rounded-xl shadow-md flex-shrink-0">
        <CarFront className="text-white w-6 h-6 sm:w-7 sm:h-7" />
      </div>

      {/* Logo Text */}
      <div className="min-w-0">
        <h1 className="text-lg sm:text-2xl font-bold text-slate-900 leading-tight">
          {APP_NAME}
        </h1>

        <p className="hidden sm:block text-sm text-slate-500">
          {APP_TAGLINE}
        </p>
      </div>
    </div>
  );
}