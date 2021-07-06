module.exports = {
    apps: [
        {
            name: 'api-crawer',
            script: './server.js',
            instances: 'max',
            exec_mode: 'cluster',
            autorestart: true,
        },
    ],
}
