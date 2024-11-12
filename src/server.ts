import fastify from 'fastify';
import cors from '@fastify/cors';
import {teams, drivers} from './repositories/data-repository';

const server = fastify({logger: true});

server.register(cors, {
    origin: '*'
});

server.get<{Params: DriverParams}>('/drivers/:id', async (request, response) => {
    const id = parseInt(request.params.id);
    const driver = drivers.find((d) => d.id === id);

    if (!driver) {
        response.type('application/json').code(404);
        return {message: 'Driver not found...'};
    } else {
        response.type('application/json').code(200);
        return {driver};
    }
});

interface DriverParams {
    id: string;
}

server.get('/teams', async (request, response) => {
    response.type('aplication/json').code(200);

    return {teams};
});

server.get('/drivers', async (request, response) => {
    response.type('aplication/json').code(200);

    return {drivers};
});

server.listen({port: 3000}, () => {
    console.log('Server init');
});
