import logo from "@/assets/rmym-logo.png";

type Props = {
  className?: string;
  /** wrap with white background padding (useful on dark headers) */
  onDark?: boolean;
  height?: number;
};

export default function Logo({ className = "", onDark = false, height = 40 }: Props) {
  const img = (
    <img
      src={logo}
      alt="Rocky Mountain Yearly Meeting"
      style={{ height }}
      className="w-auto object-contain"
    />
  );
  if (onDark) {
    return (
      <span className={`inline-flex items-center rounded-md bg-white px-3 py-1.5 shadow-sm ${className}`}>
        {img}
      </span>
    );
  }
  return <span className={`inline-flex items-center ${className}`}>{img}</span>;
}
