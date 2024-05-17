export async function loader() {
  return new Response(null, {
    status: 302,
    headers: {
      Location: "/success",
    },
  });
}

export async function action() {
  return new Response(null, {
    status: 302,
    headers: {
      Location: "/success",
    },
  });
}
