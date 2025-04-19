import prisma from '~/lib/prisma'

export default defineEventHandler(async (event) => {
  try {
    await prisma.$connect()
    return {
      status: 200,
      user: await prisma.user.findMany(),
    }
  } catch (error) {
    return { status: 500, message: error }
  } finally {
    await prisma.$disconnect()
  }
})
