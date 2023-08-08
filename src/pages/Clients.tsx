import { IconPlus, IconUser } from "@tabler/icons-react";
import {
	Client,
	CreateClientModal,
	DropdownOrderBy,
	Header,
	SearchInput,
} from "../components";
/*import { useEffect, useState } from "react";
import { Client as IClient } from "../interfaces";
import { clientsMock } from "../mocks";*/
import { useToggle } from "../hooks";
import { useGetCustomers } from "../api";
import { Client as IClient } from "../interfaces";
import { FetchingData } from "../components/FetchingData";
import { ChangeEvent, useEffect, useState } from "react";

export const Clients = () => {
	/*const [clients, setClients] = useState<IClient[]>([]);
	const [currentOrderOption, setCurrentOrderOption] = useState("customerId");
	const [isOpen, setIsOpen] = useToggle();*/
	const [isOpen, toogleIsOpen] = useToggle();
	const [currentOrderOption, setCurrentOrderOption] = useState("");

	/*const orderOptions: { label: string; value: string }[] = [
		{ label: "Nombre", value: "name" },
		{ label: "ID", value: "customerId" },
		{ label: "Curp", value: "curp" },
		{ label: "edad", value: "birthdate" },
	];*/

	/*useEffect(() => {
		setClients(clientsMock);
		setClients((prevState) => orderClients(prevState, currentOrderOption));
	}, []);*/

	const orderOptions = [
		{ label: "Id", value: "customerId" },
		{ label: "Nombre", value: "name" },
		{ label: "Curp", value: "curp" },
		{ label: "Edad", value: "birthdate" },
	];

	/*const orderClients = (
		clients: IClient[],
		currentOrderOption: string,
	): IClient[] => {
		let key = currentOrderOption as keyof (typeof clients)[0];

		const newClients: IClient[] = clients.sort((a: IClient, b: IClient) => {
			if (a[key] > b[key]) return 1;
			if (a[key] < b[key]) return -1;
			return 0;
		});
		return newClients;
	};*/

	const orderClients = (
		clients: IClient[],
		currentOrderOption: string,
	): IClient[] => {
		const key = currentOrderOption as keyof IClient;
		const copyClients = [...clients];

		const orderedClients = copyClients.sort((a, b) => {
			if (a[key] > b[key]) return 1;
			if (a[key] < b[key]) return -1;
			return 0;
		});

		return orderedClients;
	};

	/*const handleDropdown = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setCurrentOrderOption(e.target.value);
		setClients(orderClients(clients, e.target.value));
	};

	const handleSearch = (searchWord: string) => {
		if (!searchWord || typeof searchWord !== "string") {
		  setClients(orderClients(clientsMock, currentOrderOption));
		  return;
		}
		const searchLower = searchWord.toLowerCase();
		const newCurrencies = clients.filter((client) => {
			return (
				client.name.toLowerCase().includes(searchLower) ||
				client.curp.toLowerCase().includes(searchLower) ||
				client.gender.toLowerCase().includes(searchLower) ||
				client.birthdate.toString().toLowerCase().includes(searchLower) ||
				client.customerId.toString().toLowerCase().includes(searchLower)
			);
		});
	  
		setClients(newCurrencies);
	};*/

	const [search, setSearch] = useState("");
	const [clients, setClients] = useState<IClient[]>([]);

	const { isError, isLoading, mutate } = useGetCustomers();

	useEffect(() => {
		getCustomersInfo();
	}, [search]);

	const handleDropdown = (e: ChangeEvent<HTMLSelectElement>) => {
		setCurrentOrderOption(e.target.value);
		setClients(orderClients(clients, e.target.value));
	};

	const getCustomersInfo = () => {
		mutate(search, {
			onSuccess: (data) => setClients(data),
		});
	};

	return (
		<>
			<CreateClientModal
				isOpen={isOpen} 
				getCustomersInfo={getCustomersInfo}
				onClose={() => {
					toogleIsOpen();
				}}
			/>

			<Header>
				<h1 className="text-3xl font-bold tracking-tight text-gray-900">
					Clientes
				</h1>
				<div className="flex w-full gap-2 sm:w-96">
					<DropdownOrderBy
						onChange={handleDropdown}
						options={orderOptions}
						value={currentOrderOption}
					/>
					<SearchInput
						Icon={IconUser}
						onSearch={(e) => setSearch(e.target.value)}
						propertie="clientes"
					>
						<button
							type="button"
							onClick={() => toogleIsOpen()}
							className="p-2.5 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
						>
							<IconPlus className="w-4 h-4" />
						</button>
					</SearchInput>
				</div>
			</Header>

			{/* <section className="flex flex-col items-center h-[calc(100vh-10rem)] mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<ul
					role="list"
					className="my-4 overflow-auto divide-y divide-gray-100"
				>
					{clients.length === 0 ? (
						<div className="flex flex-col items-center justify-center h-full">
							<p className="text-3xl font-bold text-center">
								¡Oh no! :(
							</p>

							<p className="mt-5 text-lg text-center">
								Algo no ha salido como esperabamos. Por favor,
								intentalo más tarde.
							</p>
						</div>
					) : (
						clients.map((client) => (
							<Client client={client} key={client.customerId} />
						))
					)}
				</ul>
			</section> */}
			<section className="flex flex-col items-center h-[calc(100vh-10rem)] mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<FetchingData isLoading={isLoading} isError={isError}>
					<ul
						role="list"
						className="my-4 overflow-auto divide-y divide-gray-100"
					>
						{clients.map((client) => (
							<Client client={client} key={client.customerId} />
						))}
					</ul>
				</FetchingData>
			</section>
		</>
	);
};
