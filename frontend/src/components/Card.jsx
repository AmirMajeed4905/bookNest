const Card = ({ image, title }) => (
  <div className="bg-white rounded-xl shadow-2xl overflow-hidden hover:scale-105 transform transition">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="text-lg font-bold">{title}</h3>
    </div>
  </div>
);

export default Card;
