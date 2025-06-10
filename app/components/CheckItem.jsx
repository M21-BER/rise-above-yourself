export default function CheckItem({ text, addon }) {
  return (
    <div className="flex items-start gap-3 text-gray-200">
      <div className="mt-1 min-w-[0.75rem] sm:min-w-[1rem] aspect-square rounded-full red_grad_bg shadow-md" />
      <p className={`text-sm sm:text-base leading-snug ${addon ? addon : ""}`}>
        {text}
      </p>
    </div>
  );
}
