import axios from 'axios'

const defaultHeaders = { 'Content-Type': 'application/json' }

export default ({ url, method, data = {}, headers = defaultHeaders }) => {
    const dataOrParams = ['GET', 'DELETE'].includes(method) ? 'params' : 'data'

    return axios
        .request({
            url,
            method,
            headers,
            [dataOrParams]: data,
        })
        .then(res => Promise.resolve(res.data))
        .catch(e => Promise.reject(e))
}
