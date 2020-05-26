export default {
    isDev: process.env.NODE_ENV === 'development' || !process.env.NODE_ENV,
    isProd: process.env.NODE_ENV === 'production',
}
