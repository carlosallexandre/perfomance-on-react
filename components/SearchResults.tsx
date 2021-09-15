/**
 * When useMemo:
 * 
 * 1. Realize giant calculations
 * 2. Ref equality (pass props to child with same ref)
 */

import { useMemo } from 'react'
import { Product } from '../types/Product'
import { ProductItem } from './ProductItem'

interface SearchResultsProps {
  results: Product[];
  onAddToWishlist: (id: number) => void;
}

export function SearchResults({ results, onAddToWishlist }: SearchResultsProps) {
  const totalPrice = useMemo(
    () => results.reduce((total, product) => total + product.price, 0), 
    [results]
  )

  return (
    <div>
      <h2>{totalPrice}</h2>
      
      {results.map(product => (
        <ProductItem product={product} onAddToWishlist={onAddToWishlist} />
      ))}
    </div>
  )
}