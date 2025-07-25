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
	Popover,
	PopoverButton,
	PopoverGroup,
	PopoverPanel,
} from '@headlessui/react'
import { X as CloseIcon, ChevronDown } from 'lucide-react'
import { useCategories } from '@merittdev/sdk'

const CategoryFilters = () => {
	const sortOptions = [
		{ name: 'Most Popular', href: '#' },
		{ name: 'Best Rating', href: '#' },
		{ name: 'Newest', href: '#' },
	]

	const { categories } = useCategories()

	const filters = [
		{
			id: 'category',
			name: 'Category',
		},
	]

	const [open, setOpen] = useState(false)

	return (
		<div className="bg-gray-50">
			{/* Mobile filter dialog */}
			<Dialog className="relative z-40 sm:hidden" open={open} onClose={setOpen}>
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
								onClick={() => setOpen(false)}
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
									className="border-t border-gray-200 px-4 py-6"
								>
									<h3 className="-mx-2 -my-3 flow-root">
										<DisclosureButton className="group flex w-full items-center justify-between bg-white px-2 py-3 text-sm text-gray-400">
											<span className="font-medium text-gray-900">
												{section.name}
											</span>
											<span className="ml-6 flex items-center">
												<ChevronDown
													aria-hidden="true"
													className="size-5 rotate-0 transform group-data-[open]:-rotate-180"
												/>
											</span>
										</DisclosureButton>
									</h3>
									<DisclosurePanel className="pt-6">
										<div className="space-y-6">
											{categories?.map((option, optionIdx) => (
												<div key={optionIdx} className="flex gap-3">
													<div className="flex h-5 shrink-0 items-center">
														<div className="group grid size-4 grid-cols-1">
															<input
																className="col-start-1 row-start-1 appearance-none rounded border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
																defaultValue={option.name}
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
														className="text-sm text-gray-500"
														htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
													>
														{option.name}
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

			<div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:max-w-7xl lg:px-8">
				<div className="py-24">
					<h1 className="text-4xl font-bold tracking-tight text-gray-900">
						New Arrivals
					</h1>
					<p className="mx-auto mt-4 max-w-3xl text-base text-gray-500">
						Thoughtfully designed objects for the workspace, home, and travel.
					</p>
				</div>

				<section
					aria-labelledby="filter-heading"
					className="border-t border-gray-200 py-6"
				>
					<h2 className="sr-only" id="filter-heading">
						Product filters
					</h2>

					<div className="flex items-center justify-between">
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
								className="absolute left-0 z-10 mt-2 w-40 origin-top-left rounded-md bg-white shadow-2xl ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
							>
								<div className="py-1">
									{sortOptions.map((option, idx) => (
										<MenuItem key={idx}>
											<a
												className="block px-4 py-2 text-sm font-medium text-gray-900 data-[focus]:bg-gray-100 data-[focus]:outline-none"
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
							className="inline-block text-sm font-medium text-gray-700 hover:text-gray-900 sm:hidden"
							type="button"
							onClick={() => setOpen(true)}
						>
							Filters
						</button>

						<PopoverGroup className="hidden sm:flex sm:items-baseline sm:space-x-8">
							{filters.map((section, sectionIdx) => (
								<Popover
									key={section.name}
									className="relative inline-block text-left"
								>
									<div>
										<PopoverButton className="group inline-flex items-center justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
											<span>{section.name}</span>
											{sectionIdx === 0 ? (
												<span className="ml-1.5 rounded bg-gray-200 px-1.5 py-0.5 text-xs font-semibold tabular-nums text-gray-700">
													1
												</span>
											) : null}
											<ChevronDown
												aria-hidden="true"
												className="-mr-1 ml-1 size-5 shrink-0 text-gray-400 group-hover:text-gray-500"
											/>
										</PopoverButton>
									</div>

									<PopoverPanel
										transition
										className="absolute right-0 z-10 mt-2 origin-top-right rounded-md bg-white p-4 shadow-2xl ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
									>
										<form className="space-y-4">
											{categories?.map((option, optionIdx) => (
												<div key={optionIdx} className="flex gap-3">
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
														className="whitespace-nowrap pr-6 text-sm font-medium text-gray-900"
														htmlFor={`filter-${section.id}-${optionIdx}`}
													>
														{option?.name}
													</label>
												</div>
											))}
										</form>
									</PopoverPanel>
								</Popover>
							))}
						</PopoverGroup>
					</div>
				</section>
			</div>
		</div>
	)
}

export default CategoryFilters
