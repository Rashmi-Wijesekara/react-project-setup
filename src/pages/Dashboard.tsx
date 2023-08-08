import { useState } from 'react'
import { PageContainer } from '../containers'
import Modal from '../components/modal.component'
import Table from '../components';
import { useTranslation } from 'react-i18next';
// const Table = lazy(() => import('../components'))
// const Modal = lazy(() => import('../components/Modal'))

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

	// const Table = (rowData: { username: string; email: string }) => {
	// 	return (
	// 		props = rowData
	// 	)
	// }
	return (
		<PageContainer>
			<button
				className="block w-fit rounded-md text-center bg-teal-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-700"
				onClick={() => AddUserHandler()}
			>
				{t('BtnAddUser')}
			</button>

			<Modal
				openStatus={modalOpen}
				setOpenStatus={(status: boolean) => getModalStatus(status)}
				buttonName="Add User"
				buttonHandler={(data: userProp) => getModalData(data)}
			/>

			<Table {...addedUser} />
		</PageContainer>
	)
}

export default Dashboard
