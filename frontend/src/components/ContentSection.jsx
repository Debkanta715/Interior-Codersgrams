import "./ContentSection.css"
import ProductCard from "./ProductCard"

function ContentSection() {
  return (
    <section className="content-section">
      <h2 className="section-heading">
        Discover Your Dream Home: Dive into Our Decor & Furniture Collection!
      </h2>

      <div className="card-grid">
        <ProductCard
          title="Wallpapers"
          discount="Upto 27% Discount"
          image="https://images.unsplash.com/photo-1586023492125-27b2c045efd7"
        />

        <ProductCard
          title="Sofas"
          discount="Upto 55% Discount"
          image="https://images.unsplash.com/photo-1549187774-b4e9b0445b41"
        />

        <ProductCard
          title="Beds"
          discount="Upto 48% Discount"
          image="https://plus.unsplash.com/premium_photo-1670076515907-2736a3492f23?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmVkc3xlbnwwfHwwfHx8MA%3D%3D"
        />

        <ProductCard
          title="Coffee Tables"
          discount="Upto 50% Discount"
          image="https://images.unsplash.com/photo-1542372147193-a7aca54189cd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29mZmVlJTIwdGFibGV8ZW58MHx8MHx8fDA%3D"
        />

        <ProductCard
          title="Side Tables"
          discount="Upto 50% Discount"
          image="https://plus.unsplash.com/premium_photo-1673014201794-0b086630d541?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2lkZSUyMHRhYmxlc3xlbnwwfHwwfHx8MA%3D%3D"
        />

        <ProductCard
          title="Hobs"
          discount="Upto 29% Discount"
          image="https://www.interiorcompany.com/_next/image?url=https%3A%2F%2Fimg.interiorcompany.com%2Finterior%2Fimages%2FHobs.png&w=540&q=75"
        />

        <ProductCard
          title="Clocks"
          discount="Upto 50% Discount"
          image="https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2xvY2tzfGVufDB8fDB8fHww"
        />

        <ProductCard
          title="Chimneys"
          discount="Upto 60% Discount"
          image="https://www.interiorcompany.com/_next/image?url=https%3A%2F%2Fimg.interiorcompany.com%2Finterior%2Fimages%2FChimneys.png&w=540&q=75"
        />

        <ProductCard
          title="Chairs"
          discount="Upto 45% Discount"
          image="https://images.unsplash.com/photo-1594000311835-6d564e5a46b3?q=80&w=711&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />

        <ProductCard
          title="Bedside Tables"
          discount="Upto 48% Discount"
          image="https://images.unsplash.com/photo-1616627561839-074385245ff6"
        />
        <ProductCard
          title="Explore More Deals"
          discount="Shop Now"
          image="https://www.interiorcompany.com/_next/image?url=%2Fassets%2Fimages%2Fspecialoffer.png&w=540&q=75"
        />
      </div>
    </section>
  )
}

export default ContentSection
