import { Product } from '../types/Product'
import { ProductItem } from './ProductItem'

interface SearchResultsProps {
  results: Product[];
}

export function SearchResults({ results }: SearchResultsProps) {
  return (
    <div>
      {results.map(product => (
        <ProductItem product={product} />
      ))}
    </div>
  )
}