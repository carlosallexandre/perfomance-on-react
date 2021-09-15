/**
 * When useMemo:
 * 
 * 1. Realize giant calculations
 * 2. Ref equality (pass props to child with same ref)
 */

import AutoSizer from 'react-virtualized-auto-sizer'
import { ListChildComponentProps, FixedSizeList as List } from 'react-window'
import { Product } from '../types/Product'
import { ProductItem } from './ProductItem'

interface SearchResultsProps {
  results: Product[];
  totalPrice: number;
  onAddToWishlist: (id: number) => void;
}

export function SearchResults({ results = [], totalPrice, onAddToWishlist }: SearchResultsProps) {
  const RowList = ({ index, style }: ListChildComponentProps) => (
    <ProductItem 
      key={results[index].id}
      style={style}
      onAddToWishlist={onAddToWishlist}
      product={results[index]}
    />
  )
  
  return (
    <div style={{ height: '100%' }}>
      <h2>{totalPrice}</h2>
      
      <AutoSizer>
        {({ width }) => (
          <List 
            height={320} 
            width={width} 
            itemCount={results.length} 
            itemSize={35}
          >
            {RowList}
          </List>
        )}
      </AutoSizer>

      {/* {results.map(product => (
        <ProductItem 
          key={product.id}
          product={product} 
          onAddToWishlist={onAddToWishlist} 
        />
      ))} */}
    </div>
  )
}