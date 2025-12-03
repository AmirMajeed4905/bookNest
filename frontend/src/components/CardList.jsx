import { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';

const CardList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await axios.get('http://localhost:5000/api/products');
      setProducts(res.data);
    };
    fetchProducts();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
      {products.map((p) => (
        <Card key={p._id} image={p.image} title={p.name} />
      ))}
    </div>
  );
};

export default CardList;
