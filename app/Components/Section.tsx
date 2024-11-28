import React from 'react'

const Section = () => {
  return (
    <div>
        <section className="py-10 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Explore Our Properties</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Box 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="/images/img1.webp"
                alt="Feature 1"
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">Town House</h3>
                <p className="text-gray-600">
                Our town house is a multi-level, compact residential property, typically part of a row of similar homes, offering urban convenience and shared walls.
                </p>
              </div>
            </div>

            {/* Box 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="/images/img2.webp"
                alt="Feature 2"
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">Modern Villa</h3>
                <p className="text-gray-600">
                Our modern villa is a spacious, stylish standalone home featuring contemporary design, luxury amenities, and an emphasis on indoor-outdoor living.
                </p>
              </div>
            </div>

            {/* Box 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="/images/img3.webp"
                alt="Feature 3"
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">Single Family</h3>
                <p className="text-gray-600">
                Our single-family home is a standalone residential property designed to house one family, offering privacy and space with no shared walls.
                </p>
              </div>
            </div>

            {/* Box 4 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="/images/img4.webp"
                alt="Feature 4"
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">Office</h3>
                <p className="text-gray-600">
                Our office is designed for administrative, professional, or business activities, typically equipped with desks, computers, and meeting areas.
                </p>
              </div>
            </div>

            {/* Box 5 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="/images/img5.webp"
                alt="Feature 5"
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">Appartement</h3>
                <p className="text-gray-600">
                Our apartment is a self-contained residential unit within a larger building, offering private living spaces with shared amenities and facilities.
                </p>
              </div>
            </div>

            {/* Box 6 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="/images/img6.webp"
                alt="Feature 6"
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">Farm House</h3>
                <p className="text-gray-600">
                  Our Farmhouse is a rural property, typically with a large plot of land, designed for agricultural use or as a peaceful retreat with natural surroundings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Section