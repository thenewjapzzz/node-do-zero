import { randomUUID } from 'node:crypto'
import sql from './db'

export class DatabasePostgres {

     async list(search) {
        let videos

        if (search) {
            videos = await sql`select * from videos where title ilike "%{search}%"`
        } else {
            videos = await sql`select * from videos`
        }
    }

    create(video) {

    }

    update(id, video) {

    }

    delele(id) {

    }
}