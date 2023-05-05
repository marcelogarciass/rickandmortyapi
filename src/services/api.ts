import axios from "axios"

const callApi = (method: string, endpoint: string) => {
    const BASE_URI = "https://rickandmortyapi.com/api/"
    return new Promise((resolve, reject) => {
        return axios({
            baseURL: BASE_URI + endpoint,
            method 
        }).then((res: any) =>{
            console.log({ res });
            resolve(res)
        }).catch((err: any) =>{
            console.log({ err });
            reject(err)
    })
})}

export const getCharacters = () =>{
    return callApi("get", "character")
}