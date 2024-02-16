export default function CardGrid({
	children,
	className,
	...props
}: {
	children?: React.ReactNode;
	className?: string;
}) {

	return (
		<div
			className={`hidden items-start justify-center gap-6 rounded-lg p-8 md:grid lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4" ${className}`}
			{...props}
		>
			{children}
		</div>
	);
}
