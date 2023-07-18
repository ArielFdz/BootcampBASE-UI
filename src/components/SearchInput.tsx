import { IconSearch, TablerIconsProps } from "@tabler/icons-react";
import { ChangeEventHandler, ReactNode } from "react";

interface Props {
	Icon: (props: TablerIconsProps) => JSX.Element;
	onSearch: ChangeEventHandler<HTMLInputElement>;
	propertie: string;
	children?: ReactNode;
}

export const SearchInput = ({ Icon, onSearch, propertie, children }: Props) => {
	return (
		<form className="flex items-center w-full mt-4 sm:mt-0">
			<label htmlFor="simple-search" className="sr-only">
				Buscar
			</label>
			<div className="relative w-full">
				<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
					<Icon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
				</div>
				<input
					className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
					id="simple-search"
					onChange={onSearch}
					placeholder={`Buscar ${propertie}`}
					required
					type="text"
				/>
			</div>
			<div className="flex gap-1.5">
				<button className="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
					<IconSearch className="w-4 h-4" />
					<span className="sr-only">Buscar</span>
				</button>
				{children}
			</div>
		</form>
	);
};
