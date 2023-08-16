import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { IconPlus } from "@tabler/icons-react";
import { CreditCard } from "../components";
import { Header } from "../components/Header";
import { FetchingData } from "../components/FetchingData";
import { Account, Client as cliente} from "../interfaces";
import { useGetCustomerById , useGetCustomerAccounts} from "../api";

export const Client = () => {
    const { id = '' } = useParams<{ id: string }>();
	const customerId = parseInt(id);
    const [clientData, setClientData] = useState<cliente>();
    const [accounts, setAccounts] = useState<Account[]>([]);
    const { mutate: getCustomerById} = useGetCustomerById();
    const { mutate: getCustomerAccounts, isLoading: isLoadingAccounts, isError: isErrorAccounts } = useGetCustomerAccounts();

    useEffect(() => {
        if (!isNaN(customerId)) {
            getCustomerById(customerId, {
                onSuccess: (data) => setClientData(data),
            });
            getCustomerAccounts(customerId, {
                onSuccess: (data) => setAccounts(data),
            });
        }
    }, [customerId, getCustomerById, getCustomerAccounts]);

    return (
        <>
            <Header>
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 text-center">
                    {clientData?.name}
                </h1>
            </Header>

            <section className="flex flex-col items-center h-[calc(100vh-10rem)] mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <FetchingData isLoading={isLoadingAccounts} isError={isErrorAccounts}>
                    <ul role="list" className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 py-7 w-full">
                        {accounts.map(({ accountNumber, balance }) => (
                            <CreditCard name={"HSBC"} cardNumber={accountNumber} balance={balance} key={accountNumber} />
                        ))}
                    </ul>
                </FetchingData>
            </section>

            <button className="fixed right-8 bottom-8 p-3 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                <div className="flex gap-2 items-center">
                    <IconPlus className="w-4 h-4" />
                    <span>Añadir cuenta</span>
                </div>
            </button>
        </>
    );
};
