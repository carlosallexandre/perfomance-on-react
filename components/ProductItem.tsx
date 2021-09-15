/**
 * When apply memo:
 * 1. Pure functional components
 * 2. Renders too often
 * 3. Re-rendes with same props
 * 4. Medium to big size
 */

import { memo } from "react";
import { Product } from "../types/Product";

interface ProductItemProps {
  product: Product;
  onAddToWishlist: (id: number) => void;
}

function ProductItemComponent({ product, onAddToWishlist }: ProductItemProps) {
  return (
    <div>
      <span style={{ marginRight: '8px'}}>
        {product.title} - <strong>{product.price}</strong>
      </span>
      <button onClick={() => onAddToWishlist(product.id)}>
        Add to whishlist
      </button>
    </div>
  )
}

export const ProductItem = memo(ProductItemComponent, (prevProps, nextProps) => {
  return Object.is(prevProps.product, nextProps.product) 
})