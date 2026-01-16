import "./WhyChooseUs.css"

function WhyChooseUs() {
  return (
    <section className="why-section">
      <h2 className="why-title">Why Choose Us</h2>
      <p className="why-subtitle">
        With us, you experience the power of ideas, design and craftsmanship come alive.
      </p>

      <div className="why-grid">
        <div className="why-item">
          <div className="icon">%</div>
          <h4>Made to Order</h4>
          <p>
            We create personalised spaces that cater to your every requirement.
          </p>
        </div>

        <div className="divider"></div>

        <div className="why-item">
          <div className="icon">₹</div>
          <h4>Lowest Prices Guaranteed</h4>
          <p>
            We provide the best possible solutions that suit your finances.
          </p>
        </div>

        <div className="divider"></div>

        <div className="why-item">
          <div className="icon">✔</div>
          <h4>Quality Checks At Every Step</h4>
          <p>
            We guarantee thorough quality checks till project completion.
          </p>
        </div>

        <div className="divider"></div>

        <div className="why-item">
          <div className="icon">⏱</div>
          <h4>Timely Delivery Assurance</h4>
          <p>
            We proactively work on commitments to maintain our benchmark of ontime delivery.
          </p>
        </div>

        <div className="divider"></div>

        <div className="why-item">
          <div className="icon">★</div>
          <h4>11-Year Warranty</h4>
          <p>
            We invigorate client relationships by offering warranties that last a decade.
          </p>
        </div>
      </div>

      <div className="why-btn-wrapper">
        <button className="why-btn">Book Free Consultation</button>
      </div>
    </section>
  )
}

export default WhyChooseUs
