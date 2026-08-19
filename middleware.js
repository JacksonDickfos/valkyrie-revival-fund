export default function middleware(request) {
  const { pathname, search } = new URL(request.url);
  return Response.redirect(
    `https://prytaneumpartners.com${pathname}${search}`,
    308
  );
}

export const config = {
  matcher: ['/((?!_vercel).*)'],
};
