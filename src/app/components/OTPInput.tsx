'use client'
import { useState, useRef } from "react";

export default function OTPInput() {
  const [otp, setOtp] = useState<string[]>(Array(6).fill(""));
  const inputRefs = useRef<HTMLInputElement[]>([]);

  const handleChange = (index: number, value: string) => {
    // Allow only numeric input
    if (!/^\d?$/.test(value)) return;

    const updatedOtp = [...otp];
    updatedOtp[index] = value;
    setOtp(updatedOtp);

    // Move to the next input field if value is entered
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, event: React.KeyboardEvent) => {
    if (event.key === "Backspace") {
      const updatedOtp = [...otp];
      updatedOtp[index] = "";
      setOtp(updatedOtp);

      // Move to the previous input field if backspace is pressed
      if (index > 0 && !otp[index]) {
        inputRefs.current[index - 1]?.focus();
      }
    }
  };

  const handlePaste = (event: React.ClipboardEvent) => {
    const pasteData = event.clipboardData.getData("text").slice(0, 6);
    if (!/^\d{1,6}$/.test(pasteData)) return;

    const updatedOtp = Array(6).fill("").map((_, i) => pasteData[i] || "");
    setOtp(updatedOtp);

    // Automatically move focus to the last filled input
    inputRefs.current[Math.min(pasteData.length - 1, 5)]?.focus();
  };

  return (
    <div className="flex justify-between py-[20px]" onPaste={handlePaste}>
      {otp.map((digit, index) => (
        <input
          key={index}
          type="text"
          maxLength={1}
          value={digit}
          onChange={(e) => handleChange(index, e.target.value)}
          onKeyDown={(e) => handleKeyDown(index, e)}
          // ref={(el) => (inputRefs.current[index] = el!)}
          ref={(el) => {
            if (el) {
              inputRefs.current[index] = el;
            }
          }}
          className="w-12 h-12 text-center text-lg font-medium bg-transparent border border-[#796FAB] rounded-md focus:ring-2 focus:ring-[#796FAB] focus:shadow-lg focus:shadow-[#796FAB80] focus:outline-none"
        />
      ))}
    </div>
  );
}
