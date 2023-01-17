import {apiClient} from './apiClient';

export const cryptoDetails = async () => {
    return await apiClient.get(`/cryptos`)
}