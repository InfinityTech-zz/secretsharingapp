import { Secret } from "./models/secret.model";
import axios from 'axios';
const createSecret = async(secretData: Secret) => {
    console.log('secretData', secretData);
    const baseURL = process.env.REACT_APP_API_BASE_URL;
    const response = await axios.post(`${baseURL}secrets/createSecret`, secretData);
    return response.data;
};

const fetchSecret = async (objId: string) => {
    const baseURL = process.env.REACT_APP_API_BASE_URL;
    const response = await axios.get(`${baseURL}secrets/${objId}`);
    return response.data;
}

export {
    createSecret,
    fetchSecret
}