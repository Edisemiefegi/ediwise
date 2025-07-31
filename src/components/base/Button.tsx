import React, { ReactNode } from "react";

const variantClasses = {
  variant: {
    default: "bg-primary text-white hover:opacity-75",
    outline: "border dark:border-gray-800 dark:text-white border-gray-300 text-black dark:hover:bg-gray-700  hover:bg-secondary",
    text: ""
  },
  size: {
    default: "px-4 py-2",
    small: "px-3 py-1 text-sm",
    medium: "p-4"
  },
};

// typeof - to get the type of the object variantclass
// keyof - to get the key of the object as string
// variantClasses["variant"] - variantclasses.variant
type VariantType = keyof (typeof variantClasses)["variant"];
type SizeType = keyof (typeof variantClasses)["size"];

interface ButtonProps  {
  children?: ReactNode;
  className?: string;
  block?: boolean;
  rounded?: boolean;
  variant?: VariantType;
  size?: SizeType;
  asChild?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: string;
  disabled?: boolean;
  loading?: boolean;
}

function Button({
  children,
  className = "",
  block = false,
  rounded = false,
  variant = "default",
  size = "default",
  loading = false,
  disabled = false,
  onClick,
}: ButtonProps) {
  
  const base = "inline-flex cursor-pointer  gap-3 items-center justify-center  font-medium transition";
  const computedClass = [
    base,
    variantClasses.variant[variant],
    variantClasses.size[size],
    block && "w-full",
    rounded && "rounded-full",
    !rounded && "rounded-xl",
    className,
  ]
    .filter(Boolean)
    .join(" ");
  // .filter(Boolean).join Combines all classes while skipping false or undefined values.

  return (
    <button disabled={disabled} onClick={onClick} className={computedClass}>
      {children}
      {loading &&  <i className="pi pi-spin pi-spinner"></i> }
     
    </button>
  );
}

export default Button;
