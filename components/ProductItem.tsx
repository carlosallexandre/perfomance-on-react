/**
 * When apply memo:
 * 1. Pure functional components
 * 2. Renders too often
 * 3. Re-rendes with same props
 * 4. Medium to big size
 */

import dynamic from 'next/dynamic'
import { CSSProperties, memo, useState } from "react";
import { Product } from "../types/Product";
import { AddProductToWishListProps } from './AddTProductToWishList'

const AddProductToWishList = dynamic<AddProductToWishListProps>(() => {
  return import('./AddTProductToWishList').then(mod => mod.AddProductToWishList)
}, {
  loading: function Loading() { 
    return <span>Carregando...</span> 
  }
})

interface ProductItemProps {
  product: Product;
  style: CSSProperties;
  onAddToWishlist: (id: number) => void;
}

function ProductItemComponent({ product, onAddToWishlist, style }: ProductItemProps) {
  const [isAddToWishlistRequested, setIsAddToWishlistRequested] = useState(false)
  
  return (
    <div style={style}>
      <span style={{ marginRight: '8px'}}>
        {product.title} - <strong>{product.priceFormatted}</strong>
      </span>
      <button onClick={() => setIsAddToWishlistRequested(true)}>
        Add to whishlist
      </button>

      { isAddToWishlistRequested && (
        <AddProductToWishList 
          onAddToWishlist={() => onAddToWishlist(product.id)}
          onRequestClose={() => setIsAddToWishlistRequested(false)}
        />
      )}
    </div>
  )
}

export const ProductItem = memo(ProductItemComponent, (prevProps, nextProps) => {
  return Object.is(prevProps.product, nextProps.product) 
})