import { useQuery } from "react-query";
import { api } from "../api";

type User = {
  id: string;
  name: string;
  email: string;
  create_at: string;
}

type GetUserResponse = {
  totalCount: number;
  users: User[];
}

export async function getUsers(page: number): Promise<GetUserResponse> {
  const { data, headers } = await api.get('users', {
    params: {
      page,
    }
  })

  const totalCount = Number(headers['x-total-count'])

  const users = data.users.map((user: { id: string; name: string; email: string; create_at: string | number | Date; }) => {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      create_at: new Date(user.create_at).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
      }),
    }
  }) 

  return {
    users, 
    totalCount,
  };
}

export function useUsers(pages: number) {
  return useQuery('users', () => getUsers(pages), {
    staleTime: 1000 * 5, // 5 segunds 
  })
}