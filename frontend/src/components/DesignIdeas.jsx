import "./DesignIdeas.css"
import { useState, useEffect } from "react"
import DesignCard from "./DesignCard"
import { designAPI } from "../services/api"

const categories = ['Wall Colour Combination', 'Living Room', 'Modular Kitchen', 'Wardrobe', 'Master Bedroom', 'Kids Room', 'Kitchen Wall Tiles'];

function DesignIdeas() {
  const [designs, setDesigns] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('Wall Colour Combination');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchDesigns(selectedCategory);
  }, [selectedCategory]);

  const fetchDesigns = async (category) => {
    setLoading(true);
    try {
      const data = await designAPI.getAll(category);
      setDesigns(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error('Failed to fetch designs:', error);
      setDesigns([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="design-section">
      <h2 className="design-title">Design Ideas for Every Space</h2>
      <p className="design-subtitle">
        Because every corner holds a unique design potential.
      </p>

      <div className="tabs">
        {categories.map((category) => (
          <button
            key={category}
            className={selectedCategory === category ? 'active' : ''}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="design-grid">
        {loading ? (
          <p style={{ textAlign: 'center', width: '100%' }}>Loading designs...</p>
        ) : designs.length > 0 ? (
          designs.map((design) => (
            <DesignCard
              key={design._id}
              image={design.image}
              text={design.title}
            />
          ))
        ) : (
          <DesignCard
            image="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
            text="Bold Terracotta and White Wall Colour Combination for Dining Room..."
          />
        )}

        <DesignCard
          image="https://images.unsplash.com/photo-1618220179428-22790b461013"
          text="Artistic Olive and Beige Wall Colour Combination for Living Room..."
        />

        <DesignCard
          image="https://images.unsplash.com/photo-1600210492493-0946911123ea"
          text="Timeless Blue and White Wall Colour Combination for Bedroom..."
        />

        <DesignCard
          image="https://images.unsplash.com/photo-1600489000022-c2086d79f9d4"
          text="Unique Grey and Cream Wall Colour Combination for Kitchen..."
        />

        <DesignCard
          image="https://images.unsplash.com/photo-1600121848594-d8644e57abab"
          text="Sophisticated Beige and Brown Wall Colour Combination..."
        />

        <DesignCard
          image="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c"
          text="Graceful Grey and Blue Wall Colour Combination..."
        />

        {/* CTA CARD */}
        <div className="cta-card">
          <h3>
            Explore More <br />
            <span>Wall Colour</span> <br />
            Combination Designs
          </h3>
          <button>View All</button>
        </div>
      </div>
       <div className="explore-more-wrapper">
        <button className="explore-more-btn">
          Explore More Designs
        </button>
      </div>
    </section>
  )
}   

export default DesignIdeas
