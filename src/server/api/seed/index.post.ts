import prisma from '~/lib/prisma'

const deleteAllSchema = async () => {
  console.log('Clearing existing data...')
  await prisma.availability.deleteMany({})
  await prisma.roomBooking.deleteMany({})
  await prisma.payment.deleteMany({})
  await prisma.refund.deleteMany({})
  await prisma.booking.deleteMany({})
  await prisma.review.deleteMany({})
  await prisma.room.deleteMany({})
  await prisma.amenity.deleteMany({})
  await prisma.amenityCategory.deleteMany({})
  await prisma.promotion.deleteMany({})
  await prisma.notification.deleteMany({})
  await prisma.wishlist.deleteMany({})
  await prisma.session.deleteMany({})
  await prisma.hotel.deleteMany({})
  await prisma.user.deleteMany({})
  await prisma.systemSetting.deleteMany({})
}

export default defineEventHandler(async (event) => {
  try {
    await prisma.$connect()
    await deleteAllSchema()
    return {
      status: 200,
      message: 'Data cleared successfully',
    }
  } catch (error) {
    return { status: 500, message: error }
  } finally {
    await prisma.$disconnect()
  }
})
