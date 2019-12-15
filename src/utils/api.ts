import config from '../config'

export function authHeader() {
  const token = localStorage.getItem('token')

  if (token) {
    return { Authorization: `Bearer ${token}` }
  } else {
    return {}
  }
}

export async function api(method, path, data = null) {
  const res = await fetch(`${config.apiUrl}/${path}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...authHeader(),
    },
    body: data && JSON.stringify(data),
  })
  if (res.ok) {
    return res.json()
  } else {
    throw res.json()
  }
}
