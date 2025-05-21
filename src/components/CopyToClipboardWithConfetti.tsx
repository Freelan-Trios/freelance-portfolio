import { useState } from "react";
import confetti from "canvas-confetti";
import { MdContentCopy } from "react-icons/md";
import { IoMdCheckmark } from "react-icons/io";
import { CopyButtonProps } from "../@types/component";

const CopyToClipboardWithConfetti = ({
  textToCopy,
  label = "Copy",
}: CopyButtonProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);

      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#C5172E", "#3A59D1"],
      });

      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Copy failed", err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="cursor-pointer items-center justify-between overflow-hidden rounded-full border border-white/10 bg-white/10 opacity-85 backdrop-blur-xs transition-all hover:bg-transparent p-2 px-4 text-sm font-semibold shadow-lg hover:scale-[1.03]"
    >
      {copied ? (
        <span className="flex items-center gap-2 tracking-wider">
          <IoMdCheckmark />
          Copied to Clipboard
        </span>
      ) : (
        <span className="flex items-center gap-2 tracking-wider">
          <MdContentCopy />
          {label}
        </span>
      )}
    </button>
  );
};

export default CopyToClipboardWithConfetti;
