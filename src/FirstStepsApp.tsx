import { ItemCounter } from './shopping-cart/ItemCounter';

interface CartItem {
  productName: string;
  quantity: number;
}

const cartItems: CartItem[] = [
  { productName: 'Nintendo Switch', quantity: 5 },
  { productName: 'PlayStation 5', quantity: 3 },
  { productName: 'Xbox Series X', quantity: 2 },
];

export function FirstStepsApp() {
  return (
    <>
      {cartItems.map(({ productName, quantity }) => (
        <ItemCounter key={productName} name={productName} quantity={quantity} />
      ))}
    </>
  );
}