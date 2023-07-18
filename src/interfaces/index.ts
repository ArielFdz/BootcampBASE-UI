export interface Client {
	birthdate: string;
	curp: string;
	customerId: number;
	gender: string;
	name: string;
}

export interface Account {
	accountNumber: string;
	balance: number;
}

export interface ClientDTO {
	information: Client;
	accounts: Account[];
}

export interface Currency {
	name: string;
	symbol: string;
	value: number;
}
