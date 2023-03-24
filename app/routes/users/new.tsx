import type { User } from "@prisma/client";
import { type ActionArgs, redirect } from "@remix-run/node";
import { UserForm } from "~/domains/Users/UserForm";
import { createUser } from "~/domains/Users/users.api.server";

export async function action({ request }: ActionArgs) {
  const formData = await request.formData()
  const data = Object.fromEntries(formData)

  await createUser(data as User)

  return redirect('/users')
}

export default function() {
  return <UserForm />
}

export function ErrorBoundary({ error }: { error: Error }) {
  console.log(error)
  return <h1>Ops... something went wrong!</h1>
}