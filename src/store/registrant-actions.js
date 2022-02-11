import { registrantActions } from "./registrant";

export const sendRegistrantData = registrantData => {
    return async dispatch => {
        try {
            const response = await fetch(
                'https://sunpath-ad580-default-rtdb.firebaseio.com/registrants.json', {
                    method: 'POST',
                    body: JSON.stringify(registrantData)
                }
            )
            if (!response.ok) {
                throw new Error('Saving registrant failed.')
            }
        } catch (error) {
            console.log(error)
        }
    }
}