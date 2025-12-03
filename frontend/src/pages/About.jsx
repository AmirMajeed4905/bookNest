import React from 'react'
import ProductList from '../components/Productlist'

const About = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-6 text-center">About AM-DEV</h1>
      <p className="text-lg text-gray-700 mb-4">
        AM-DEV is a platform dedicated to providing high-quality web development resources, tutorials, and tools to help developers of all skill levels enhance their skills and build amazing web applications.
      </p>
      <ProductList />
    </div>
  )
}

export default About