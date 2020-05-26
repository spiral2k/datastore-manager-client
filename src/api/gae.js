import request from '@request'

const get = url =>
    request({
        url,
        method: 'GET',
    })

export default { get }
