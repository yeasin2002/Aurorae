import prisma from '~/lib/prisma'

export default defineEventHandler(async (event) => {
  try {
    await prisma.$connect()
    return {
      user: await prisma.user.findMany(),
      hotel: await prisma.hotel.findMany(),
      systemSetting: await prisma.systemSetting.findMany(),
      session: await prisma.session.findMany(),
      wishlist: await prisma.wishlist.findMany(),
      notification: await prisma.notification.findMany(),
      promotion: await prisma.promotion.findMany(),
      amenityCategory: await prisma.amenityCategory.findMany(),
      amenity: await prisma.amenity.findMany(),
      room: await prisma.room.findMany(),
      review: await prisma.review.findMany(),
      booking: await prisma.booking.findMany(),
      refund: await prisma.refund.findMany(),
      payment: await prisma.payment.findMany(),
      roomBooking: await prisma.roomBooking.findMany(),
      availability: await prisma.availability.findMany(),
    }
  } catch (error) {
    return { status: 500, message: error }
  } finally {
    await prisma.$disconnect()
  }
})
