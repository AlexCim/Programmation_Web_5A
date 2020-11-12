import { Role } from './role';

export class Account {
    id: string;
    title: string;
    firstName: string;
    lastName: string;
    email: string;
    numero: number;
    licence: number;
    role: Role;
    jwtToken?: string;
}
