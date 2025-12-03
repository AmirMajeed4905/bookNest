import { useState } from 'react';
import { RichTextEditor } from '@mantine/rte';
import { TextInput, NumberInput, Button } from '@mantine/core';
import axios from 'axios';

const ProductForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    category: '',
    image: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/products', formData);
      alert('Product added to DB!');
      setFormData({ name: '', description: '', price: '', category: '', image: '' });
    } catch (err) {
      console.error(err);
      alert('Error adding product');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-50 to-purple-50 p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-lg space-y-6"
      >
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Add New Product
        </h2>

        <TextInput
          name="name"
          placeholder="Product Name"
          value={formData.name}
          onChange={handleChange}
          radius="md"
          size="md"
          className="border-2 border-amber-400 focus:ring-2 focus:ring-amber-400"
        />

        <RichTextEditor
          value={formData.description}
          onChange={(value) => setFormData({ ...formData, description: value })}
          placeholder="Enter product description..."
          className="border-2 border-amber-400 rounded-lg"
        />

        <NumberInput
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={(value) => setFormData({ ...formData, price: value })}
          radius="md"
          size="md"
          className="border-2 border-amber-400 focus:ring-2 focus:ring-amber-400"
        />

        <TextInput
          name="category"
          placeholder="Category"
          value={formData.category}
          onChange={handleChange}
          radius="md"
          size="md"
          className="border-2 border-amber-400 focus:ring-2 focus:ring-amber-400"
        />

        <TextInput
          name="image"
          placeholder="Image URL"
          value={formData.image}
          onChange={handleChange}
          radius="md"
          size="md"
          className="border-2 border-amber-400 focus:ring-2 focus:ring-amber-400"
        />

        <Button
          type="submit"
          fullWidth
          radius="md"
          size="md"
          className="bg-amber-500 hover:bg-amber-600 transition text-white font-bold"
        >
          Add Product
        </Button>
      </form>
    </div>
  );
};

export default ProductForm;
