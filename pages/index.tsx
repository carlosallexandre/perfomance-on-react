/**
 * useCallback when: ref equality
 */

import { FormEvent, useCallback, useState } from "react"
import { SearchResults } from "../components/SearchResults"
import { Product } from "../types/Product"

type Results = {
  totalPrice: number;
  data: Product[];
}

export default function Home() {
  const [search, setSearch] = useState('')
  const [results, setResults] = useState<Results>({} as Results)

  const handleSubmit = async (evt: FormEvent) => {
    evt.preventDefault()

    if (!search.trim()) return

    const response = await fetch(`http://localhost:3333/products?q=${search}`)
    const results: Product[] = await response.json()

    const priceFormaterr = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    })

    const totalPrice = results.reduce(
      (total, product) => total + product.price, 
      0,
    )
    
    const data = results.map(product => ({
      ...product,
      priceFormatted: priceFormaterr.format(product.price)
    }))

    setResults({
      totalPrice,
      data,
    })
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

      <SearchResults 
        results={results.data} 
        totalPrice={results.totalPrice}
        onAddToWishlist={addToWishlist} 
      />
    </>
  )
}
