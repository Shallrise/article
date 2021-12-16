let proxyObj = {}

proxyObj['/'] = {
    ws: false,
    target: 'http://localhost:3000',
    changeOrigin: true,
    pathRewrite: {
        '^/': '/'
    }
}

module.exports = {
    devServer: {
        host: 'localhost',
        port: 8082,
        proxy: proxyObj
    }
}