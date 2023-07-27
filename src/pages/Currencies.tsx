import { IconCoin } from "@tabler/icons-react";
import { Currency, DropdownOrderBy, Header, SearchInput } from "../components";
import { Currency as ICurrency } from "../interfaces";
import { currenciesMock } from "../mocks";
import { useEffect, useState } from "react";

export const Currencies = () => {

	const [currencies, setCurrencies] = useState<ICurrency[]>([]);
	const [currentOrderOption, setCurrentOrderOption] = useState("name");

	const currencyOrderOptions: {
		label: string;
		value: string;
	}[] = [
		{ label: "Nombre", value: "name" },
		{ label: "Cambio", value: "value" },
	];

	const orderCurrency = (currencies: ICurrency[],
		currencyOrderOptions: string): ICurrency[] => {
		const key = currencyOrderOptions as keyof (typeof currencies)[0];
		const newCurrency: ICurrency[] = currencies.sort((a: ICurrency, b: ICurrency) => {
			if (a[key] > b[key]) return 1;
			if (a[key] < b[key]) return -1;
			return 0;
		})
		return newCurrency;
	}

	useEffect(() => {
		const orderedCurrencies = orderCurrency(currenciesMock, currentOrderOption);
		setCurrencies(orderedCurrencies);
	}, [currentOrderOption]);

	const handleDropdown = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setCurrentOrderOption(e.target.value);
		setCurrencies(orderCurrency(currencies, e.target.value));
	};

	const handleSearch = (searchWord: string) => {
		if (!searchWord || typeof searchWord !== "string") {
			const orderedCurrencies = orderCurrency(currenciesMock, currentOrderOption);
			setCurrencies(orderedCurrencies);
			return;
		}
		const searchLower = searchWord.toLowerCase();
		const filteredAndOrderedCurrencies = currenciesMock.filter((currency) => {
			return (
				currency.name.toLowerCase().includes(searchLower) ||
				currency.symbol.toLowerCase().includes(searchLower) ||
				currency.value.toString().toLowerCase().includes(searchLower)
			);
		});
		setCurrencies(filteredAndOrderedCurrencies);
	};

	return (
		<>
			<Header>
				<h1 className="text-3xl font-bold tracking-tight text-gray-900">
					Divisas
				</h1>
				<div className="flex w-full gap-2 sm:w-96">
					<DropdownOrderBy
						onChange={handleDropdown}
						options={currencyOrderOptions}
						value={currentOrderOption}
					/>
					<SearchInput
						Icon={IconCoin}
						onSearch={(e => handleSearch(e.target.value))}
						propertie="divisa"
					/>
				</div>
			</Header>

			<section className="flex flex-col items-center h-[calc(100vh-10rem)] mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<ul role="list" className="grid w-full gap-3 overflow-auto divide-y divide-gray-100 sm:grid-cols-2 xl:grid-cols-4 my-7">
					{
						currencies.length === 0 ? (
							<div className="flex flex-col items-center justify-center h-full">
								<p className="text-3xl font-bold text-center">
									¡Oh no! :(
								</p>

								<p className="mt-5 text-lg text-center">
									Algo no ha salido como esperabamos. Por favor,
									intentalo más tarde.
								</p>
							</div>
						) : (
							currencies.map((currency) => (
								<Currency currency={currency} key={currency.name} />
							))
						)
					}
				</ul>
			</section>
		</>
	);
};
