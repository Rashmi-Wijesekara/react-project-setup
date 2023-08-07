import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import en from './locale/en.json'
import si from './locale/si.json'
import ta from './locale/ta.json'

i18n.use(initReactI18next).init({
	resources: {
		en: { ...en },
		si: {...si },
		ta: { ...ta }
 },
 lng: "en",     // Set the initial language of the App
});