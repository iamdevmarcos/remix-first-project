import { faker } from '@faker-js/faker'

export type User = Record<"id" | "name" | "avatar", string>

export async function getUsers() {
  return Array.from({ length: 12 }, () => ({
      id: faker.datatype.uuid(),
      name: `${faker.name.firstName()} ${faker.name.lastName()}`,
      avatar: faker.image.cats()
  }))
}