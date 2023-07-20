import axios from 'axios';

export async function getWorkExperience(){
    return axios({
        method: 'get',
        url: process.env.LINKEDIN_URL,
        headers:{
            token: process.env.AUTH_LINKEDIN_TOKEN
        }
    })
}