import { useMutation } from "@tanstack/react-query";
import { httpClient } from "../http";
import { Client, ClientDTO, Account, Currency } from "../interfaces";

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

export const useGetCustomerById = () => {
	return useMutation({
		mutationKey: ["Customer"],
		mutationFn: async (customerId: number) => {
			const { data } = await httpClient.get<Client>(`/customer/${customerId}`);
			return data;
		},
	});
};

export const useGetCustomerAccounts = () => {
	return useMutation({
	  mutationKey: ["CustomerAccounts"],
	  mutationFn: async (customerId: number) => {
		const { data } = await httpClient.get<Account[]>(`/account/customer/${customerId}`);
		return data;
	  },
	});
  };

export const useGetCurrencies = () => {
	return useMutation({
        mutationKey: ["Currencies"],
        mutationFn: async(_id: string) => {
            const {data} = await  httpClient.get<Currency[]>("/currency",{
            })
            return data;
        }
    });
};