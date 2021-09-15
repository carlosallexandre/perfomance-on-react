/**
 * useCallback when: ref equality
 */

import { FormEvent, useCallback, useState } from "react"
import { SearchResults } from "../components/SearchResults"

export default function Home() {
  const [search, setSearch] = useState('')
  const [results, setResults] = useState([])

  const handleSubmit = async (evt: FormEvent) => {
    evt.preventDefault()

    if (!search.trim()) return

    const response = await fetch(`http://localhost:3333/products?q=${search}`)
    const results = await response.json()

    setResults(results)
  }

  const addToWishlist = useCallback((id: number) => {
    console.log(id)
  }, [])

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input 
          type="search" 
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      <SearchResults results={results} onAddToWishlist={addToWishlist} />
    </>
  )
}
