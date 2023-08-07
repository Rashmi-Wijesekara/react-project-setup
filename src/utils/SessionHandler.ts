export type SessionType = {
	userId: string,
	lang: string
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
}