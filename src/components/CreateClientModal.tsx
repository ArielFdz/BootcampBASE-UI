import { Modal } from ".";

interface Props {
	isOpen: boolean;
	onClose: () => void;
}

export const CreateClientModal = ({ isOpen, onClose }: Props) => {
	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<form>
				<div className="mb-6">
					<label
						htmlFor="name"
						className="block mb-2 text-sm font-medium text-white"
					>
						Nombre completo
					</label>
					<input
						className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
						id="name"
						placeholder="Abraham Espinosa Mendoza"
						required
						name="name"
						type="text"
					/>
				</div>
				<div className="mb-6">
					<label
						htmlFor="curp"
						className="block mb-2 text-sm font-medium text-white"
					>
						CURP
					</label>
					<input
						className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
						id="curp"
						placeholder="EIMA011116HCCSNBA8"
						required
						name="curp"
						type="text"
					/>
				</div>
				<div className="mb-6">
					<label
						htmlFor="gender"
						className="block mb-2 text-sm font-medium text-white"
					>
						Sexo
					</label>
					<select
						className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
						id="gender"
						required
						name="gender"
					>
						<option value="HOMBRE">Masculino</option>
						<option value="MUJER">Femenino</option>
					</select>
				</div>
				<div className="mb-6">
					<label
						htmlFor="birthdate"
						className="block mb-2 text-sm font-medium text-white"
					>
						Fecha de nacimiento
					</label>
					<input
						className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
						id="birthdate"
						required
						name="birthdate"
						type="date"
					/>
				</div>
				<button
					type="submit"
					className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
				>
					Añadir cliente
				</button>
			</form>
		</Modal>
	);
};
