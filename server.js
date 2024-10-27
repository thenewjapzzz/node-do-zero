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

    return videos
})

server.put('/videos/:id', (request, reply) => {
    const videoId = request.params.id
    const { title, description, duration } = request.body
    
    database.update(videoId, {
        title,
        description,
        duration,
    })

    return reply.status(204).send()
    
})

server.delete('/videos/:id', (request, reply) => {
    const videoId = request.params.id

    database.delele(videoId)

    return reply.status(204).send()
})


server.listen({port: 3333}, (err, address) => {
    if(err) {
        console.error(err)
    }
    console.log(`Server in running at ${address}`)
})