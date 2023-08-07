import React, { useState } from "react";

export type UserType = {
	id: number,
	name: string,
	email: string
}

export type LangContextType = {
	currentLanguage: string
	setupLanguage: (lang: string) => void
	user: UserType | null,
	setUserDetails: (user: UserType) => void
}

export const LangContext = React.createContext<LangContextType | null>(null)

interface Props {
	children: React.ReactNode;
}

const LangProvider: React.FC<Props> = ({ children }) => {

	const [currentLanguage, setCurrentLanguage] = useState('en')
	const [user, setUser] = useState<UserType | null>(null)

	const setupLanguage = (lang: string) => {
		console.log(lang)
		setCurrentLanguage(lang)
	}

	const setUserDetails = (user: UserType) => {
		setUser(user)
	}

	return (
		<LangContext.Provider value={{
			currentLanguage,
			setupLanguage,
			user,
			setUserDetails
		}}>
			{children}
		</LangContext.Provider>
	)
}

export default LangProvider;