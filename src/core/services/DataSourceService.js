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

    getPerson () {
        axios.get( this.API.PERSON ).then( () => {
            console.log( 123 )
        } )
    }

    getPersonSkills ( id ) {
        axios.get( this.API.SKILLS ).then( () => {
            console.log( 123 )
        } )
    }

    getPersonProjects ( id ) {
        axios.get( this.API.PROJECTS ).then( () => {
            console.log( 123 )
        } )
    }
}

S
