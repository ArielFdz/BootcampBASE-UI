import { ReactNode } from "react";
import { Spinner } from ".";

interface Props {
	children: ReactNode;
	isLoading: boolean;
	isError: boolean;
}

export const FetchingData = ({ children, isLoading, isError }: Props) => {
	return (
		<>
			{isLoading ? (
				<div className="flex justify-center items-center h-[calc(100vh-10rem)]">
					<Spinner />
				</div>
			) : null}

			{!isLoading && isError ? (
				<div className="flex flex-col justify-center items-center h-[calc(100vh-10rem)]">
					<p className="text-center font-bold text-3xl">¡Oh no! :(</p>
					<p className="text-center text-lg mt-5">
						Algo no ha salido como esperabamos. Por favor, intentalo
						más tarde.
					</p>
				</div>
			) : null}

			{!isLoading && !isError ? <>{children}</> : null}
		</>
	);
};
