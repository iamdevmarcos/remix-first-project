import { faker } from '@faker-js/faker'
import { useLoaderData } from '@remix-run/react'

export async function loader() {
  return {
    users: Array.from({ length: 12 }, () => ({
      id: faker.datatype.uuid(),
      name: `${faker.name.firstName()} ${faker.name.lastName()}`,
      avatar: faker.image.cats()
    }))
  }
}

export default function() {
  const { users } = useLoaderData<typeof loader>()

  return (
    <div>
      <div>Users</div>
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