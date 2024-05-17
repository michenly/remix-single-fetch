import type { ResponseStub } from "@remix-run/server-runtime/dist/single-fetch";

export function responseObject() {
  return new Response(null, {
    status: 302,
    headers: {
      Location: "/success",
    },
  });
}

export function responseStub(response: ResponseStub) {
  response.status = 302;
  response.headers.set("Location", "/success");
}
