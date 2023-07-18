import { IconPlus, IconUser } from "@tabler/icons-react";
import { DropdownOrderBy, Header, SearchInput } from "../components";

export const Clients = () => {
	return (
		<>
			<Header>
				<h1 className="text-3xl font-bold tracking-tight text-gray-900">
					Clientes
				</h1>
				<div className="flex sm:w-96 w-full gap-2">
					<DropdownOrderBy
						onChange={console.log}
						options={[]}
						value={""}
					/>
					<SearchInput
						Icon={IconUser}
						onSearch={console.log}
						propertie="clientes"
					>
						<button className="p-2.5 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
							<IconPlus className="w-4 h-4" />
						</button>
					</SearchInput>
				</div>
			</Header>

			<section className="flex flex-col items-center h-[calc(100vh-10rem)] mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<ul
					role="list"
					className="my-4 overflow-auto divide-y divide-gray-100"
				></ul>
			</section>
		</>
	);
};
