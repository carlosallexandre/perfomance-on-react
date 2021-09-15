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
  totalPrice: number;
  onAddToWishlist: (id: number) => void;
}

export function SearchResults({ results = [], totalPrice, onAddToWishlist }: SearchResultsProps) {
  return (
    <div>
      <h2>{totalPrice}</h2>
      
      {results.map(product => (
        <ProductItem 
          key={product.id}
          product={product} 
          onAddToWishlist={onAddToWishlist} 
        />
      ))}
    </div>
  )
}