import React from "react";

export function TextInput({
  type = "text",
  label,
  placeholder,
  required = false,
  value,
  onChange,
  name,
  disabled = false,
  error,
}) {
  return (
    <div class="mb-3">
      <label for={name} class="form-label">
        {label}
      </label>
      <input
        type={type}
        class="form-control"
        id={name}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={onChange}
        name={name}
        disabled={disabled}
      />
      {error && <div class="form-text text-danger">{error}</div>}
    </div>
  );
}
