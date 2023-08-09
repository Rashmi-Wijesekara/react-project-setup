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
		<div className=" w-[200px] max-w-[200px] fixed top-[65px] h-[calc(100vh-65px)] border-e bg-white">
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

						<li>
							<div
								onClick={() => navigate("/page1")}
								className="block rounded-lg cursor-pointer bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
							>
								{t('LblSamplePage')} 1
							</div>
						</li>

						<li>
							<div
								onClick={() => navigate("/page2")}
								className="block rounded-lg cursor-pointer bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
							>
								{t('LblSamplePage')} 2
							</div>
						</li>

						<li>
							<div
								onClick={() => navigate("/page3")}
								className="block rounded-lg cursor-pointer bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
							>
								{t('LblSamplePage')} 3
							</div>
						</li>

						<li>
							<div
								onClick={() => navigate("/page4")}
								className="block rounded-lg cursor-pointer bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
							>
								{t('LblSamplePage')} 4
							</div>
						</li>

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
