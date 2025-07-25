import {
	Disclosure,
	DisclosureButton,
	DisclosurePanel,
	Menu,
	MenuButton,
	MenuItem,
	MenuItems,
} from '@headlessui/react'
import { ChevronDownIcon, FunnelIcon } from 'lucide-react' // Replaced heroicons with lucide-react
import { useCategories } from '@merittdev/sdk'

import { cn } from '@/utils'

const CategoryFilters = () => {
	const { categories } = useCategories()

	const filters = {
		category: categories,
	}

	const sortOptions = [
		{ name: 'Most Popular', href: '#', current: true },
		{ name: 'Best Rating', href: '#', current: false },
		{ name: 'Newest', href: '#', current: false },
	]

	return (
		<div className="bg-white">
			<div className="px-4 py-16 text-center sm:px-6 lg:px-8">
				<h1 className="text-4xl font-bold tracking-tight text-gray-900">
					Workspace
				</h1>
				<p className="mx-auto mt-4 max-w-xl text-base text-gray-500">
					The secret to a tidy desk? Dont get rid of anything, just put it in
					really really nice looking containers.
				</p>
			</div>

			{/* Filters */}
			<Disclosure
				aria-labelledby="filter-heading"
				as="section"
				className="grid items-center border-b border-t border-gray-200"
			>
				<h2 className="sr-only" id="filter-heading">
					Filters
				</h2>
				<div className="relative col-start-1 row-start-1 py-4">
					<div className="mx-auto flex max-w-7xl divide-x divide-gray-200 px-4 text-sm sm:px-6 lg:px-8">
						<div className="pr-6">
							<DisclosureButton className="group flex items-center font-medium text-gray-700">
								<FunnelIcon
									aria-hidden="true"
									className="mr-2 size-5 flex-none text-gray-400 group-hover:text-gray-500"
								/>
								2 Filters
							</DisclosureButton>
						</div>
						<div className="pl-6">
							<button className="text-gray-500" type="button">
								Clear all
							</button>
						</div>
					</div>
				</div>
				<DisclosurePanel className="border-t border-gray-200 py-10">
					<div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-4 px-4 text-sm sm:px-6 md:gap-x-6 lg:px-8">
						<div className="grid auto-rows-min grid-cols-1 gap-y-10 md:grid-cols-2 md:gap-x-6">
							{Object.entries(filters).map(([filterType, options]) => (
								<fieldset key={filterType}>
									<legend className="block font-medium capitalize">
										{filterType}
									</legend>
									<div className="space-y-6 pt-6 sm:space-y-4 sm:pt-4">
										{options.map((option, optionIdx) => (
											<div key={optionIdx} className="flex gap-3">
												<div className="flex h-5 shrink-0 items-center">
													<div className="group grid size-4 grid-cols-1">
														<input
															className="col-start-1 row-start-1 appearance-none rounded border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
															defaultValue={option?.name}
															id={`${filterType}-${optionIdx}`}
															name={`${filterType}[]`}
															type="checkbox"
														/>
														<svg
															className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25"
															fill="none"
															viewBox="0 0 14 14"
														>
															<path
																className="opacity-0 group-has-[:checked]:opacity-100"
																d="M3 8L6 11L11 3.5"
																strokeLinecap="round"
																strokeLinejoin="round"
																strokeWidth={2}
															/>
															<path
																className="opacity-0 group-has-[:indeterminate]:opacity-100"
																d="M3 7H11"
																strokeLinecap="round"
																strokeLinejoin="round"
																strokeWidth={2}
															/>
														</svg>
													</div>
												</div>
												<label
													className="text-base text-gray-600 sm:text-sm"
													htmlFor={`${filterType}-${optionIdx}`}
												>
													{option?.name}
												</label>
											</div>
										))}
									</div>
								</fieldset>
							))}
						</div>
					</div>
				</DisclosurePanel>
				<div className="col-start-1 row-start-1 py-4">
					<div className="mx-auto flex max-w-7xl justify-end px-4 sm:px-6 lg:px-8">
						<Menu as="div" className="relative inline-block">
							<div className="flex">
								<MenuButton className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
									Sort
									<ChevronDownIcon
										aria-hidden="true"
										className="-mr-1 ml-1 size-5 shrink-0 text-gray-400 group-hover:text-gray-500"
									/>
								</MenuButton>
							</div>

							<MenuItems
								transition
								className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
							>
								<div className="py-1">
									{sortOptions.map((option) => (
										<MenuItem key={option.name}>
											<a
												className={cn(
													option.current
														? 'font-medium text-gray-900'
														: 'text-gray-500',
													'block px-4 py-2 text-sm data-[focus]:bg-gray-100 data-[focus]:outline-none'
												)}
												href={option.href}
											>
												{option.name}
											</a>
										</MenuItem>
									))}
								</div>
							</MenuItems>
						</Menu>
					</div>
				</div>
			</Disclosure>
		</div>
	)
}

export default CategoryFilters
