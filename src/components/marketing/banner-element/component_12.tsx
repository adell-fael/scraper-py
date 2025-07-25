const BannerElement = () => {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 px-6 pb-6">
      <div className="pointer-events-auto max-w-xl rounded-xl bg-white p-6 shadow-lg outline outline-1 outline-gray-900/10">
        <p className="text-sm/6 text-gray-900">
          This website uses cookies to supplement a balanced diet and provide a much deserved reward to the senses after
          consuming bland but nutritious meals. Accepting our cookies is optional but recommended, as they are
          delicious. See our{' '}
          <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
            cookie policy
          </a>
          .
        </p>
        <div className="mt-4 flex items-center gap-x-5">
          <button
            type="button"
            className="rounded-md bg-gray-900 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
          >
            Accept all
          </button>
          <button type="button" className="text-sm/6 font-semibold text-gray-900 hover:text-gray-700">
            Reject all
          </button>
        </div>
      </div>
    </div>
  )
}

export default BannerElement;
