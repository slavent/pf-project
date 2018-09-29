/**
 * Cache Service
 */
export default class CacheService {
    constructor () {
        this.storage = {}
    }

    set ( key, value ) {
        this.storage[ key ] = value
        
        return this
    }

    get ( key ) {
        return this.storage[ key ]
    }
}
