import * as convict from "convict";

const conf = convict({
    env: {
        format: ['development', 'production', 'test'],
        default: 'development',
        env: 'NODE_ENV',
    },
    server: {
        port: {
            format: 'port',
            default: 4300,
            env: 'APP_PORT',
        },
        routingPrefix: {
            format: '*',
            default: "",
            env: 'CONTEXT_PATH',
        },
    },
    database: {
        host: {
            format: '*',
            default: 'sports-vista-nosql-sports-vista.h.aivencloud.com', // IP Address of my Local MYSQL Server
            env: 'sports-vista-nosql-sports-vista.h.aivencloud.com',
        },
        port: {
            format: 'port',
            default: 16152,
            env: '16152',
        },
        name: {
            format: '*',
            default: 'ecommerce',
            env: 'ecommerce', // Update to Match DB name of MYSQL Server
        },
        username: {
            format: '*',
            default: 'avnadmin', // Update to Username of MYSQL Server
            env: 'avnadmin',
        },
        password: {
            format: '*',
            default: 'AVNS_v5MvRkROhNPdusCOwDq',  // Update to Password of MYSQL Database
            env: 'AVNS_v5MvRkROhNPdusCOwDq',
        }
    }
});

conf.validate({allowed: 'strict'});

export default conf.getProperties();
