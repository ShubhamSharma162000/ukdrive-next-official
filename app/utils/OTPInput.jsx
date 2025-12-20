"use client";

import { Box } from "@mui/material";
import { useRef } from "react";

export default function OTPInput({ value, onChange, length = 6 }) {
  const inputsRef = useRef([]);

  const handleChange = (e, index) => {
    const val = e.target.value.replace(/\D/g, "");
    if (!val) return;

    const newValue = value.split("");
    newValue[index] = val[val.length - 1];
    onChange(newValue.join(""));

    if (index < length - 1) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      e.preventDefault();
      const newValue = value.split("");
      newValue[index] = "";
      onChange(newValue.join(""));

      if (index > 0) {
        inputsRef.current[index - 1]?.focus();
      }
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pasted = e.clipboardData
      .getData("text")
      .replace(/\D/g, "")
      .slice(0, length);

    if (!pasted) return;

    onChange(pasted.padEnd(length, ""));
    inputsRef.current[Math.min(pasted.length, length - 1)]?.focus();
  };

  return (
    <Box display="flex" justifyContent="center" gap={1} onPaste={handlePaste}>
      {Array.from({ length }).map((_, index) => (
        <Box
          key={index}
          component="input"
          ref={(el) => (inputsRef.current[index] = el)}
          value={value[index] || ""}
          maxLength={1}
          inputMode="numeric"
          autoComplete="one-time-code"
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          sx={{
            width: 30,
            height: 46,
            textAlign: "center",
            fontSize: "20px",
            fontWeight: 600,
            borderRadius: "12px",
            border: "1.5px solid",
            borderColor: value[index] ? "primary.main" : "grey.300",
            outline: "none",
            transition: "all 0.2s ease",
            backgroundColor: "background.paper",

            "&:focus": {
              borderColor: "primary.main",
              boxShadow: "0 0 0 4px rgba(25,118,210,0.15)",
              transform: "scale(1.05)",
            },
          }}
        />
      ))}
    </Box>
  );
}
