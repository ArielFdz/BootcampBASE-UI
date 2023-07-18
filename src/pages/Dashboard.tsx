import { Link } from "react-router-dom";
import { Header } from "../components";

export const Dashboard = () => {
	return (
		<>
			<Header>
				<h1 className="text-3xl font-bold tracking-tight text-gray-900">
					Inicio
				</h1>
			</Header>

			<section className="flex flex-col items-center justify-center h-[calc(100vh-15rem)]">
				<h2 className="text-4xl font-bold text-center text-gray-700">
					¡Bienvenido!
				</h2>
				<p className="mt-12 text-lg text-center">
					Por favor, selecciona uno de los módulos disponibles para
					empezar:
				</p>

				<div className="flex gap-10 mt-8">
					<Link to="/clients" className="underline ">
						Clientes
					</Link>
					<Link to="/currencies" className="underline">
						Divisas
					</Link>
				</div>
			</section>
		</>
	);
};
