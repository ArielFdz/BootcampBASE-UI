import { useMutation } from "@tanstack/react-query";
import { httpClient } from "../http";
import { Client, ClientDTO } from "../interfaces";

export const useGetCustomers = () => {
	return useMutation({
		mutationKey: ["Customers"],
		mutationFn: async (name: string) => {
			const { data } = await httpClient.get<Client[]>("/customer", {
				params: {
					name,
				},
			});

			return data;
		},
	});
};

export const useCreateCustomer = () => {
	return useMutation({
		mutationKey: ["Customers"],
		mutationFn: async (customer: Omit<Client, "customerId">) => {
			const { data } = await httpClient.post<ClientDTO>("/customer", {
				...customer,
			});

			return data;
		},
	});
};