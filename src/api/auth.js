import axios from 'axios'
const ApiUrl = process.env.REACT_APP_FOODIN
// const config = {
//   headers: {
//     'Content-Type': 'application/json',
//     'X-Requested-With': 'XMLHttpRequest',
//     'Access-Control-Allow-Origin': '*',
//     'Access-Control-Allow-Headers': 'X-Requested-With'
//   }
// }

export const LoginApi = async (info) => {
  try {
    // const res = await axios.post(ApiUrl + '/api/auth/Login', info, config)
    // return res
    const tokenRes = await fetch(ApiUrl + '/api/auth/Login', {
      method: 'POST',
      body: JSON.stringify(info),
      headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'Access-Control-Allow-Origin': 'https://localhost:3002',
        'Access-Control-Allow-Headers': 'X-Requested-With'
      }
    })
    console.log('tokenRes', tokenRes)
    return tokenRes
  } catch (error) {
    return Promise.reject(new Error(error))
  }
}

export const GetUserApi = async (info) => {
  try {
    const res = await axios.get(ApiUrl + '/api/auth/GetUser', info)
    return res
  } catch (error) {
    return Promise.reject(new Error(error))
  }
}

export const RegisterApi = async (info) => {
  try {
    const res = await axios.post(ApiUrl + '/api/auth/Register', info)
    return res
  } catch (error) {
    return Promise.reject(new Error(error))
  }
}

export const EmailConfirmationApi = async (info) => {
  try {
    const res = await axios.post(ApiUrl + '/api/auth/EmailConfirmation', info)
    return res
  } catch (error) {
    return Promise.reject(new Error(error))
  }
}

export const SendSMSConfirmationApi = async (info) => {
  try {
    const res = await axios.post(ApiUrl + '/api/auth/SendSMSConfirmation', info)
    return res
  } catch (error) {
    return Promise.reject(new Error(error))
  }
}

export const SMSConfirmationApi = async (info) => {
  try {
    const res = await axios.post(ApiUrl + '/api/auth/SendSMSConfirmation', info)
    return res
  } catch (error) {
    return Promise.reject(new Error(error))
  }
}

export const ChangePasswordApi = async (info) => {
  try {
    const res = await axios.post(ApiUrl + '/api/auth/ChangePassword', info)
    return res
  } catch (error) {
    return Promise.reject(new Error(error))
  }
}

export const ResetPasswordApi = async (info) => {
  try {
    const res = await axios.post(ApiUrl + '/api/auth/ResetPassword', info)
    return res
  } catch (error) {
    return Promise.reject(new Error(error))
  }
}

export const SendEmailResetPasswordApi = async (info) => {
  try {
    const res = await axios.post(ApiUrl + '/api/auth/SendEmailResetPassword', info)
    return res
  } catch (error) {
    return Promise.reject(new Error(error))
  }
}
