import React from 'react';
import { motion } from 'framer-motion';

const Products = () => {
  const products = [
    {
      id: 1,
      name: "100% Natural Moisture Cream",
      description: "Collagen booster with certified organic ingredients for deep hydration and skin renewal",
      image: "/images/products/moisture-cream.jpg",
      price: "$52",
      features: ["100% Natural", "Collagen Booster", "Certified Organic", "50 ML"]
    },
    {
      id: 2,
      name: "SPF 50+ Sunscreen",
      description: "Broad spectrum UVA + UVB protection with natural ingredients for daily sun care",
      image: "/images/products/sunscreen.jpg",
      price: "$38",
      features: ["SPF 50+", "UVA + UVB Filter", "100% Natural", "100 ML"]
    },
    {
      id: 3,
      name: "Purifying Cleanser",
      description: "Gentle daily cleanser with organic extracts for clean, refreshed skin",
      image: "/images/products/cleanser.jpg",
      price: "$45",
      features: ["100% Natural", "Gentle Formula", "Certified Organic", "200 ML"]
    }
  ];

  return (
    <section id="products" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-light text-neoshe mb-4">
            Our Signature Collection
          </h2>
          <p className="text-gray-600 max-w-xl font-light mx-auto text-base">
            Three essential products for a complete luxury skincare routine
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-sm border border-white/30 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col"
            >
              {/* Product Image */}
              <div className="aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="hidden w-full h-full items-center justify-center bg-gradient-to-br from-neoshe/10 to-neoshe/20">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-neoshe/20 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-xl">🧴</span>
                    </div>
                    <p className="text-neoshe font-light text-sm">Product Image</p>
                  </div>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-4 flex flex-col flex-grow">
                {/* Name & Description */}
                <div className="flex-grow">
                  <h3 className="text-xl font-regular text-neoshe mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-3 text-sm leading-snug">{product.description}</p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-1 mb-3">
                    {product.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 bg-white/60 backdrop-blur-sm border border-white/40 text-neoshe text-xs rounded-full font-light"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Price & Shop Now Button */}
                <div className="mt-auto flex items-center justify-between pt-2 border-t border-gray-100">
                  <span className="text-xl font-light text-neoshe">{product.price}</span>
                  <button className="bg-neoshe hover:bg-neoshe-dark text-white px-4 py-2 rounded-full text-sm font-light transition-all duration-300 transform hover:scale-105 shadow-sm hover:shadow-md">
                    Shop Now
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
