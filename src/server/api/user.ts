import Prisma from '@/lib/prisma'

export default defineEventHandler(async (event) => {
  return await Prisma.user.findMany()
})
  