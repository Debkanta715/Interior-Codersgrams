
const blogs = [
  {
    id: 1,
    title: "Modern Living Room Designs That Never Go Out of Style",
    category: "Living Room",
    image: "/blog/blog1.jpeg",
    featured: true,
  },
  {
    id: 2,
    title: "10 Modular Kitchen Ideas for Indian Homes",
    category: "Kitchen",
    image: "/blog/blog1.jpeg",
  },
  {
    id: 3,
    title: "Bedroom Lighting Ideas for a Cozy Home",
    category: "Bedroom",
    image: "/blog/blog1.jpeg",
  },
];

const FeaturedBlogs = () => {
  const main = blogs.find((b) => b.featured);
  const side = blogs.filter((b) => !b.featured);

  return (
    <section className="max-w-[1240px] mx-auto px-4 py-20">
      <h2 className="text-[32px] md:text-[40px] font-[500] mb-10 text-[#1c1c1c]">
        Featured Blogs
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* LEFT BIG CARD */}
        <div className="relative md:col-span-2 h-[460px] rounded-[24px] overflow-hidden group cursor-pointer">
          <img
            src={main.image}
            alt={main.title}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />

          {/* gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent" />

          {/* content */}
          <div className="absolute bottom-8 left-8 right-8 text-white">
            <span className="inline-block text-[11px] tracking-widest uppercase bg-white/20 px-4 py-1 rounded-full mb-4">
              {main.category}
            </span>
            <h3 className="text-[26px] md:text-[32px] font-[500] leading-snug max-w-[90%]">
              {main.title}
            </h3>
          </div>
        </div>

        {/* RIGHT STACK */}
        <div className="flex flex-col gap-6">
          {side.map((b) => (
            <div
              key={b.id}
              className="relative h-[215px] rounded-[24px] overflow-hidden group cursor-pointer"
            >
              <img
                src={b.image}
                alt={b.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="inline-block text-[11px] tracking-widest uppercase bg-white/20 px-4 py-1 rounded-full mb-3">
                  {b.category}
                </span>
                <h4 className="text-[18px] font-[500] leading-snug">
                  {b.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedBlogs;
