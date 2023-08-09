import { LazyExoticComponent, Suspense, lazy, useEffect, useState } from 'react'
import { PageContainer } from '../containers'
// import Modal from '../components/modal.component'
import Table from '../components';
import { useTranslation } from 'react-i18next';
// const Table = lazy(() => import('../components'))
// const Modal = lazy(() => import('../components/modal.component'))

type userProp = {
	name: string;
	email: string;
}

const sampleUser: userProp[] = [{ name: 'John Smith', email: 'john@example.com' }]

const Dashboard = () => {
	const [modalOpen, setModalOpen] = useState<boolean>(false)
	const [addedUser, setAddedUser] = useState<userProp[]>(sampleUser)
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
	}

	// useEffect(() => {
	// 	if (modalOpen) {
	// 		Modal = lazy(() => import('../components/modal.component'))
	// 	}
	// }, [modalOpen])

	const renderLazyModal = () => {
		const Modal = lazy(() => import('../components/modal.component'))

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

	return (
		<PageContainer>
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
		</PageContainer>
	)
}

export default Dashboard
