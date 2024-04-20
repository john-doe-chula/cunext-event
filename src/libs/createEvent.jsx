import axios from "axios";
import { BACKEND_URI, API_TOKEN } from "@env";

export const createEvent = async (event) => {
    try {
        const response = await axios.post(
        `${BACKEND_URI}/events`,
        { 
            title: event.title,
            description: event.description,
            start_time: event.start_time,
            end_time: event.end_time,
            price: event.price,
            max_attendee: event.max_attendee,
            category: event.category,
            location: event.location,
            longtitude: event.longtitude,
            latitude: event.latitude,
            image_url: event.image_url
         },
        {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${API_TOKEN}`,
            },
        }
        );
        return response.data;
    } catch (error) {
        console.log(error);
    }

}