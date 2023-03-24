export function UserForm() {
  return (
    <form method="POST">
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" />
      </div>

      <button type="submit">Create</button>
    </form>
  )
}