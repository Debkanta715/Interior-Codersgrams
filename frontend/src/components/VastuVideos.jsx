import "./VastuVideos.css"

const videos = [
  {
    id:"iLDPG7_7nLM",
    title:
      "Remedies for Wrong Bedroom Placement | The Vastu Edit By Interior Company",
    desc:
      "Is your master bedroom not in the right Vastu direction?",
    time: "Published 106 days ago",
  },
  {
    id: "eCYzbTFfAmk",
    title:
      "North-East Kitchen Vastu Remedies | The Vastu Edit By Interior Company",
    desc:
      "The kitchen is the heart of every home, but when placed incorrectly...",
    time: "Published 106 days ago",
  },
  {
    id: "6NGfoK_tElg",
    title:
      "How to Fix North-East Toilet Vastu Dosh | The Vastu Edit",
    desc:
      "Toilet in the North-East (Ishaan) Corner? In Vastu Shastra...",
    time: "Published 106 days ago",
  },
  {
    id: "WKZZY8Yj8AM",
    title:
      "Kitchen Vastu Mistakes You’re Probably Making",
    desc:
      "Your kitchen is more than a cooking space – it’s the heart of the home.",
    time: "Published 139 days ago",
  },
]

function VastuVideos() {
  return (
    <section className="vastu-section">
      <div className="vastu-container">
        <h2 className="vastu-title">Vastu Insights by Our Experts</h2>
        <p className="vastu-subtitle">
          Watch our designers decode the balance between design, energy, and harmony for your home.
        </p>

        <div className="video-grid">
          {videos.map((video, index) => (
            <div className="video-card" key={index}>
              <div className="video-frame">
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              <h4>{video.title}</h4>
              <p className="desc">{video.desc}</p>
              <span className="time">{video.time}</span>
            </div>
          ))}
        </div>

        <div className="view-all">
          <button>View All</button>
        </div>
      </div>
    </section>
  )
}

export default VastuVideos
