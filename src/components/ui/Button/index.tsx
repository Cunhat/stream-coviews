import { cva } from "class-variance-authority";

const ButtonStyles = cva(
  "inline-flex items-center border font-medium relative text-base px-4 py-2 rounded-md text-white shadow-sm",
  {
    variants: {
      type: {
        primary:
          "border-indigo-700 bg-indigo-600 hover:bg-indigo-700 hover:border-indigo-800",
        secondary:
          "border-pink-700 bg-pink-600 hover:bg-pink-700 hover:border-pink-800",
      },
    },
  }
);

export const Button: React.FC<{
  text: string;
  type?: "primary" | "secondary";
  onClick: () => void;
}> = ({ text, type = "primary", onClick }) => {
  return (
    <button onClick={onClick} className={ButtonStyles({ type })}>
      {text}
    </button>
  );
};
