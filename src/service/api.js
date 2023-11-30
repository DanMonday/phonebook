import axios from "axios";


const $instance = axios.create({
    baseURL: 'https://650209b5736d26322f5ca9a5.mockapi.io/contacts'
})

export const sendContact = async formData => {
    const {data} = await $instance.post('/contacts', formData)
    return data
}

// const clearToken = () => {
//     $instance.defaults.headers.Authorization = ''
// };

// export const loginRequest = async formData => {
//     const { data } = await $instance.post('/users/login', formData)
//     return data
// };

// export const registerRequest = async formData => {
//     const { data } = await $instance.post('/auth/login', formData)
//     return data
// };

// export const logOutRequest = async() => {
//     const { data } = await $instance.post('/users/logout')
//     return data
// };

// export const currentUserRequest = async() => {
//     const { data } = await $instance.get('/users/current')
//     return data
// };

// export const addContactRequest = async formData => {
//     const { data } = await $instance.post('/contacts', formData)
//     return data
// };

// export const getContactsRequest = async() => {
//     const { data } = await $instance.get('/contacts')
//     return data
// };

// export const deleteContactRequest = async contactId => {
//     const { data } = await $instance.delete(`/contacts/${contactId}`)
//     return data
// };
