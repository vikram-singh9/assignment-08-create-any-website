import React from 'react'

const Section2 = () => {
  return (
    <div>
        {/* Section with 4 Number Boxes */}
        <h2 className="text-3xl font-bold text-center mb-4 py-9">Statistics</h2>
      <section className="py-10 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {/* Box 1 */}
            <div className="p-6 bg-blue-100 rounded-lg shadow-md">
              <h3 className="text-4xl font-extrabold text-blue-600">120+</h3>
              <p className="mt-2 text-gray-700">Happy Clients</p>
            </div>

            {/* Box 2 */}
            <div className="p-6 bg-green-100 rounded-lg shadow-md">
              <h3 className="text-4xl font-extrabold text-green-600">50+</h3>
              <p className="mt-2 text-gray-700">Projects Completed</p>
            </div>

            {/* Box 3 */}
            <div className="p-6 bg-yellow-100 rounded-lg shadow-md">
              <h3 className="text-4xl font-extrabold text-yellow-600">30+</h3>
              <p className="mt-2 text-gray-700">Team Members</p>
            </div>

            {/* Box 4 */}
            <div className="p-6 bg-red-100 rounded-lg shadow-md">
              <h3 className="text-4xl font-extrabold text-red-600">10+</h3>
              <p className="mt-2 text-gray-700">Years of Experience</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Section2