import { randomUUID } from 'node:crypto'

export class DatabaseMemory {
    #videos = new Map()

    list() {
        return Array.from(this.#videos.values())
    }

    create(video) {
        const videoId = randomUUID()
        
        this.#videos.set(videoId, video)
    }

    update(id, video) {
        this.#videos.set(id, video)
    }

    delele(id) {
        this.#videos.delete(id)
    }
}