import {FastifyInstance} from "fastify";
import {
    UserCollectionDto,
    UserDto,
    UserQueryDto,
} from "./user-schemas";
import schema from '../generated/schema.json';

export async function userRoutes(fastify: FastifyInstance) {
    console.info('Registering user routes');
    fastify.addSchema(schema.definitions.UserDto);

    type QueryUsersTypes = { Querystring: UserQueryDto, Reply: UserCollectionDto };
    const queryUsersOpts = {
        schema: {
            querystring: schema.definitions.UserQueryDto,
        }
    };
    fastify.get<QueryUsersTypes>('/users', queryUsersOpts, (request, reply) => {
            // The `name` and `mail` types are automatically inferred
            const {name, mail} = request.query;
            reply.status(200).send([{name: name ?? 'Alex', mail: mail ?? 'non@example.org'}]);
        }
    );

    type CreateUserTypes = { Body: UserDto, Reply: UserDto };
    const createUserOpts = {
        schema: {
            body: schema.definitions.UserDto,
            response: {
                200: schema.definitions.UserDto
            },
        },
    };
    fastify.post<CreateUserTypes>('/users', createUserOpts,(request, reply) => {
            // The `name` and `mail` types are automatically inferred
            const {name, mail} = request.body;
            reply.status(200).send({name, mail});
        }
    );
}