function DesignCard({ image, text }) {
  return (
    <div className="design-card">
      <img src={image} alt="design" />
      <div className="overlay">
        <p>{text}</p>
      </div>
    </div>
  )
}

export default DesignCard
