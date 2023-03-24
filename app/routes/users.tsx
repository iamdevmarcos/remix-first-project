import { json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { UsersList } from '~/domains/Users/UsersList'
import { getUsers } from '~/domains/Users/users.api.server'

export async function loader() {
  return json({
    users: await getUsers()
  })
}

export default function() {
  const { users } = useLoaderData<typeof loader>()

  return (
    <UsersList users={users} />
  )
}