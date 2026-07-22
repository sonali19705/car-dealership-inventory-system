import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { INPUT } from "../../utils/theme";

export default function PasswordInput({
  label,
  name,
  value,
  onChange,
  placeholder = "Enter password",
  required = false,
}) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="space-y-2">
      {label && (
        <label className="font-medium text-slate-700">
          {label}
        </label>
      )}

      <div className="relative">

        <input
          type={showPassword ? "text" : "password"}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className={`${INPUT} pr-12`}
        />

        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-700 transition"
        >
          {showPassword ? (
            <EyeOff size={20} />
          ) : (
            <Eye size={20} />
          )}
        </button>

      </div>
    </div>
  );
}