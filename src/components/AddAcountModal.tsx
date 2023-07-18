import { Modal } from ".";

interface Props {
	isOpen: boolean;
	onClose: () => void;
}

export const AddAcountModal = ({ isOpen, onClose }: Props) => {
	return (
		<Modal
			isOpen={isOpen}
			onClose={onClose}
			title="Añadir una cuenta al cliente"
		>
			<p className="text-white">
				¿Estás seguro que deseas realizar esto? Si realizas está acción
				no la podrás deshacer.
			</p>
			<div className="flex mt-5 w-full justify-center">
				<button
					type="button"
					className="text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
				>
					No, cancelar
				</button>
				<button
					type="button"
					className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
				>
					Sí, añadir
				</button>
			</div>
		</Modal>
	);
};
