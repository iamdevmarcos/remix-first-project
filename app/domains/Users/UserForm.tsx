import { Form } from "@remix-run/react";

export function UserForm() {
  return (
    <Form method="post">
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" />
      </div>

      <button type="submit">Create</button>
    </Form>
  )
}