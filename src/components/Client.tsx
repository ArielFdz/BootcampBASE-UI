import dayjs from "dayjs";
import "dayjs/locale/es";
import { Link } from "react-router-dom";
import { IconListDetails } from "@tabler/icons-react";

import { Avatar } from "./Avatar";
import { Client as IClient } from "../interfaces";

interface Props {
	client: IClient;
}

export const Client = ({ client }: Props) => {
	const { birthdate, curp, customerId, gender, name } = client;

	return (
		<li className="flex justify-between gap-x-6 py-5">
			<div className="flex gap-x-4">
				<Avatar name={name} />
				<div className="min-w-0 flex-auto">
					<p className="text-sm font-semibold leading-6 text-gray-900">
						{name}
					</p>
					<p className="text-sm leading-6 text-gray-900">
						{dayjs(birthdate)
							.locale("es")
							.format("DD [de] MMMM [de] YYYY")}
					</p>
				</div>
			</div>
			<div className="flex gap-5">
				<div className="hidden sm:flex sm:flex-col sm:items-end">
					<p className="text-sm leading-6 text-gray-900 capitalize">
						{gender.toLowerCase()}
					</p>

					<div className="mt-1 flex items-center gap-x-1.5">
						<p className="text-xs leading-5 text-gray-500">
							{curp}
						</p>
					</div>
				</div>
				<div className="grid place-content-center">
					<Link
						to={`/clients/${customerId}`}
						className="text-white bg-gray-600 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-3 text-center inline-flex items-center sm:mr-6 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
					>
						<IconListDetails className="w-3 h-3" />
					</Link>
				</div>
			</div>
		</li>
	);
};
