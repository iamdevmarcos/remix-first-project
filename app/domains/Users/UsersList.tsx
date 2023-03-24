import type { User } from "@prisma/client"
import { Link, Outlet } from "@remix-run/react"

type UsersListProps = {
  users: User[]
}

export function UsersList({ users }: UsersListProps) {
  return (
    <div>
      <div>Users</div>

      <Link to="/users/new">
        New User
      </Link>

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