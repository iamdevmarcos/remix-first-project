import { PrismaClient, type User } from '@prisma/client'
import { faker } from '@faker-js/faker'

const db = new PrismaClient()

export async function getUsers() {
  return db.user.findMany({ orderBy: { name: 'desc' } })
}

export async function createUser(user: User) {
  return db.user.create({ data: {
    ...user,
    avatar: faker.image.cats()
  } })
}