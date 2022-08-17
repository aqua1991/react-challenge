import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import UserList from "./UserList";

const mock_users = [
  { id: "1", firstName: "Richard", lastName: "Hendricks" },
  { id: "2", firstName: "Erlich", lastName: "Bachman" },
  { id: "3", firstName: "Nelson", lastName: "Bighetti" },
];

it("renders without crashing", () => {
  render(<UserList />);
});

it("renders the specified users", () => {
  render(<UserList users={mock_users} />);

  mock_users.forEach((user) => {
    // TODO: find the element for that user
    const element = screen.getByTestId(`userlist-${user.id}`);
    expect(element).toBeInTheDocument();
  });
});

it("renders the selected users as checked and only them", () => {
  const selectedIds = ["1", "2"];

  render(<UserList users={mock_users} selectedIds={selectedIds} />);

  mock_users.forEach((user) => {
    
    // TODO: find the checkbox for that user
    const checkbox = screen.getByTestId(`userlist-${user.id}`).getElementsByTagName('input')[0];
    
    // TODO: expect the checkbox to be checked or not
    if(selectedIds.indexOf(user.id) >= 0)
    {
      expect(checkbox).toHaveProperty("checked", true);
    } else {
      expect(checkbox).toHaveProperty("checked", false);
    }
      
  });
});

it("fires the onSelect event when a user is checked", () => {
  const onSelect = jest.fn();
  const selectedIds = ["1"];

  render(<UserList users={mock_users} selectedIds={selectedIds} onSelect={onSelect} />);

  // TODO: find the checkbox for user with ID "2" and click it
  const checkbox = null;
  userEvent.click(screen.getByTestId(`userlist-2`).getElementsByTagName('input')[0]);
  expect(onSelect).toHaveBeenNthCalledWith(1, ["1", "2"]);
});
