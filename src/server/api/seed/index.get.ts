import prisma from '@/lib/prisma'

export default defineEventHandler(async (event) => {
  try {
    await prisma.$connect()
    const user = await prisma.user.findMany()
    return { user }
  } catch (error) {
    return { status: 500, message: error }
  } finally {
    await prisma.$disconnect()
  }
})
