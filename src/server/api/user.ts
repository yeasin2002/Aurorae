import prisma from '~/lib/prisma'

export default defineEventHandler(async (event) => {
  return {
    status: 200,
    user: await prisma.user.findFirst(),
  }
})
