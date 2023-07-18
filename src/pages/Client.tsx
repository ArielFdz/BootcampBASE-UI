import { Header } from "../components/Header";

export const Client = () => {
	return (
		<>
			<Header>
				<h1 className="text-3xl font-bold tracking-tight text-gray-900 text-center">
					Nombre del cliente
				</h1>
			</Header>

			<section className="flex flex-col items-center h-[calc(100vh-10rem)] mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 py-7 w-full"></ul>
			</section>
		</>
	);
};
