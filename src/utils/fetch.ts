export function authHeader() {
  const token = localStorage.getItem('token')

  if (token) {
    return { Authorization: `Bearer ${token}` }
  } else {
    return {}
  }
}

export const fetch = (url, method, data) =>
  fetch(url, method, {
    headers: {
      'Content-Type': 'application/json',
      ...authHeader(),
    },
    body: JSON.stringify(data),
  })
    .then(res => res.json())
    .catch(err => err)
