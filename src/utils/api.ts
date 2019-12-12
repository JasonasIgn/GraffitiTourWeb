export function authHeader() {
  const token = localStorage.getItem('token')

  if (token) {
    return { Authorization: `Bearer ${token}` }
  } else {
    return {}
  }
}

export async function api(method, url, data) {
  const res = await fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...authHeader(),
    },
    body: JSON.stringify(data),
  })
  return res.json()
    // .then(res => res.json())
    // .catch(err => ezr)
}
