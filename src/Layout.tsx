import { Outlet } from "react-router-dom";
import { Navbar } from "./components";

export function Layout() {
	return (
		<div className="min-h-full">
			<Navbar />

			<main>
				<Outlet />
			</main>
		</div>
	);
}
