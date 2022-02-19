const config = {
    user: 'sa',
    password: '123',
    server: 'localhost',
    database: 'nodejs_api',
    port: 50010,

    options: {
        trustedConnection: true,
        enableArithAbort: true,
        trustServerCertificate: true,
        synchronize: true,
        instancename: 'SQLEXPRESS'
    }
}

module.exports = config;