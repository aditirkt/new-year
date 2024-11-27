"use client";

export default function Schedule() {
  return (
    
      <div className="max-w-4xl mx-auto text-center">
        
        <p className="text-lg text-gray-600 mb-8">
          Embrace the spirit of devotion and community on{" "}
          <span className="font-semibold text-rose-700">Wednesday, January 1st, 2025</span>.  
          Join us for a soulful day filled with sacred rituals, cultural offerings, and divine music,  
          culminating in a shared feast that nourishes both body and spirit.
        </p>
        <div className="space-y-8">
          {/* Event 1 */}
          <div className="bg-white shadow-lg rounded-lg p-6" data-aos="fade-left">
            <h3 className="text-2xl font-semibold text-emerald-700 mb-2">
              Morning: Dhanurmaas Puja Segment
            </h3>
            <p className="text-gray-600">
              Begin the New Year by invoking divine blessings through the auspicious  
              Dhanurmaas puja, a sacred offering to start the year on a spiritual note.
            </p>
          </div>
          {/* Event 2 */}
          <div className="bg-white shadow-lg rounded-lg p-6" data-aos="fade-left">
            <h3 className="text-2xl font-semibold text-emerald-700 mb-2">
              10:00 AM - 12:30 PM: Special Segment by the South Indian Community
            </h3>
            <p className="text-gray-600">
              Immerse yourself in a vibrant showcase of cultural heritage and devotion  
              as the South Indian community presents traditional offerings and performances.
            </p>
          </div>
          {/* Event 3 */}
          <div className="bg-white shadow-lg rounded-lg p-6" data-aos="fade-left">
            <h3 className="text-2xl font-semibold text-emerald-700 mb-2">
              4:30 PM - 8:00 PM: Sunderkand, Hanuman Chalisa & Arti
            </h3>
            <p className="text-gray-600">
              Unwind your soul with melodious recitations of Sunderkand and Hanuman Chalisa.  
              Join the vibrant evening arti that fills the air with spiritual energy and peace.
            </p>
          </div>
        </div>
        {/* Closing Section */}
        <div className="mt-8 bg-yellow-50 shadow-md rounded-lg p-6" data-aos="fade-left">
          <h4 className="text-xl font-semibold text-rose-800 mb-2">
            Followed by Mahaprasad
          </h4>
          <p className="text-gray-600">
            End the celebration by partaking in a blessed Mahaprasad,  
            a feast shared with love and devotion among the community.
          </p>
        </div>
      </div>
  
  );
}
