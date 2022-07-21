import { LoginApi } from '../../api/auth'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  async Login (data) {
    try {
      const res = await LoginApi(data)
      return res
    } catch (e) {
      console.log('Error Login', e)
    }
  }
}
