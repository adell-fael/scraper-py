const ActionPanel = () => {
  return (
    <div className="bg-white shadow sm:rounded-lg">
      <div className="px-4 py-5 sm:p-6">
        <h3 className="text-base font-semibold text-gray-900">Renew subscription automatically</h3>
        <div className="mt-2 sm:flex sm:items-start sm:justify-between">
          <div className="max-w-xl text-sm text-gray-500">
            <p id="renew-subscription-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo totam non cumque deserunt officiis ex
              maiores nostrum.
            </p>
          </div>
          <div className="mt-5 sm:ml-6 sm:mt-0 sm:flex sm:shrink-0 sm:items-center">
            <div className="group relative inline-flex w-11 shrink-0 rounded-full bg-gray-200 p-0.5 outline-offset-2 outline-indigo-600 ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out has-[:checked]:bg-indigo-600 has-[:focus-visible]:outline has-[:focus-visible]:outline-2 dark:bg-white/5 dark:outline-indigo-500 dark:ring-white/10 dark:has-[:checked]:bg-indigo-500">
              <span className="size-5 rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition-transform duration-200 ease-in-out group-has-[:checked]:translate-x-5" />
              <input
                name="renew-subscription"
                type="checkbox"
                aria-label="Renew subscription automatically"
                aria-describedby="renew-subscription-description"
                className="absolute inset-0 appearance-none focus:outline-none"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ActionPanel;
