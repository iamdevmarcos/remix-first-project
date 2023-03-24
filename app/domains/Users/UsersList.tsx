import { Outlet } from "@remix-run/react"
import type { User } from "./users.api.server"

type UsersListProps = {
  users: User[]
}

export function UsersList({ users }: UsersListProps) {
  return (
    <div>
      <div>Users</div>

      <Outlet />

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <div>{user.name}</div>
            <img src={user.avatar} alt={user.name} height="200" />
          </li>
        ))}
      </ul>
    </div>
  )
}