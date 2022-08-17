import { FC } from "react";
import { User } from "./api";
import './UserList.css';

interface Props {
  users?: User[];
  selectedIds?: string[];
  onSelect?: (id: string) => void
}

const UserList: FC<Props> = ({ users = [], selectedIds = [], onSelect}) => {
  console.log('>>>>', selectedIds);
  return (
    <div className="UserList">
      {
        users.map((user) => {
          return (
            <label key={user.id}>
              <input
                type="checkbox"
                checked={selectedIds.indexOf(user.id) >=0 ? true : false}
                onChange={() => onSelect ? onSelect(user.id) : {}}
              />
              {user.firstName} {user.lastName}
            </label>
          );
        })
      }
    </div>
  );
};

export default UserList;
