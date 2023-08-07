import React, { useState } from "react";

export type LangContextType = {
	currentLanguage: string
	setupLanguage: (lang: string) => void
}

export const LangContext = React.createContext<LangContextType | null>(null)

interface Props {
	children: React.ReactNode;
}

const LangProvider: React.FC<Props> = ({ children }) => {

	const [currentLanguage, setCurrentLanguage] = useState('en')

	const setupLanguage = (lang: string) => {
		console.log(lang)
		setCurrentLanguage(lang)
	}

	return (
		<LangContext.Provider value={{
			currentLanguage,
			setupLanguage
		}}>
			{children}
		</LangContext.Provider>
	)
}

export default LangProvider;