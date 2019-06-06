const TRIVIA_API = 'http://jservice.io/api'

export const requestClues = async (category, clueCount) => {
  const randomStart = Math.floor(Math.random() * 100)
  const res = await fetch(`${TRIVIA_API}/clues?category=${category}`)
  const json = await res.json()
  return json.slice(randomStart, Number(clueCount) + randomStart)
}
