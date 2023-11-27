
// 3: Conditional matching with Regex -------------------------------------------
export function middleware(request) {
  const authRegexChecker = new RegExp('/auth/*');

  if (authRegexChecker.test(request.url)) {
    console.log('Middleware invoked at time:' + new Date());
    console.log({ url: request.url });
    console.log({ pathname: request.nextUrl.pathname });
    console.log({ method: request.method });
    // Your Logic
    // Authentication,....
  }
}
// 3: Conditional matching with Regex -------------------------------------------
