'use client'

import { useState } from 'react'
import {
	Dialog,
	DialogBackdrop,
	DialogPanel,
	Disclosure,
	DisclosureButton,
	DisclosurePanel,
	Menu,
	MenuButton,
	MenuItem,
	MenuItems,
} from '@headlessui/react'
import { ChevronDown, Funnel, Minus, Plus, Grid, X } from 'lucide-react'
import { useCategories } from '@merittdev/sdk'
import Link from 'next/link'

import { cn } from '@/utils'

const CategoryFilters = () => {
	const sortOptions = [
		{ name: 'Most Popular', href: '#', current: true },
		{ name: 'Best Rating', href: '#', current: false },
		{ name: 'Newest', href: '#', current: false },
		{ name: 'Price: Low to High', href: '#', current: false },
		{ name: 'Price: High to Low', href: '#', current: false },
	]

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
					onClose={setMobileFiltersOpen}
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
									<X aria-hidden="true" className="size-6" />
								</button>
							</div>

							{/* Filters */}
							<form className="mt-4 border-t border-gray-200">
								<h3 className="sr-only">Categories</h3>
								<ul className="px-2 py-3 font-medium text-gray-900" role="list">
									{categories?.map((category) => (
										<li key={category.name}>
											<Link className="block px-2 py-3" href={category?.slug}>
												{category?.name}
											</Link>
										</li>
									))}
								</ul>

								{filters.map((section) => (
									<Disclosure
										key={section.id}
										as="div"
										className="border-t border-gray-200 px-4 py-6"
									>
										<h3 className="-mx-2 -my-3 flow-root">
											<DisclosureButton className="group flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
												<span className="font-medium text-gray-900">
													{section.name}
												</span>
												<span className="ml-6 flex items-center">
													<Plus
														aria-hidden="true"
														className="size-5 group-data-[open]:hidden"
													/>
													<Minus
														aria-hidden="true"
														className="size-5 group-[:not([data-open])]:hidden"
													/>
												</span>
											</DisclosureButton>
										</h3>
										<DisclosurePanel className="pt-6">
											<div className="space-y-6">
												{section.options.map((option, optionIdx) => (
													<div key={optionIdx} className="flex gap-3">
														<div className="flex h-5 shrink-0 items-center">
															<div className="group grid size-4 grid-cols-1">
																<input
																	className="col-start-1 row-start-1 appearance-none rounded border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
																	defaultValue={option?.name}
																	id={`filter-mobile-${section.id}-${optionIdx}`}
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
															className="min-w-0 flex-1 text-gray-500"
															htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
														>
															{option?.name}
														</label>
													</div>
												))}
											</div>
										</DisclosurePanel>
									</Disclosure>
								))}
							</form>
						</DialogPanel>
					</div>
				</Dialog>

				<main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
						<h1 className="text-4xl font-bold tracking-tight text-gray-900">
							New Arrivals
						</h1>

						<div className="flex items-center">
							<Menu as="div" className="relative inline-block text-left">
								<MenuButton className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
									Sort
									<ChevronDown
										aria-hidden="true"
										className="-mr-1 ml-1 size-5 shrink-0 text-gray-400 group-hover:text-gray-500"
									/>
								</MenuButton>

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

							<button
								className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7"
								type="button"
							>
								<span className="sr-only">View grid</span>
								<Grid aria-hidden="true" className="size-5" />
							</button>
							<button
								className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
								type="button"
								onClick={() => setMobileFiltersOpen(true)}
							>
								<span className="sr-only">Filters</span>
								<Funnel aria-hidden="true" className="size-5" />
							</button>
						</div>
					</div>

					<section aria-labelledby="products-heading" className="pb-24 pt-6">
						<h2 className="sr-only" id="products-heading">
							Products
						</h2>

						<div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
							{/* Filters */}
							<form className="hidden lg:block">
								<h3 className="sr-only">Categories</h3>
								<ul
									className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900"
									role="list"
								>
									{categories?.map((category) => (
										<li key={category.name}>
											<Link href={category?.slug}>{category?.name}</Link>
										</li>
									))}
								</ul>

								{filters.map((section) => (
									<Disclosure
										key={section.id}
										as="div"
										className="border-b border-gray-200 py-6"
									>
										<h3 className="-my-3 flow-root">
											<DisclosureButton className="group flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
												<span className="font-medium text-gray-900">
													{section.name}
												</span>
												<span className="ml-6 flex items-center">
													<Plus
														aria-hidden="true"
														className="size-5 group-data-[open]:hidden"
													/>
													<Minus
														aria-hidden="true"
														className="size-5 group-[:not([data-open])]:hidden"
													/>
												</span>
											</DisclosureButton>
										</h3>
										<DisclosurePanel className="pt-6">
											<div className="space-y-4">
												{section.options.map((option, optionIdx) => (
													<div key={option?.name} className="flex gap-3">
														<div className="flex h-5 shrink-0 items-center">
															<div className="group grid size-4 grid-cols-1">
																<input
																	className="col-start-1 row-start-1 appearance-none rounded border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
																	defaultValue={option?.name}
																	id={`filter-${section.id}-${optionIdx}`}
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
															htmlFor={`filter-${section.id}-${optionIdx}`}
														>
															{option?.name}
														</label>
													</div>
												))}
											</div>
										</DisclosurePanel>
									</Disclosure>
								))}
							</form>

							{/* Product grid */}
							<div className="lg:col-span-3">{/* Your content */}</div>
						</div>
					</section>
				</main>
			</div>
		</div>
	)
}

export default CategoryFilters
