import swagger from '@fastify/swagger';
import Fastify from 'fastify'
import {userRoutes} from './user-routes';

const server = Fastify();

console.info('Registering Swagger');
server.register(swagger, {
    routePrefix: '/docs',
    exposeRoute: true,
    openapi: {
        info: {
            title: 'Hypermedia API',
            version: '1.0.0'
        },
    }
});

server.register(userRoutes);

server.listen({port: 8080}, (err, address) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log(`Server listening at ${address}`);
});
