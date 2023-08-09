import { Fragment, useEffect, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/24/solid'

type userProp = {
	name: string;
	email: string;
}

type ModalProp = {
	openStatus: boolean;
	setOpenStatus: (status: boolean) => void;
	buttonName: string;
	buttonHandler: (data: userProp) => void;
}

export default function Modal({ openStatus, setOpenStatus, buttonName, buttonHandler }: ModalProp) {
	const [open, setOpen] = useState(false)
	const [email, setEmail] = useState("")
	const [userName, setUserName] = useState("")

	const cancelButtonRef = useRef(null)

	useEffect(() => {
		if (open !== openStatus)
			setOpen(openStatus)
	}, [open, openStatus])

	const closeModal = () => {
		setOpen(false)
		setOpenStatus(false)
	}

	const submit = () => {
		if (email.length > 0 && userName.length > 0) {
			console.log(email, userName)
			buttonHandler({
				name: userName,
				email: email
			})

			setUserName("")
			setEmail("")
			closeModal()
		}
	}

	return (
		<Transition.Root show={open} as={Fragment}>
			<Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
				<Transition.Child
					as={Fragment}
					enter="ease-out duration-300"
					enterFrom="opacity-0"
					enterTo="opacity-100"
					leave="ease-in duration-200"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
				>
					<div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
				</Transition.Child>

				<div className="fixed inset-0 z-10 overflow-y-auto">
					<div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
						<Transition.Child
							as={Fragment}
							enter="ease-out duration-300"
							enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
							enterTo="opacity-100 translate-y-0 sm:scale-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100 translate-y-0 sm:scale-100"
							leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
						>
							<Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">

								<div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
									<button
										type="button"
										className="inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 sm:ml-3 sm:w-auto"
										onClick={() => submit()}
									>
										{buttonName}
									</button>
									<button
										type="button"
										className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
										onClick={() => closeModal()}
										ref={cancelButtonRef}
									>
										Cancel
									</button>
								</div>

								<div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
									<div className="sm:flex sm:items-start">
										{/* <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
											<ExclamationTriangleIcon className="h-6 w-6 text-red-600" aria-hidden="true" />
										</div>
										<div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
											<Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
												Deactivate account
											</Dialog.Title>
											<div className="mt-2">
												<p className="text-sm text-gray-500">
													Are you sure you want to deactivate your account? All of your data will be permanently
													removed. This action cannot be undone.
												</p>
											</div>
										</div> */}

										<div className="w-full">
											<div className='my-3'>
												<label htmlFor="UserEmail" className="block text-xs font-medium text-gray-700">
													Email
												</label>

												<input
													type="email"
													id="UserEmail"
													placeholder="Enter Email Address"
													onChange={(e) => setEmail(e.target.value)}
													value={email}
													className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
												/>
											</div>

											<div className='my-3'>
												<label htmlFor="UserName" className="block text-xs font-medium text-gray-700">
													Name
												</label>

												<input
													type="text"
													id="UserName"
													placeholder="Enter Full Name"
													onChange={(e) => setUserName(e.target.value)}
													value={userName}
													className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
												/>
											</div>
										</div>

									</div>

									<div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
										<div className="absolute inset-0 -z-10 overflow-hidden">
											<svg
												className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
												aria-hidden="true"
											>
												<defs>
													<pattern
														id="e813992c-7d03-4cc4-a2bd-151760b470a0"
														width={200}
														height={200}
														x="50%"
														y={-1}
														patternUnits="userSpaceOnUse"
													>
														<path d="M100 200V.5M.5 .5H200" fill="none" />
													</pattern>
												</defs>
												<svg x="50%" y={-1} className="overflow-visible fill-gray-50">
													<path
														d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
														strokeWidth={0}
													/>
												</svg>
												<rect width="100%" height="100%" strokeWidth={0} fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
											</svg>
										</div>
										<div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
											<div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
												<div className="lg:pr-4">
													<div className="lg:max-w-lg">
														<p className="text-base font-semibold leading-7 text-indigo-600">Deploy faster</p>
														<h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">A better workflow</h1>
														<p className="mt-6 text-xl leading-8 text-gray-700">
															Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi, nibh dui, diam
															eget aliquam. Quisque id at vitae feugiat egestas.
														</p>
													</div>
												</div>
											</div>
											<div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
												<img
													className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
													src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
													alt=""
												/>
											</div>
											<div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
												<div className="lg:pr-4">
													<div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
														<p>
															Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet
															vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque
															erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris
															semper sed amet vitae sed turpis id.
														</p>
														<ul role="list" className="mt-8 space-y-8 text-gray-600">
															<li className="flex gap-x-3">
																<CloudArrowUpIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
																<span>
																	<strong className="font-semibold text-gray-900">Push to deploy.</strong> Lorem ipsum, dolor sit amet
																	consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate
																	blanditiis ratione.
																</span>
															</li>
															<li className="flex gap-x-3">
																<LockClosedIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
																<span>
																	<strong className="font-semibold text-gray-900">SSL certificates.</strong> Anim aute id magna aliqua
																	ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.
																</span>
															</li>
															<li className="flex gap-x-3">
																<ServerIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
																<span>
																	<strong className="font-semibold text-gray-900">Database backups.</strong> Ac tincidunt sapien
																	vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.
																</span>
															</li>
														</ul>
														<p className="mt-8">
															Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie auctor
															fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices hac
															adipiscing egestas. Iaculis convallis ac tempor et ut. Ac lorem vel integer orci.
														</p>
														<h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">No server? No problem.</h2>
														<p className="mt-6">
															Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam consequat in. Convallis arcu ipsum urna nibh.
															Pharetra, euismod vitae interdum mauris enim, consequat vulputate nibh. Maecenas pellentesque id sed
															tellus mauris, ultrices mauris. Tincidunt enim cursus ridiculus mi. Pellentesque nam sed nullam sed diam
															turpis ipsum eu a sed convallis diam.
														</p>
													</div>
												</div>
											</div>
										</div>
									</div>

									Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

									The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.

									Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

									The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.

									Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

									The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.

									Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

									The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.

								</div>
								{/* <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
									<button
										type="button"
										className="inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 sm:ml-3 sm:w-auto"
										onClick={() => submit()}
									>
										{buttonName}
									</button>
									<button
										type="button"
										className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
										onClick={() => closeModal()}
										ref={cancelButtonRef}
									>
										Cancel
									</button>
								</div> */}
							</Dialog.Panel>
						</Transition.Child>
					</div>
				</div>
			</Dialog>
		</Transition.Root>
	)
}
