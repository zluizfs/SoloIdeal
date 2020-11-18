export interface User {
  id: number;
  nome: string;
  email: string;
  senha: string;
}

export interface ResponseSignInUser {
  success: boolean;
  message: string;
  user?: User;
  token: string
}