import { useQuery } from 'react-query';
import { axiosClient } from '../../libs/axios-client';
import { ProductCard } from '../cards/product-card';
import { Link } from 'react-router-dom';
import { IProduct } from '../../hooks/carts/card-slice';
import { useSelector } from 'react-redux';

export default function ListProduct() {
  const carts: Array<IProduct> = useSelector((state: any) => state?.cart?.carts);
  const { data } = useQuery({
    queryKey: 'products-list',
    queryFn: async () => {
      return (await axiosClient.get('/products')).data;
    }
  });
  console.log(data);
  return (
    <>
      <header className="bg-gray-600 text-center p-6 flex justify-between sticky top-0 left-0">
        <h1 className="font-medium text-white">Redux Toolkit with REACTJS</h1>
        <Link className="relative" to={'/list-carts'}>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
            <path
              fill="#fff"
              d="M10 8q-.425 0-.712-.288T9 7q0-.425.288-.712T10 6h4q.425 0 .713.288T15 7q0 .425-.288.713T14 8zM7 22q-.825 0-1.412-.587T5 20q0-.825.588-1.412T7 18q.825 0 1.413.588T9 20q0 .825-.587 1.413T7 22m10 0q-.825 0-1.412-.587T15 20q0-.825.588-1.412T17 18q.825 0 1.413.588T19 20q0 .825-.587 1.413T17 22M3 4H2q-.425 0-.712-.288T1 3q0-.425.288-.712T2 2h1.65q.275 0 .525.15t.375.425L8.525 11h7l3.625-6.5q.125-.25.35-.375T20 4q.575 0 .863.488t.012.987L17.3 11.95q-.275.5-.737.775T15.55 13H8.1L7 15h11q.425 0 .713.288T19 16q0 .425-.288.713T18 17H7q-1.125 0-1.713-.975T5.25 14.05L6.6 11.6z"
            />
          </svg>
          <h2 className="absolute top-[-18px] right-[-6px] text-[20px] font-extrabold text-yellow-500">
            {carts.length}
          </h2>
        </Link>
      </header>
      <div className="flex flex-wrap sm:flex-col md:flex-row mt-4">
        {data?.map((p: any, i: number) => (
          <ProductCard key={i} id={p?.id} title={p?.title} price={p?.price} image={p?.image} />
        ))}
      </div>
    </>
  );
}
