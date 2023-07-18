import { ReactNode } from "react";
import { createPortal } from "react-dom";
import { IconX } from "@tabler/icons-react";

interface Props {
	isOpen: boolean;
	onClose: () => void;
	title?: string;
	children?: ReactNode;
}

export const Modal = ({ isOpen, onClose, title, children }: Props) => {
	return createPortal(
		<div
			className={`${
				isOpen ? "" : "hidden"
			} fixed top-0 left-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full`}
		>
			<div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
			<div className="flex items-center justify-center h-full w-full">
				<div className="relative w-full max-w-md max-h-full mx-auto">
					<div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
						<button
							type="button"
							className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
							onClick={() => onClose()}
						>
							<IconX className="w-4 h-4" />
							<span className="sr-only">Close modal</span>
						</button>
						<div className="px-6 py-6 lg:px-8">
							{title ? (
								<h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
									{title}
								</h3>
							) : null}
							{children}
						</div>
					</div>
				</div>
			</div>
		</div>,
		document.querySelector("#root")!,
	);
};
