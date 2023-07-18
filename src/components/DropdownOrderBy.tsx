import { ChangeEventHandler } from "react";

interface Props {
	onChange: ChangeEventHandler<HTMLSelectElement>;
	options: { label: string; value: string }[];
	value: string;
}

export const DropdownOrderBy = ({ onChange, options, value }: Props) => {
	return (
		<>
			<select
				className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 mt-4 sm:mt-0"
				onChange={onChange}
				value={value}
			>
				<option disabled value="">
					Ordenar por
				</option>
				{options.map(({ label, value }) => (
					<option key={value} value={value}>
						{label}
					</option>
				))}
			</select>
		</>
	);
};
