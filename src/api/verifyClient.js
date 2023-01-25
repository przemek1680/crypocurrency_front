import {
    apiClient
} from "./apiClient";

export const userData = async (email, password) => {
    const response = await apiClient.post('/login',{
        UserEmail:email,
        UserPassword:password
    })
    .then((response) => {
        localStorage.setItem("User", JSON.stringify(response.data));
        return response.data;
    });
}