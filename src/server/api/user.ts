import prisma from '~/lib/prisma'

export default defineEventHandler(async (event) => {
  try {
    // await prisma.$connect()
    console.log('Searching for user...')
    const user = await prisma.user.findMany()
    console.log('user')
    return { status: 200, user }
  } catch (error) {
    return { status: 500, message: error }
  } finally {
    await prisma.$disconnect()
  }
})
