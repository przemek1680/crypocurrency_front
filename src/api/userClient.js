import {
    apiClient
} from "./apiClient";


export const newUser = async (firstName, lastName, email, image, password) => {
    const response = await apiClient.post('/register',{
        UserFirstName: firstName,
        UserSurname: lastName,
        UserEmail:email,
        UserProfileURL: image,
        UserPassword:password,
    })
    return response;
}