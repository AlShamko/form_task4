import type { User } from "../types/user.ts";

export const getUsers = async (): Promise<User[]> => {
    const response = await fetch("/api/users");

    if (!response.ok) {
        throw new Error("Error");
    }

    return response.json();
};
