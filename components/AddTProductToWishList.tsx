export interface AddProductToWishListProps {
  onAddToWishlist: () => void;
  onRequestClose: () => void;
}

export function AddProductToWishList({
  onAddToWishlist,
  onRequestClose,
}: AddProductToWishListProps) {
  return (
    <span style={{ marginLeft: '16px'}}>
      Deseja adicionar aos favoritos?
      <button onClick={() => onAddToWishlist()}>Sim</button>
      <button onClick={() => onRequestClose()}>Não</button>
    </span>
  )  
}