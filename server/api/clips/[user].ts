export default defineEventHandler(async (event) => {
  const user = event?.context?.params?.user || "";
  return user;
});
