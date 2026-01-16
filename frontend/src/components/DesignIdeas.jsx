import "./DesignIdeas.css"
import DesignCard from "./DesignCard"

function DesignIdeas() {
  return (
    <section className="design-section">
      <h2 className="design-title">Design Ideas for Every Space</h2>
      <p className="design-subtitle">
        Because every corner holds a unique design potential.
      </p>

      <div className="tabs">
        <button className="active">Wall Colour Combination</button>
        <button>Living Room</button>
        <button>Modular Kitchen</button>
        <button>Wardrobe</button>
        <button>Master Bedroom</button>
        <button>Kids Room</button>
        <button>Kitchen Wall Tiles</button>
      </div>

      <div className="design-grid">
        <DesignCard
          image="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
          text="Bold Terracotta and White Wall Colour Combination for Dining Room..."
        />

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
