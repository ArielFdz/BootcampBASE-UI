interface Props {
	name: string;
}

export const Avatar = ({ name }: Props) => {
	const initials = name
		.split(" ")
		.map((n) => n[0].toUpperCase())
		.slice(0, 2)
		.join("");

	return (
		<div className="relative inline-flex items-center justify-center w-12 h-12 overflow-hidden bg-gray-300 rounded-full dark:bg-gray-600">
			<span className="font-medium text-gray-600 dark:text-gray-300">
				{initials}
			</span>
		</div>
	);
};
