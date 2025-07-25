'use client'

import { useState } from 'react'
import {
	Dialog,
	DialogBackdrop,
	DialogPanel,
	Disclosure,
	DisclosureButton,
	DisclosurePanel,
} from '@headlessui/react'
import { X as CloseIcon } from 'lucide-react'
import { ChevronDown, Plus } from 'lucide-react'
import { useCategories } from '@merittdev/sdk'

const CategoryFilters = () => {
	const { categories } = useCategories()
	const filters = [
		{
			id: 'category',
			name: 'Category',
			options: categories,
		},
	]

	const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

	return (
		<div className="bg-white">
			<div>
				{/* Mobile filter dialog */}
				<Dialog
					className="relative z-40 lg:hidden"
					open={mobileFiltersOpen}
					onClose={() => setMobileFiltersOpen(false)}
				>
					<DialogBackdrop
						transition
						className="fixed inset-0 bg-black/25 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
					/>

					<div className="fixed inset-0 z-40 flex">
						<DialogPanel
							transition
							className="relative ml-auto flex size-full max-w-xs transform flex-col overflow-y-auto bg-white pb-6 pt-4 shadow-xl transition duration-300 ease-in-out data-[closed]:translate-x-full"
						>
							<div className="flex items-center justify-between px-4">
								<h2 className="text-lg font-medium text-gray-900">Filters</h2>
								<button
									className="relative -mr-2 flex size-10 items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
									type="button"
									onClick={() => setMobileFiltersOpen(false)}
								>
									<span className="absolute -inset-0.5" />
									<span className="sr-only">Close menu</span>
									<CloseIcon aria-hidden="true" className="size-6" />
								</button>
							</div>

							{/* Filters */}
							<form className="mt-4">
								{filters.map((section) => (
									<Disclosure
										key={section.name}
										as="div"
										className="border-t border-gray-200 pb-4 pt-4"
									>
										<fieldset>
											<legend className="w-full px-2">
												<DisclosureButton className="group flex w-full items-center justify-between p-2 text-gray-400 hover:text-gray-500">
													<span className="text-sm font-medium text-gray-900">
														{section.name}
													</span>
													<span className="ml-6 flex h-7 items-center">
														<ChevronDown
															aria-hidden="true"
															className="size-5 rotate-0 transform group-data-[open]:-rotate-180"
														/>
													</span>
												</DisclosureButton>
											</legend>
											<DisclosurePanel className="px-4 pb-2 pt-4">
												<div className="space-y-6">
													{section.options.map((option, optionIdx) => (
														<div key={optionIdx} className="flex gap-3">
															<div className="flex h-5 shrink-0 items-center">
																<div className="group grid size-4 grid-cols-1">
																	<input
																		className="col-start-1 row-start-1 appearance-none rounded border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
																		defaultValue={option?.name}
																		id={`${section.id}-${optionIdx}-mobile`}
																		name={`${section.id}[]`}
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
																className="text-sm text-gray-500"
																htmlFor={`${section.id}-${optionIdx}-mobile`}
															>
																{option?.name}
															</label>
														</div>
													))}
												</div>
											</DisclosurePanel>
										</fieldset>
									</Disclosure>
								))}
							</form>
						</DialogPanel>
					</div>
				</Dialog>

				<main className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
					<div className="border-b border-gray-200 pb-10">
						<h1 className="text-4xl font-bold tracking-tight text-gray-900">
							New Arrivals
						</h1>
						<p className="mt-4 text-base text-gray-500">
							Checkout out the latest release of Basic Tees, new and improved
							with four openings!
						</p>
					</div>

					<div className="pt-12 lg:grid lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-4">
						<aside>
							<h2 className="sr-only">Filters</h2>

							<button
								className="inline-flex items-center lg:hidden"
								type="button"
								onClick={() => setMobileFiltersOpen(true)}
							>
								<span className="text-sm font-medium text-gray-700">
									Filters
								</span>
								<Plus
									aria-hidden="true"
									className="ml-1 size-5 shrink-0 text-gray-400"
								/>
							</button>

							<div className="hidden lg:block">
								<form className="divide-y divide-gray-200">
									{filters.map((section) => (
										<div
											key={section.name}
											className="py-10 first:pt-0 last:pb-0"
										>
											<fieldset>
												<legend className="block text-sm font-medium text-gray-900">
													{section.name}
												</legend>
												<div className="space-y-3 pt-6">
													{section.options.map((option, optionIdx) => (
														<div key={option?.name} className="flex gap-3">
															<div className="flex h-5 shrink-0 items-center">
																<div className="group grid size-4 grid-cols-1">
																	<input
																		className="col-start-1 row-start-1 appearance-none rounded border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
																		defaultValue={option?.name}
																		id={`${section.id}-${optionIdx}`}
																		name={`${section.id}[]`}
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
																className="text-sm text-gray-600"
																htmlFor={`${section.id}-${optionIdx}`}
															>
																{option?.name}
															</label>
														</div>
													))}
												</div>
											</fieldset>
										</div>
									))}
								</form>
							</div>
						</aside>

						{/* Product grid */}
						<div className="mt-6 lg:col-span-2 lg:mt-0 xl:col-span-3">
							{/* Your content */}
						</div>
					</div>
				</main>
			</div>
		</div>
	)
}

export default CategoryFilters
