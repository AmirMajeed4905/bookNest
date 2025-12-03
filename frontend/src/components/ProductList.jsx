// ProductList.jsx
import { useEffect, useState } from 'react';
import axios from 'axios';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Backend port sahi rakho
    axios.get('http://localhost:5000/api/products')
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <h1 className="text-3xl font-bold text-center mb-8">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.length === 0 && (
          <p className="text-center col-span-full text-gray-500">No products available.</p>
        )}
        {products.map(p => (
          <div key={p._id} className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition">
            {p.image && (
              <img
                src={`http://localhost:5000${p.image}`}
                alt={p.name}
                className="w-full h-48 object-cover"
              />
            )}
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{p.name}</h2>
              <p
                dangerouslySetInnerHTML={{ __html: p.description }}
                className="text-gray-700 mb-2"
              ></p>
              <p className="font-semibold">Price: ${p.price}</p>
              <p className="text-gray-500">Category: {p.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
