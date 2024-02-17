"use client";
export default function CardGrid({
  max_rows = 4,
  children,
  className,
  ...props
}: {
  max_rows?: number;
  children?: React.ReactNode;
  className?: string;
}) {
  let baseClassName = `hidden items-start justify-center gap-6 rounded-lg p-8 md:grid`;

  switch (max_rows) {
    case 1:
      baseClassName += " md:grid-cols-1 ";
      break;
    case 2:
      baseClassName += " md:grid-cols-1 lg:grid-cols-2 ";
      break;
    case 3:
      baseClassName += " md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 ";
      break;
    case 4:
      baseClassName += " md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 ";
      break;
    default:
      break;
  };

  if (className == undefined) {
    className = baseClassName;
  } else {
    className = baseClassName + className;
  }
  return (
    <div
      className={`hidden items-start justify-center gap-6 rounded-lg p-8 md:grid " ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
