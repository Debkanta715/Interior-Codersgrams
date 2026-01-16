import "./Tour360.css"
import Tour360Card from "./Tour360Card"

function Tour360() {
  return (
    <section className="tour-section">
      <h2 className="tour-title">
        A 360-Degree Tour Of Our Executed Projects
      </h2>
      <p className="tour-subtitle">
        Like our designs? Explore them from a different perspective!
      </p>

      {/* TOP ROW */}
      <div className="tour-grid top-grid">
        <Tour360Card
          image="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
          location="Bangalore"
        />
        <Tour360Card
          image="https://images.unsplash.com/photo-1618220179428-22790b461013"
          location="Noida"
        />
      </div>

      {/* BOTTOM ROW */}
      <div className="tour-grid bottom-grid">
        <Tour360Card
          image="https://images.unsplash.com/photo-1600210492493-0946911123ea"
          location="Pune"
        />
        <Tour360Card
          image="https://images.unsplash.com/photo-1600489000022-c2086d79f9d4"
          location="Gurgaon"
        />
        <Tour360Card
          image="https://images.unsplash.com/photo-1600121848594-d8644e57abab"
          location="Hyderabad"
        />
      </div>
      <div className="experience-wrapper">
        <button className="experience-btn">
          Experience it Now
        </button>
      </div>
    </section>
  )
}

export default Tour360
