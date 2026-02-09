export interface User {
    id: number;
    userName: string;
    email: string;
    password: string;
    created_at: Date;
}

export let users: User[] = [];