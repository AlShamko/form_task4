import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { TableRow } from "./TableRow.tsx";
import type { User } from "../../types/user.ts";

export const Table = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let isMounted = true;

        const fetchUsers = async () => {
            try {
                const response = await axios.get<User[]>("https://example.com/api/users");
                if (isMounted) {
                    setUsers(response.data);
                    setError(null);
                }
            } catch (err: unknown) {
                if (isMounted) {
                    if (axios.isAxiosError(err)) setError(err.message);
                    else if (err instanceof Error) setError(err.message);
                    else setError("Error");
                }
            } finally {
                if (isMounted) setLoading(false);
            }
        };

        fetchUsers();
        const interval = setInterval(fetchUsers, 10000);

        return () => {
            isMounted = false;
            clearInterval(interval);
        };
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <StyledTableWrap>
            <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Status</th>
                <th>Date</th>
            </tr>
            </thead>
            <tbody>
            {users.map((user) => (
                <TableRow key={user.id} user={user} />
            ))}
            </tbody>
        </StyledTableWrap>
    );
};

const StyledTableWrap = styled.table`
    width: 100%;
    border-collapse: collapse;
    text-align: left;

    th, td {
        padding: 10px 12px;
        border: 1px solid #ddd;
    }

    th {
        background-color: #f5f5f5;
        font-weight: 600;
    }

    tbody tr:hover {
        background-color: #f0f8ff;
    }
`;
