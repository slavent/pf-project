import CacheService from "./core/services/CacheService"
import RenderService from "./core/services/RenderService"
import DataSourceService from "./core/services/DataSourceService"
import fields from "./core/enums/fields"

class Application {
    constructor () {
        this.cacheService = new CacheService()
        this.renderService = new RenderService()
        this.dataSourceService = new DataSourceService()
    }

    async initModels () {
        const person = await this.dataSourceService.getPerson()
        const skills = await this.dataSourceService.getPersonSkills()
        const projects = await this.dataSourceService.getPersonProjects()

        this.cacheService
            .set( fields.PERSON, person )
            .set( fields.SKILLS, skills )
            .set( fields.PROJECTS, projects )
    }

    render ( $root ) {
        const headerHTML = this.renderService.renderHeader()
        const footerHTML = this.renderService.renderFooter()
        const personInfoHTML = this.renderService.renderPersonInfo( this.cacheService.get( fields.PERSON ) )
        const skillsHTML = this.renderService.renderPersonSkills( this.cacheService.get( fields.SKILLS ) )
        const projectsHTML = this.renderService.renderPersonProjects( this.cacheService.get( fields.PROJECTS ) )

        $root.append( headerHTML )
        $root.append( personInfoHTML )
        $root.append( skillsHTML )
        $root.append( projectsHTML )
        $root.append( footerHTML )
    }
}

const $root = document.getElementById( "application" )
const application = new Application()

application
    .initModels()
    .then( () => application.render( $root ) )
