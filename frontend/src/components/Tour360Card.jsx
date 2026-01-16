function Tour360Card({ image, location }) {
  return (
    <div className="tour-card">
      <img src={image} alt={location} />

      <div className="tour-icon">360°</div>

      <div className="tour-location">
        {location}
      </div>
    </div>
  )
}

export default Tour360Card
