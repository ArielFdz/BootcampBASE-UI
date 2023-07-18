import { IconUser } from "@tabler/icons-react";
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
					/>
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
