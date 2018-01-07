const OPTS = {
    headers: { 'Authorization': 'whatever-you-want' }
}
const BASE_URL = 'http://localhost:3001'

export function fetchPosts () {
  return fetch(`${BASE_URL}/posts`, OPTS)
    .then(res => res.json())
}