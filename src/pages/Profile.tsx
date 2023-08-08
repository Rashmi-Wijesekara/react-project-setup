import React, { useContext, useEffect } from 'react'
import { PageContainer } from '../containers'
import { LangContext, LangContextType } from '../context/lang.context'
import { SessionHandler, UserType } from '../utils'
import { useParams } from 'react-router-dom'

type RouteParams = {
	id: string;
}

const Profile = () => {
	// const { user } = useContext(LangContext) as LangContextType

	let session = new SessionHandler()
	let userData: UserType = session.getUserDetails()
	const { id } = useParams<RouteParams>();

	// useEffect(() => {
	// 	userData = session.getUserDetails()

	// 	console.log(id)
	// }, [])

	return userData &&
		id &&
		userData.id &&
		Number(id) === userData.id ? (
		<PageContainer>
			<div className="">
				ID : {userData?.id}
			</div>
			<div className="">
				Name : {userData?.name}
			</div>
			<div className="">
				Email : {userData?.email}
			</div>
		</PageContainer>
	) : (
		<PageContainer>No User Details!</PageContainer>
	)
}

export default Profile
