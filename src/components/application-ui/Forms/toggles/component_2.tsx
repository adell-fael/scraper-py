const ToggleInput = () => {
  return (
    <div className="group relative inline-flex h-5 w-10 shrink-0 items-center justify-center rounded-full outline-offset-2 outline-indigo-600 has-[:focus-visible]:outline has-[:focus-visible]:outline-2 dark:outline-indigo-500">
      <span className="absolute mx-auto h-4 w-9 rounded-full bg-gray-200 ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out group-has-[:checked]:bg-indigo-600 dark:bg-gray-800/50 dark:ring-white/10 dark:group-has-[:checked]:bg-indigo-500" />
      <span className="absolute left-0 size-5 rounded-full border border-gray-300 bg-white shadow-sm transition-transform duration-200 ease-in-out group-has-[:checked]:translate-x-5 dark:shadow-none" />
      <input
        name="setting"
        type="checkbox"
        aria-label="Use setting"
        className="absolute inset-0 appearance-none focus:outline-none"
      />
    </div>
  )
}

export default ToggleInput;
