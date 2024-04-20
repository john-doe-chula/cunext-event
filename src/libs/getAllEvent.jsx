import axios from "axios";
import { BACKEND_URI, API_TOKEN } from "@env";

export const getAllEvent = async () => {
    try {
        console.log(`${BACKEND_URI}/api/events`)
        const response = await axios.get(`${BACKEND_URI}/api/events`, {
            headers: {
                Authorization: `Bearer ${API_TOKEN}`
            }
        });

        const data = response.data;
        console.log(data);
        return data;

    } catch (error) {
        console.log(error);
    }
}