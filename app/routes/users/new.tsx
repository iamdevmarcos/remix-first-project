import { type ActionArgs, json } from "@remix-run/node";
import { UserForm } from "~/domains/Users/UserForm";

export async function action({ request }: ActionArgs) {
  const formData = await request.formData()
  const data = Object.fromEntries(formData)

  return json(data)
}

export default function() {
  return <UserForm />
}