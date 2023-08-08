import { useTranslation } from "react-i18next";
import { useNavigate } from 'react-router-dom';

export const Navbar = () => {
	const { t } = useTranslation();
	const navigate = useNavigate()

	// const [currentLanguage, setCurrentLanguage] = useState(language)

	// console.log(language)

	// useEffect(() => {
	// 	// setCurrentLanguage(language)
	// 	// console.log(currentLanguage);
	// }, [language])
	
	return (
		<div className=" w-[200px] max-w-[200px] relative top-[65px] h-[calc(100vh-65px)] border-e bg-white">
			<div className="flex flex-col justify-between h-full">
				<div className="px-4">
					{/* <span
					className="grid h-10 w-32 place-content-center rounded-lg bg-gray-100 text-xs text-gray-600"
				>
					Logo
				</span> */}

					<ul className="mt-6 space-y-1">
						<li>
							<div
								onClick={()=> navigate("/")}
								className="block rounded-lg cursor-pointer bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
							>
								{t('LblDashboard')}
							</div>
						</li>

						{/* <li>
							<details className="group [&_summary::-webkit-details-marker]:hidden">
								<summary
									className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
								>
									<span className="text-sm font-medium"> Teams </span>

									<span
										className="shrink-0 transition duration-300 group-open:-rotate-180"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="h-5 w-5"
											viewBox="0 0 20 20"
											fill="currentColor"
										>
											<path
												fill-rule="evenodd"
												d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
												clip-rule="evenodd"
											/>
										</svg>
									</span>
								</summary>

								<ul className="mt-2 space-y-1 px-4">
									<li>
										<a
											href=""
											className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
										>
											Banned Users
										</a>
									</li>

									<li>
										<a
											href=""
											className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
										>
											Calendar
										</a>
									</li>
								</ul>
							</details>
						</li>

						<li>
							<a
								href=""
								className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
							>
								Billing
							</a>
						</li>

						<li>
							<a
								href=""
								className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
							>
								Invoices
							</a>
						</li>

						<li>
							<details className="group [&_summary::-webkit-details-marker]:hidden">
								<summary
									className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
								>
									<span className="text-sm font-medium"> Account </span>

									<span
										className="shrink-0 transition duration-300 group-open:-rotate-180"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="h-5 w-5"
											viewBox="0 0 20 20"
											fill="currentColor"
										>
											<path
												fill-rule="evenodd"
												d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
												clip-rule="evenodd"
											/>
										</svg>
									</span>
								</summary>

								<ul className="mt-2 space-y-1 px-4">
									<li>
										<a
											href=""
											className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
										>
											Details
										</a>
									</li>

									<li>
										<a
											href=""
											className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
										>
											Security
										</a>
									</li>

									<li>
										<form action="/logout">
											<button
												type="submit"
												className="w-full rounded-lg px-4 py-2 text-sm font-medium text-gray-500 [text-align:_inherit] hover:bg-gray-100 hover:text-gray-700"
											>
												Logout
											</button>
										</form>
									</li>
								</ul>
							</details>
						</li> */}
					</ul>

				</div>

				<div className="w-full px-4 pb-6">
					<div
						className="block rounded-md text-center bg-teal-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-700"
					>
						{t('LblLogout')}
					</div>
				</div>

			</div>
		</div>
	)
}
