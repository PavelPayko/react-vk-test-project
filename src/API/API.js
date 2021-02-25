import axios from "axios";

// const clientId = 7772242
const clientId = 7772305
const redirectUri = `http://localhost:3000/`

const vkAPI = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {'API-KEY': '94ff38ad-092c-45b8-b955-666ab07596f1'}
});

export const auth = () => {
    axios.get(`https://oauth.vk.com/authorize?client_id=${clientId}&display=page&redirect_uri=${redirectUri}&scope=friends&response_type=token&v=5.130&state=123456`)
            .then((response) => console.log(response))
}

const response = `https://oauth.vk.com/authorize?client_id=1&display=page&redirect_uri=http://example.com/callback&scope=friends&response_type=token&v=5.130&state=123456`