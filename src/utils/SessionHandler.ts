import { get } from "http";

export type SessionType = {
	userId: string,
	lang: string
}

export type UserType = {
	id: number,
	name: string,
  email: string
}

export class SessionHandler {
	
	saveSession(data: SessionType) {
		sessionStorage.setItem('session', JSON.stringify(data));
	}

	getSession() {
		if (sessionStorage.getItem('session')){
			return JSON.parse(sessionStorage.getItem('session') || '');
		}
		else {
			return ""
		}
	}

	destroySession() {
		sessionStorage.removeItem('session');
	}
	
	saveUserDetails(user: UserType) {
		sessionStorage.setItem('user', JSON.stringify(user));
	}

	getUserDetails() {
		if (sessionStorage.getItem('user')){
      return JSON.parse(sessionStorage.getItem('user') || '');
    }
	}
	
  destroyUserDetails() {
    sessionStorage.removeItem('user');
	}
	
}