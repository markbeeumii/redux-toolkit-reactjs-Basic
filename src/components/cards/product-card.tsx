import { useDispatch } from 'react-redux';
import { addToCart } from '../../hooks/carts/card-slice';
import { ProductCardProps } from '../../types/products';

export function ProductCard({ id, title, price, image }: ProductCardProps) {
  const dispatch = useDispatch();
  //const carts: Array<IProduct> = useSelector((state: any) => state?.cart?.carts);
  const handleAddProduct = (id: number, title: string, price: number, image: string) => {
    let payload = {
      id,
      title,
      price,
      image
    };
    dispatch(addToCart(payload));
  };
  return (
    <>
      <div className="md:w-[25%] w-full h-auto p-2  rounded-md mb-4 hover:bg-slate-100">
        <img className="w-full h-[400px] object-cover" src={image} alt="hello-1" />
        <h5 className="text-gray-500">{title}</h5>
        <div className="flex justify-between mt-3">
          <button className="border-[1.4px] rounded-md p-1 font-medium text-green-900 hover:bg-slate-100">
            $ {price}
          </button>
          <span
            onClick={() => handleAddProduct(id, title, price, image)}
            className="w-[35px] h-[35px] bg-slate-100 rounded-[50%] cursor-pointer flex justify-center items-center p-0 text-[28px]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24">
              <path
                fill="#888888"
                d="M11 9V6H8V4h3V1h2v3h3v2h-3v3zM7 22q-.825 0-1.412-.587T5 20q0-.825.588-1.412T7 18q.825 0 1.413.588T9 20q0 .825-.587 1.413T7 22m10 0q-.825 0-1.412-.587T15 20q0-.825.588-1.412T17 18q.825 0 1.413.588T19 20q0 .825-.587 1.413T17 22M1 4V2h3.275l4.25 9h7l3.9-7H21.7l-4.4 7.95q-.275.5-.737.775T15.55 13H8.1L7 15h12v2H7q-1.125 0-1.713-.975T5.25 14.05L6.6 11.6L3 4z"
              />
            </svg>
          </span>
        </div>
      </div>
    </>
  );
}
