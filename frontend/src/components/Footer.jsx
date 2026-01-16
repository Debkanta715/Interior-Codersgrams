import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#0e2440] text-gray-300 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="flex p-6 border border-gray-600">
            <div className="mr-4 shrink-0">
              <img
                src="lowest-prices-guranteed.svg"
                alt="lowestPriceIcon"
                className="w-12 h-12"
              />
            </div>
            <div>
              <h3 className="font-semibold text-sm mb-2 text-white">
                LOWEST PRICE GUARANTEED
              </h3>
              <p className="text-xs">
                No false claims. You get what you see. Lowest Price Guaranteed
                on home interiors.
              </p>
            </div>
          </div>
          <div className="flex p-6 border border-gray-600">
            <div className="mr-4 shrink-0">
              <img
                src="delivery-assurance.svg"
                alt="deliveryIcon"
                className="w-12 h-12"
              />
            </div>
            <div>
              <h3 className="font-semibold text-sm mb-2 text-white">
                TIMELY DELIVERY ASSURANCE
              </h3>
              <p className="text-xs">
                Promised Timeline = Actual Date of Delivery. We strictly follow
                the timelines promised to you.
              </p>
            </div>
          </div>
          <div className="flex p-6 border border-gray-600">
            <div className="mr-4 shrink-0">
              <img
                src="lowcostemifooter.svg"
                alt="emiIcon"
                className="w-12 h-12"
              />
            </div>
            <div>
              <h3 className="font-semibold text-sm mb-2 text-white">
                LOW COST EMI
              </h3>
              <p className="text-xs">
                Get in touch with our designers to know more...
              </p>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="border-t border-gray-700 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-8">
            {/* Logo and Overview */}
            <div>
              <img
                src="interior-logo-white.svg"
                alt="interiorLogo"
                className="mb-6 h-12"
              />
            </div>
            <div>
              <h3 className="text-[#eb5976] font-semibold text-md mb-3">
                Overview
              </h3>
              <ul className="text-sm space-y-2">
                <li>
                  <a href="#" className="hover:text-white">
                    Interior Designer
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Trends
                  </a>
                </li>
              </ul>
            </div>

            {/* Network Sites */}
            <div>
              <h3 className="text-[#eb5976] font-semibold text-md mb-3">
                Network Sites
              </h3>
              <ul className="text-sm space-y-2">
                <li>
                  <a href="#" className="hover:text-white">
                    Square Yards UAE
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Prop VR
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Square Yards Canada
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Square Yards India
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Prop AMC
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Urban Money
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    UKM Oceans
                  </a>
                </li>
              </ul>
            </div>

            {/* Interior */}
            <div>
              <h3 className="text-[#eb5976] font-semibold text-md mb-3">
                Interior
              </h3>
              <ul className="text-sm space-y-2">
                <li>
                  <a href="#" className="hover:text-white">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </div>

            {/* More */}
            <div>
              <h3 className="text-[#eb5976] font-semibold text-md mb-3">
                More
              </h3>
              <ul className="text-sm space-y-2">
                <li>
                  <a href="#" className="hover:text-white">
                    Commercial Interiors
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Lending Partners
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Refer And Earn
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact & Social */}
          <div className="grid grid-cols-1 md:grid-cols-3 place-content-center gap-8 border-t border-gray-700 pt-8">
            {/* Column 1 */}
            <div>
              <h3 className="text-[#eb5976] font-semibold text-md mb-3">
                Contact Us
              </h3>
              <div className="text-sm space-y-2 mb-4">
                <p>Call us on, toll free no.</p>
                <p className="font-semibold">1800 208 3344</p>
                <p>Write to us at</p>
                <p>care@interiorcompany.com</p>
              </div>
            </div>

            {/* Column 2 */}
            <div>
              <h3 className="text-[#eb5976] font-semibold text-sm mb-3">
                Address
              </h3>
              <p className="text-sm font-bold mb-4">
                3B, Rajendra Nagar, Pusa Road, <br /> New Delhi, Central Delhi
                DL 110060 IN
              </p>
            </div>

            {/* Column 3 */}
            <div>
              <h3 className="text-[#eb5976] font-semibold text-sm mb-3">
                Social Links
              </h3>
              <div className="flex gap-3">
                <a href="#">
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-square-facebook"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-linkedin"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-youtube"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Design Ideas and Interior Designers Section */}
          <div className="grid grid-cols-1 md:grid-cols-4 place-content-center gap-5 border-t border-gray-700 pt-8">
            {/* Modular Kitchen list */}
            <div>
              <h3 className="text-[#eb5976] font-semibold text-md mb-3">
                Modular Kitchen
              </h3>
              <ul className="text-sm space-y-2">
                <li>
                  <a href="#" className="hover:text-white">
                    Modular Kitchen Design Ideas
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Kitchen Cost Calculator
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Kitchen Blogs
                  </a>
                </li>
              </ul>
            </div>

            {/* Design Ideas List */}
            <div>
              <h3 className="text-[#eb5976] font-semibold text-md mb-3">
                Design Ideas
              </h3>
              <ul className="text-sm space-y-2">
                <li>
                  <a href="#" className="hover:text-white">
                    Living Room Designs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Modular Kitchen Designs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Wardrobe Designs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Master Bedroom Designs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Kids Room Designs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Kitchen Wall Tiles Designs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Kitchen False Ceiling Designs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Balcony Designs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    TV Unit Designs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Bathroom Designs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Pooja Mandir Designs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Dining Room Designs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    False Ceiling Designs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Wall Paint Designs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Wall Designs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Window Designs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Tiles Designs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Staircase Designs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Door Designs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Wall Colour Combination Designs
                  </a>
                </li>
              </ul>
            </div>

            {/* Interior Designers List */}
            <div>
              <h3 className="text-[#eb5976] font-semibold text-md mb-3">
                Interior Designers
              </h3>
              <ul className="text-sm space-y-2">
                <li>
                  <a href="#" className="hover:text-white">
                    Interior Designers in Bangalore
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Interior Designers in Delhi
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Interior Designers in Gurgaon
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Interior Designers in Pune
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Interior Designers in Noida
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Interior Designers in Mumbai
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Interior Designers in Navi Mumbai
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Interior Designers in Thane
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Interior Designers in Chennai
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Interior Designers in Hyderabad
                  </a>
                </li>
              </ul>
            </div>

            {/* Download App */}
            <div>
              <h3 className="text-[#eb5976] font-semibold text-md mb-3">
                Download our app now
              </h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <img src="app-store-img.webp" />
                  <img src="play-store-img.webp" />
                </div>
                <div className="flex gap-8">
                  <div>
                    <img src="inco-appstore-barcode.webp" />
                    <p className="text-white font-medium text-center text-xs mt-1">
                      App Store
                    </p>
                  </div>
                  <div>
                    <img src="inco-appstore-barcode.webp" />
                    <p className="text-white font-medium text-center text-xs mt-1">
                      Play Store
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright Section */}
          <div className="border-t border-gray-700 font-bold mt-8 pt-4 text-sm">
            <p>© 2024 www.interiorcompany.com. All rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
