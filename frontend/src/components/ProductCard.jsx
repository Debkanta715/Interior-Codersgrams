function ProductCard({ title, discount, image }) {
  return (
    <div className="product-card">
      <div className="image-wrapper">
        <img src={image} alt={title} />
      </div>

      <div className="card-text">
        <p className="title">{title}</p>
        <p className="discount">
          {discount} <span>→</span>
        </p>
      </div>
    </div>
  )
}

export default ProductCard
