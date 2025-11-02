export type LoginFormInputs = {
	email: string;
	senha: string;
};

export type LoginResponse = {
	token: string;
	user: {
		id: number;
		nome: string;
		email: string;
	};
};
