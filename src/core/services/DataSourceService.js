import axios from "axios"

/**
 * Data source service
 */
export default class DataSourceService {
    constructor () {
        this.root = "http://localhost:3000"

        this.API = {
            PERSON: `${this.root}/person/`,
            SKILLS: `${this.root}/skills/`,
            PROJECTS: `${this.root}/projects/`
        }
    }

    async getPerson () {
        try {
            return await axios.get( this.API.PERSON )
        } catch ( error ) {
            console.error( error )
        }
    }

    async getPersonSkills () {
        try {
            return await axios.get( this.API.SKILLS )
        } catch ( error ) {
            console.error( error )
        }
    }

    async getPersonProjects () {
        try {
            return await axios.get( this.API.PROJECTS )
        } catch ( error ) {
            console.error( error )
        }
    }
}
