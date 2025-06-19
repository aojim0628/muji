import product from '../json/product.json';
import { HeartOutlined, ShoppingCartOutlined } from '@ant-design/icons'

function ProductCard({ product }) {
    return (
        <div className="flex flex-col text-left w-50">
            <img
                src={product.image || '/images/default.jpg'}
                alt={product.name}
                className="w-100 object-cover mb-2"
            />
            <h3 className="font-bold text-sm mb-1 truncate text-gray-900 px-1">{product.name}</h3>
            {/* <p className="text-sm text-gray-500 mb-2">{product.cartagory}</p> */}
                <p className="text-red-800 font-semibold mb-2 px-1">NT${product.price}</p>
                {/* <p className="text-gray-700 text-sm flex-grow">{product.describtion || '無描述'}</p> */}
            <div className='flex justify-end gap-2 px-1'>
                <HeartOutlined style={{ color: 'black', fontSize: 18 }} />
                <ShoppingCartOutlined style={{ color: 'black', fontSize: 18 }} />
                </div>
            </div>
    );
}

// function ProductList() {
//     return (
//         <div className="">
//             <p className="font-bold text-2xl text-gray-900 text-left mb-3">最新商品</p>
//             <div className="flex">
//                 {product.map(product => (
//                     <ProductCard key={product.id} product={product} />
//                 ))}
//             </div>
//         </div>
//     );
// }

function ProductList() {
  return (
    <div className="">
      <p className="font-bold text-2xl text-gray-900 text-left mb-3">最新商品</p>
      <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 justify-items-center items-center">
        {product.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}


export default ProductList;
