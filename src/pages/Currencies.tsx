import { IconCoin } from "@tabler/icons-react";
import { DropdownOrderBy, Header, SearchInput } from "../components";

//TODO Renderizar arreglo de currencies
//TODO Crear condicion en caso de que no haya datos
//TODO Hacer el ordenado
//TODO Crear handleDropdown para ordenar
//TODO Crear handleSearch filtrar el arreglo

export const Currencies = () => {
	return (
		<>
			<Header>
				<h1 className="text-3xl font-bold tracking-tight text-gray-900">
					Divisas
				</h1>
				<div className="flex w-full gap-2 sm:w-96">
					<DropdownOrderBy
						onChange={console.log}
						options={[]}
						value={""}
					/>
					<SearchInput
						Icon={IconCoin}
						onSearch={console.log}
						propertie="divisa"
					/>
				</div>
			</Header>

			<section className="flex flex-col items-center h-[calc(100vh-10rem)] mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<ul
					role="list"
					className="grid w-full gap-3 overflow-auto divide-y divide-gray-100 sm:grid-cols-2 xl:grid-cols-4 my-7"
				></ul>
			</section>
		</>
	);
};
