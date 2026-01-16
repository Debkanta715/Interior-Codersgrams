import { useEffect, useState } from "react"
import "./WorkProcess.css"

const steps = [
  {
    label: "Meet Us",
    title: "Meet Us",
    desc:
      "Let us know more about each other. We can meet over a cup of coffee or even online too. We’d like to know what you’re looking for"
  },
  {
    label: "Scope of Work",
    title: "Scope of Work",
    desc:
      "We define the complete scope, timelines and deliverables before execution begins."
  },
  {
    label: "Seal The Deal",
    title: "Seal The Deal",
    desc:
      "Once finalised, you can seal the deal by paying a signing amount of 10%. Pay 50% of the order value to kickstart the process and the balance before handover."
  },
  {
    label: "Execution",
    title: "Execution",
    desc:
      "Our team executes the project with strict quality checks at every stage."
  },
  {
    label: "Stamp of Approval",
    title: "Stamp of Approval",
    desc:
      "Final walkthrough and handover after your complete satisfaction."
  }
]

function WorkProcess() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActive(prev => (prev + 1) % steps.length)
    }, 3500)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="work-section">
      <div className="work-container">

        {/* IMAGE (FIXED POSITION) */}
        <div className="work-image">
          <img
            src="https://www.interiorcompany.com/_next/image?url=%2Fassets%2Fimages%2FtheWayWeWorkNew.png&w=1200&q=75"
            alt="Work process"
          />
        </div>

        {/* CONTENT */}
        <div className="work-content">
          <h2 className="work-title">The Way We Work</h2>
          <p className="work-subtitle">
            Five steps is all it takes to elevate your style of living.
          </p>

          {/* STEPPER */}
          <div className="stepper">
            <div className="stepper-line"></div>

            {steps.map((step, index) => (
              <div
                key={index}
                className={`step ${active === index ? "active" : ""}`}
                onClick={() => setActive(index)}
              >
                <div className="circle">{index + 1}</div>
                <span>{step.label}</span>
              </div>
            ))}
          </div>

          {/* FIXED HEIGHT CONTENT */}
          <div className="content-wrapper">
            <h3 className="step-title">{steps[active].title}</h3>
            <p className="step-desc">{steps[active].desc}</p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default WorkProcess
