export default defineEventHandler(async (event) => {
  try {
    return { status: 200, user: [] };
  } catch (error) {
    return { status: 500, message: error };
  }
});
