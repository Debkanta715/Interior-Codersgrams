import React from "react"
import "./ComparisonSection.css"

const rows = [
  {
    label: "Solutions",
    leftTitle: "All Under One Roof",
    leftDesc: "A one-stop destination to resolve all your queries",
    rightTitle: "Multiple Contractors & Market Trips",
    rightDesc: "Coordination with several intermediaries",
  },
  {
    label: "Dedicated Team",
    leftTitle: "Dedicated Team of Designers",
    leftDesc: "Experts who chalk out innovative solutions",
    rightTitle: "In-efficient Support",
    rightDesc: "No team to provide feasible results",
  },
  {
    label: "Vr Experience",
    leftTitle: "3D Visual Walkthroughs",
    leftDesc:
      "Home Interior Designs in tandem with interactive 3D Visual Walkthroughs",
    rightTitle: "No VR Walkthroughs",
    rightDesc: "Absence of Advanced Technology support",
  },
  {
    label: "Quality Assurance",
    leftTitle: "Periodic Inspections",
    leftDesc:
      "Well-timed quality reviews at various stages of the project",
    rightTitle: "No Periodic Quality Checks",
    rightDesc: "Usage of low-grade material to save cost",
  },
  {
    label: "Price",
    leftTitle: "No False Claims",
    leftDesc: "Lowest price guaranteed!",
    rightTitle: "Over promising & Under Delivery",
    rightDesc: "No price match guarantee",
  },
  {
    label: "Hidden Charges",
    leftTitle: "You Get What You See",
    leftDesc: "No Hidden Charges",
    rightTitle: "Overhead Charges",
    rightDesc: "Unidentified costs lead to higher prices",
  },
  {
    label: "Support",
    leftTitle: "We’re Right by Your Side",
    leftDesc: "Dedicated After Sales Support",
    rightTitle: "No After-Sales Support",
    rightDesc:
      "Customer service ends after the completion of the project",
  },
]

function ComparisonSection() {
  return (
    <section className="compare-section">
      <h2 className="compare-title">What Sets Us Apart?</h2>
      <p className="compare-subtitle">
        Sublime Designs. Prompt Services. Best Results
      </p>

      <div className="compare-table">
        {/* TABLE HEADER */}
        <div className="table-header empty"></div>
        <div className="table-header pink">Interior Company Experience</div>
        <div className="table-header grey">Typical Experience</div>

        {/* TABLE BODY */}
        {rows.map((row, index) => (
          <React.Fragment key={index}>
            <div className="table-cell label">{row.label}</div>

            <div className={`table-cell left ${index === 0 ? "top" : ""} ${index === rows.length - 1 ? "bottom" : ""}`}>
              <h4>{row.leftTitle}</h4>
              <p>{row.leftDesc}</p>
            </div>

            <div className="table-cell right">
              <h4>{row.rightTitle}</h4>
              <p>{row.rightDesc}</p>
            </div>
          </React.Fragment>
        ))}
      </div>
    </section>
  )
}

export default ComparisonSection
