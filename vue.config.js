module.exports = {
    pages: {
        'index': {
            entry: './src/pages/Client/client.js',
            template: 'public/index.html',
            title: 'Home',
            filename: 'index.html',
            chunks: ['chunk-vendors', 'chunk-common', 'index'],
            // excludeChunks: ['chunk-vendors']
        },
        'admin': {
            entry: './src/pages/Admin/admin.js',
            template: 'public/admin.html',
            title: 'Admin',
            filename: 'admin.html',
            chunks: ['chunk-vendors', 'chunk-common', 'admin']
        }
    },
    devServer: {
        proxy: {
            '/admin': {
                target: 'http://localhost:8080',
                pathRewrite: {'^/.*': '/admin.html'},
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
                    "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
                }
            }
        }
    }
}