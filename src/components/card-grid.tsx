"use client";

export default function CardGrid({
  maxCols: maxCols = 4,
  children,
  className,
  ...props
}: {
  maxCols?: number;
  children?: React.ReactNode;
  className?: string;
}) {
  let baseClassName = `items-start justify-center gap-6 rounded-lg p-8 grid grid-cols-1`;

  if (maxCols >= 2) {
    baseClassName += " lg:grid-cols-2";
  }
  if (maxCols >= 3) {
    baseClassName += " xl:grid-cols-3";
  }
  if (maxCols >= 4) {
    baseClassName += " 2xl:grid-cols-4";
  }

  if (className == undefined) {
    className = baseClassName;
  } else {
    className = baseClassName + " " + className;
  }
  return (
    <div
      className={`${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
