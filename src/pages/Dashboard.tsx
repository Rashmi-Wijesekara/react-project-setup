import { Suspense, lazy, useState, useTransition } from 'react'
import { PageContainer } from '../containers'
// import Modal from '../components/modal.component'
import Table from '../components';
import { useTranslation } from 'react-i18next';
import { Slide, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// const Table = lazy(() => import('../components'))
// const Modal = lazy(() => import('../components/modal.component'))

const PostsListComponent = lazy(() => import('../containers/blog-posts-list'))

type userProp = {
	name: string;
	email: string;
}

const sampleUser: userProp[] = [{ name: 'John Smith', email: 'john@example.com' }]

const Dashboard = () => {
	const [modalOpen, setModalOpen] = useState<boolean>(false)
	const [postsList, setPostsList] = useState<boolean>(false)
	const [addedUser, setAddedUser] = useState<userProp[]>(sampleUser)

	// useTransition is used to let React know there will be a
	// rerender and component load when the button is pressed.
	const [, startTransition] = useTransition();

	const { t } = useTranslation();

	const AddUserHandler = () => {
		setModalOpen(true)
	}

	const getModalStatus = (modalStatus: boolean) => {
		setModalOpen(modalStatus)
	}

	const getModalData = (modalData: userProp) => {
		console.log(modalData)
		setAddedUser([...addedUser, modalData])
		
		const toastId = 'addUser'

		if (modalData.name === '123') {
				toast.error(t('Error.ErrorUser'), {
				position: toast.POSITION.TOP_RIGHT,
				toastId
			});
		}
		else {
				toast.success(t('Success.SuccessUser'), {
				position: toast.POSITION.TOP_RIGHT,
				autoClose: 3000, //3 seconds
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				toastId,
				transition: Slide
			});
		}

		
	}

	// useEffect(() => {
	// 	if (modalOpen) {
	// 		Modal = lazy(() => import('../components/modal.component'))
	// 	}
	// }, [modalOpen])

	const renderLazyModal = () => {
		const Modal = lazy(() => import(/* webpackChunkName: 'addUserModal' */'../components/modal.component'))

		return (
			<Suspense fallback={<PageContainer>Loading...</PageContainer>}>
				<Modal
					openStatus={modalOpen}
					setOpenStatus={(status: boolean) => getModalStatus(status)}
					buttonName="Add User"
					buttonHandler={(data: userProp) => getModalData(data)}
				/>
			</Suspense>
		)
	}

	const postsListVisibleHandler = () => {
		startTransition(() => {
			setPostsList(true);
		})
	}

	const lazyPostsListRender = () => {
		// const PostsListComponent = lazy(() => import('../containers/blog-posts-list'))

		return (
			<Suspense fallback={<PageContainer>Loading...</PageContainer>}>
				<PostsListComponent />
			</Suspense>
		)
	}

	// const loadPostsComponent = () => import('../containers/blog-posts-list');
	// const Comp = lazy(loadPostsComponent);

	return (
		<PageContainer>

			<div className="toast-container"><ToastContainer limit={2} /></div>

			<button
				className="block w-fit rounded-md text-center bg-teal-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-700"
				onClick={() => AddUserHandler()}
			>
				{t('BtnAddUser')}
			</button>

			{modalOpen && (
				// <Suspense fallback={<PageContainer>Loading...</PageContainer>}>
				// 	<Modal
				// 		openStatus={modalOpen}
				// 		setOpenStatus={(status: boolean) => getModalStatus(status)}
				// 		buttonName="Add User"
				// 		buttonHandler={(data: userProp) => getModalData(data)}
				// 	/>
				// </Suspense>
				renderLazyModal()
			)}

			<Table {...addedUser} />

			<div className="flex flex-row my-5">
				<div className="w-1/2">
					<article className="mt-5 rounded-lg border border-gray-100 bg-white p-6">
						<div className="flex items-center justify-between">
							<div>
								<p className="text-sm text-gray-500">Profit</p>

								<p className="text-2xl font-medium text-gray-900">$240.94</p>
							</div>

							<span className="rounded-full bg-blue-100 p-3 text-blue-600">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-8 w-8"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									stroke-width="2"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
									/>
								</svg>
							</span>
						</div>

						<div className="mt-1 flex gap-1 text-green-600">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-4 w-4"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
								/>
							</svg>

							<p className="flex gap-2 text-xs">
								<span className="font-medium"> 67.81% </span>

								<span className="text-gray-500"> Since last week </span>
							</p>
						</div>
					</article>

					<article className="rounded-lg border border-gray-100 bg-white p-6">
						<div className="flex items-center justify-between">
							<div>
								<p className="text-sm text-gray-500">Profit</p>

								<p className="text-2xl font-medium text-gray-900">$240.94</p>
							</div>

							<span className="rounded-full bg-blue-100 p-3 text-blue-600">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-8 w-8"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									stroke-width="2"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
									/>
								</svg>
							</span>
						</div>

						<div className="mt-1 flex gap-1 text-red-600">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-4 w-4"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"
								/>
							</svg>

							<p className="flex gap-2 text-xs">
								<span className="font-medium"> 67.81% </span>

								<span className="text-gray-500"> Since last week </span>
							</p>
						</div>
					</article>
				</div>
				<div className="w-1/2">
					<article className="mt-5 rounded-lg border border-gray-100 bg-white p-6">
						<div className="flex items-center justify-between">
							<div>
								<p className="text-sm text-gray-500">Profit</p>

								<p className="text-2xl font-medium text-gray-900">$240.94</p>
							</div>

							<span className="rounded-full bg-blue-100 p-3 text-blue-600">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-8 w-8"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									stroke-width="2"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
									/>
								</svg>
							</span>
						</div>

						<div className="mt-1 flex gap-1 text-green-600">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-4 w-4"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
								/>
							</svg>

							<p className="flex gap-2 text-xs">
								<span className="font-medium"> 67.81% </span>

								<span className="text-gray-500"> Since last week </span>
							</p>
						</div>
					</article>

					<article className="rounded-lg border border-gray-100 bg-white p-6">
						<div className="flex items-center justify-between">
							<div>
								<p className="text-sm text-gray-500">Profit</p>

								<p className="text-2xl font-medium text-gray-900">$240.94</p>
							</div>

							<span className="rounded-full bg-blue-100 p-3 text-blue-600">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-8 w-8"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									stroke-width="2"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
									/>
								</svg>
							</span>
						</div>

						<div className="mt-1 flex gap-1 text-red-600">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-4 w-4"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"
								/>
							</svg>

							<p className="flex gap-2 text-xs">
								<span className="font-medium"> 67.81% </span>

								<span className="text-gray-500"> Since last week </span>
							</p>
						</div>
					</article>
				</div>
			</div>

			<button onClick={() => postsListVisibleHandler()}>
				click here
			</button>

			{/* <button onClick={Comp}>
				click here
			</button> */}

			{/* <loadPostsComponent /> */}

			{postsList && (<div className="my-5 flex flex-wrap">
				{
					lazyPostsListRender()
				}
			</div>)}

		</PageContainer>
	)
}

export default Dashboard
