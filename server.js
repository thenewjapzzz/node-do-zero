import { fastify } from 'fastify'
import { DatabaseMemory } from './data-base-memory.js';

const server = fastify();

const database = new DatabaseMemory();

server.post('/videos', (request, reply) => {
    const { title, description, duration }= request.body

    database.create({
        title: title,
        description: description,
        duration: duration,
    })

    return reply.status(201).send()
})

server.get('/videos', () => {
    const videos = database.list()

    console.log(videos)

    return videos
})

server.put('/video/:id', () => {
    return 'Hello world'
})

server.delete('/video/:id', () => {
    return 'Hello world'
})


server.listen({port: 3333}, (err, address) => {
    if(err) {
        console.error(err)
    }
    console.log(`Server in running at ${address}`)
})