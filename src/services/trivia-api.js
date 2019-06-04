const TRIVIA_API = 'http://jservice.io/api'

// eslint-disable-next-line no-unused-vars
export const requestClues = async (category, clueCount) => {
  const res = await fetch(`${TRIVIA_API}/clues?category=${category}`)
  const json = await res.json()
  return json
}
