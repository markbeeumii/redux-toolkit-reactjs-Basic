import { useDispatch } from 'react-redux';
import { CartCardProps } from '../../types/products';
import { removeFromCart } from '../../hooks/carts/card-slice';

export function CartCard({ id, image, price, title, quantity }: CartCardProps) {
  const dispatch = useDispatch();
  const handleRemove = () => {
    dispatch(removeFromCart(id));
  };
  return (
    <>
      <div className="flex items-center justify-between mb-6 px-1">
        <img className="w-[100px] h-[100px] object-cover" src={image} alt="hello" />
        <h4>{title}</h4>
        <h3>$ {price}</h3>
        <h3 className="font-medium"> {quantity} </h3>
        <button className="p-2 border-[1px] border-red-400 " onClick={handleRemove}>
          remove
        </button>
      </div>
    </>
  );
}
