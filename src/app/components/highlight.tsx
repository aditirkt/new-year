function Highlight() {
  return (
    <div className="w-full" data-aos="fade-in">
      <div className="flex justify-center gap-8 items-center">
        {[
          {
            title: "Dhanurmaas Puja",
            desc: "Begin the New Year with sacred Dhanurmaas puja and divine blessings.",
            image:
              "images/highlights/1.webp",
          },
          {
            title: "Special Segment by the South Indian Community",
            desc: "Experience vibrant cultural presentations and devotional offerings from our South Indian community.",
            image:
              "images/highlights/2.webp",
          },
          {
            title: "Sunderkand, Hanuman Chalisa & Arti",
            desc: "Join us for soulful recitations, arti, and collective prayers, filling the evening with devotion and peace.",
            image: "https://via.placeholder.com/400?text=Interactive+Games",
          },
          
        ].map((activity, idx) => (
          <div
            key={idx}
            className="rounded-xl w-full sm:w-60 bg-white bg-clip-border shadow-md">
            {/* Image Section */}
            <div className="mx-auto mt-4 h-40 w-40 overflow-hidden rounded-xl bg-white bg-clip-border shadow-lg">
              <img
                src={activity.image}
                alt={`${activity.title}-picture`}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Content Section */}
            <div className="p-2 sm:p-3 text-center">
              <h4 className="mb-2 block text-lg h-20 font-semibold tracking-normal text-blue-gray-900 antialiased">
                {activity.title}
              </h4>
              <p className="block h-40 bg-gradient-to-tr from-rose-950 to-rose-400 bg-clip-text text-sm sm:text-base font-small leading-relaxed text-transparent antialiased">
                {activity.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Highlight;
