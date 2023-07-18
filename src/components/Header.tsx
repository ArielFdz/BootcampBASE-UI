import { ReactNode } from "react";

interface Props {
	children: ReactNode;
}

export const Header = ({ children }: Props) => {
	return (
		<header className="bg-white shadow py-4 sm:py-0">
			<div className="flex flex-col sm:flex-row sm:justify-between justify-center items-center h-24 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				{children}
			</div>
		</header>
	);
};
