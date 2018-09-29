import Person from "../models/Person"
import Skill from "../models/Skill"
import Project from "../models/Project"

/**
 * Person service
 */
export default class PersonService {
    constructor () {
        this.person = null
    }

    createPerson () {
        this.person = new Person()

        this.person.name = "Slavent"
        this.person.age = 27
        this.person.address = "Moscow"
        this.person.skills = this.createSkills()
        this.person.projects = this.createProjects()
    }

    createSkills () {
        return [
            new Skill( "html" ),
            new Skill( "css" ),
            new Skill( "js" )
        ]
    }

    createProjects () {
        return [
            new Project( "project 1" ),
            new Project( "project 2" ),
            new Project( "project 3" )
        ]
    }
}
