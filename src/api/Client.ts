import axios from "axios";
import { SessionHandler } from "../utils";

export const client = axios.create({
	baseURL: "https://jsonplaceholder.typicode.com/"
});

export async function getUserById(userId: string) {
	const response = await client.get("users/" + userId);
	
	if (response.data) {
		let session = new SessionHandler()
		session.saveUserDetails(response.data)
		
		return true
	}
	return false
}
