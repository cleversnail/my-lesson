import axios from 'axios'
import { Toast } from 'vant';
import router from '../router'
import { setLocal } from '@/common/js/utils'

axios.defaults.baseURL = '//backend-api-01.newbee.ltd/api/v1'
//只要用axios进行接口请的，都可以在请求头里面携带cookie或者authorization headers
axios.defaults.withCredentials = true 
axios.defaults.headers['X-requested-With'] = 'XMLHttpRequest'
axios.defaults.headers['token'] = localStorage.getItem('token') || ''
axios.defaults.headers.post['Content-Type'] = 'application/json'

axios.interceptors.response.use(res => {
  if (typeof res.data !== 'object') {
    Toast.fail('服务端异常!');
    return Promise.reject(res)
  }

  if (res.data.resultCode != 200) {
    if (res.data.message) Toast.fail(res.data.message); 
    if (res.data.resultCode == 416 && router.currentRoute.value.path !== '/home' && router.currentRoute.value.path !== '/category') {
      router.push({ path: '/login' })
    }
    
    if (res.data.data && router.currentRoute.value.path == '/login') {
      setLocal('token', res.data.data)
      axios.defaults.headers['token'] = res.data.data
    }

    return Promise.reject(res.data)
  }

  return res.data
})

export default axios
