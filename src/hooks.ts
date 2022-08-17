import { useEffect, useState } from "react";
import { User, fetchUsers } from "./api";

export interface UseUsersResponse {
  users: User[];
  loading: boolean;
}

export const useUsers = (): UseUsersResponse => {
  // TODO: fetch users using fetchUsers API and return them
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetchUsers().then(users => {
      setUsers(users);
    }).finally(() => {
      setIsLoading(false);
    });
  }, []);
  return { users: users, loading: isLoading };
};
