import { FC } from "react";
import { User } from "./api";
import './UserList.css';

interface Props {
  users?: User[];
  selectedIds?: string[];
  onSelect?: (ids: string[]) => void
}

const UserList: FC<Props> = ({ users = [], selectedIds = [], onSelect}) => {
  return (
    <div className="UserList">
      {
        users.map((user) => {
          return (
            <label key={user.id} data-testid={`userlist-${user.id}`}>
              <input
                type="checkbox"
                checked={selectedIds.indexOf(user.id) >=0 ? true : false}
                onChange={() => {
                  if (onSelect) {
                    let curIds = [...selectedIds];
                    if (curIds.indexOf(user.id) >= 0) {
                      curIds.splice(curIds.indexOf(user.id), 1);
                    } else {
                      curIds.push(user.id);
                    }
                    onSelect(curIds);
                  }}}
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
