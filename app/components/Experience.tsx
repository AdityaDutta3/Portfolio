import { motion } from "framer-motion";

function Experience() {
  return (
    <section className="py-8 bg-white text-gray-800" id="experience">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-4xl font-extrabold text-black bg-clip-text  mb-8">
          My Experience
        </h2>
        <div className="space-y-8">
          {/* Experience 1 */}
          <motion.div
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="flex items-start justify-center sm:flex-col sm:items-center sm:text-center"
          >
            <div className="w-6 h-6 bg-yellow-400 rounded-full shadow-lg"></div>
            <div className="ml-4 sm:ml-0 sm:mt-4 bg-gray-100 p-4 rounded-lg shadow-lg w-full md:w-3/4 lg:w-1/2">
              <h3 className="text-xl font-semibold text-yellow-500">Cloud and IT Analyst</h3>
              <h4 className="text-sm text-gray-600">Shoplogix | May 2024 – August 2024</h4>
              <ul className="text-gray-500 mt-2 space-y-1">
                <li>• Validated 2 years of cloud data for accuracy.</li>
                <li>• Optimized server performance for high availability.</li>
                <li>• Created secure BYOD policy for device access.</li>
              </ul>
            </div>
          </motion.div>

          {/* Experience 2 */}
          <motion.div
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="flex items-start justify-center sm:flex-col sm:items-center sm:text-center"
          >
            <div className="w-6 h-6 bg-green-500 rounded-full shadow-lg"></div>
            <div className="ml-4 sm:ml-0 sm:mt-4 bg-gray-100 p-4 rounded-lg shadow-lg w-full md:w-3/4 lg:w-1/2">
              <h3 className="text-xl font-semibold text-green-500">Cloud Analyst</h3>
              <h4 className="text-sm text-gray-600">Centrilogic | Jan 2023 – Apr 2023</h4>
              <ul className="text-gray-500 mt-2 space-y-1">
                <li>• Designed and deployed cloud infrastructure.</li>
                <li>• Stayed up to date with cloud technologies.</li>
                <li>• Managed servers using vSphere and SolarWinds.</li>
              </ul>
            </div>
          </motion.div>

          {/* Experience 3 */}
          <motion.div
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="flex items-start justify-center sm:flex-col sm:items-center sm:text-center"
          >
            <div className="w-6 h-6 bg-blue-500 rounded-full shadow-lg"></div>
            <div className="ml-4 sm:ml-0 sm:mt-4 bg-gray-100 p-4 rounded-lg shadow-lg w-full md:w-3/4 lg:w-1/2">
              <h3 className="text-xl font-semibold text-blue-500">Tutor: Java/Python/JavaScript</h3>
              <h4 className="text-sm text-gray-600">Sheridan College | Aug 2023 – Apr 2024</h4>
              <ul className="text-gray-500 mt-2 space-y-1">
                <li>• Taught Java, Python, JavaScript with a focus on fundamentals.</li>
                <li>• Developed personalized learning plans, boosting performance by 20%.</li>
                <li>• Created coding resources to support student learning.</li>
              </ul>
            </div>
          </motion.div>

          {/* Experience 4 */}
          <motion.div
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="flex items-start justify-center sm:flex-col sm:items-center sm:text-center"
          >
            <div className="w-6 h-6 bg-purple-500 rounded-full shadow-lg"></div>
            <div className="ml-4 sm:ml-0 sm:mt-4 bg-gray-100 p-4 rounded-lg shadow-lg w-full md:w-3/4 lg:w-1/2">
              <h3 className="text-xl font-semibold text-purple-500">Google Developer Student Clubs (GDSE)</h3>
              <h4 className="text-sm text-gray-600">Aug 2023 – Dec 2024</h4>
              <ul className="text-gray-500 mt-2 space-y-1">
                <li>• Organized events with Google experts, focused on GCP.</li>
                <li>• Managed social media, growing membership by 30%.</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
