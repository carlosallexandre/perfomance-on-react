/**
 * Occasions to apply memo:
 * 1. Pure functional components
 * 2. Renders too often
 * 3. Re-rendes with same props
 * 4. Medium to big size
 */

import { memo } from "react";
import { Product } from "../types/Product";

interface ProductItemProps {
  product: Product;
}

function ProductItemComponent({ product }: ProductItemProps) {
  return (
    <div>
      {product.title} - <strong>{product.price}</strong>
    </div>
  )
}

export const ProductItem = memo(ProductItemComponent, (prevProps, nextProps) => {
  return Object.is(prevProps.product, nextProps.product)
})