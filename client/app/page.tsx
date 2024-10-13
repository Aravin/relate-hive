import {
  UserPlusIcon,
  ChartBarIcon,
  LockClosedIcon,
  ArrowRightCircleIcon,
} from '@heroicons/react/24/outline';

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl w-full space-y-8">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-gray-700 sm:text-5xl md:text-6xl">
            <span>Welcome to </span>
            <span className="text-red-500">Relat</span>
            <span className="text-green-500">Hive</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-gray-500">
            Connect, Visualize, and Preserve Your Family Tree
          </p>
        </div>
        <p className="text-lg text-gray-600 text-center">
          Tired of forgetting distant relatives&apos; names or struggling to explain
          your family history?
        </p>

        <div className="bg-white shadow-lg rounded-lg p-8 md:p-12">
          <h3 className="text-3xl font-bold text-gray-700 text-center mb-8">
            RelatHive empowers you to:
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Feature 1 */}
            <div className="flex flex-col items-center">
              <div className="bg-indigo-100 rounded-full p-4 mb-4">
                <UserPlusIcon className="h-8 w-8 text-indigo-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-700 mb-2">
                Build Your Family Tree with Ease
              </h4>
              <ul className="list-disc list-inside text-gray-600 text-sm">
                <li>Intuitive Interface: Add relatives effortlessly.</li>
                <li>
                  Dynamic Visualization: See your family tree come to life.
                </li>
                <li>
                  Comprehensive Information: Include photos, stories, and more!
                </li>
              </ul>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col items-center">
              <div className="bg-yellow-100 rounded-full p-4 mb-4">
                <ChartBarIcon className="h-8 w-8 text-yellow-500" />
              </div>
              <h4 className="text-xl font-semibold text-gray-700 mb-2">
                Strengthen Family Bonds
              </h4>
              <ul className="list-disc list-inside text-gray-600 text-sm">
                <li>Rediscover Connections: Find distant relatives.</li>
                <li>Share with Loved Ones: Collaborate on your tree.</li>
                <li>
                  Stay in Touch: Easily find contact information for relatives.
                </li>
              </ul>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col items-center">
              <div className="bg-green-100 rounded-full p-4 mb-4">
                <LockClosedIcon className="h-8 w-8 text-green-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-700 mb-2">
                Preserve Your Legacy
              </h4>
              <ul className="list-disc list-inside text-gray-600 text-sm">
                <li>
                  Pass Down Your History: Share your family&apos;s story for
                  generations.
                </li>
                <li>
                  Inspire Future Genealogists: Spark curiosity in younger
                  generations.
                </li>
                <li>
                  Contribute to a Collective Archive: Build a tapestry of family
                  histories.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-lg text-gray-600">
            Ready to embark on a journey of discovery and connection?
          </p>
          <button className="mt-4 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-md shadow-md inline-flex items-center">
            Get Started!
            <ArrowRightCircleIcon className="ml-2 h-5 w-5" />
          </button>
        </div>

        <p className="text-center text-gray-500 mt-8">
          RelatHive: Because family matters.
        </p>
      </div>
    </div>
  );
}
