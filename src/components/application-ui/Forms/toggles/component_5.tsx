const ToggleInput = () => {
  return (
    <div className="flex items-center justify-between gap-3">
      <div className="group relative inline-flex w-11 shrink-0 rounded-full bg-gray-200 p-0.5 outline-offset-2 outline-indigo-600 ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out has-[:checked]:bg-indigo-600 has-[:focus-visible]:outline has-[:focus-visible]:outline-2 dark:bg-white/5 dark:outline-indigo-500 dark:ring-white/10 dark:has-[:checked]:bg-indigo-500">
        <span className="size-5 rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition-transform duration-200 ease-in-out group-has-[:checked]:translate-x-5" />
        <input
          id="annual-billing"
          name="annual-billing"
          type="checkbox"
          aria-labelledby="annual-billing-label"
          aria-describedby="annual-billing-description"
          className="absolute inset-0 appearance-none focus:outline-none"
        />
      </div>

      <div className="text-sm">
        <label id="annual-billing-label" className="font-medium text-gray-900">
          Annual billing
        </label>{' '}
        <span id="annual-billing-description" className="text-gray-500">
          (Save 10%)
        </span>
      </div>
    </div>
  )
}

export default ToggleInput;
