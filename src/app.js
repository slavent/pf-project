import RenderService from "./core/services/RenderService"
import DataSourceService from "./core/services/DataSourceService"

class Application {
    constructor () {
        this.cache = {}
        this.renderService = new RenderService()
        this.dataSourceService = new DataSourceService()
    }

    async initModels () {
        const person = await this.dataSourceService.getPerson()
        const skills = await this.dataSourceService.getPersonSkills()
        const projects = await this.dataSourceService.getPersonProjects()

        this.cache = {
            person,
            skills,
            projects
        }
    }

    render ( $root ) {
        const { person, skills, projects } = this.cache
        const headerHTML = this.renderService.renderHeader()
        const footerHTML = this.renderService.renderFooter()
        const personInfoHTML = this.renderService.renderPersonInfo( person )
        const skillsHTML = this.renderService.renderPersonSkills( skills )
        const projectsHTML = this.renderService.renderPersonProjects( projects )

        $root.append( headerHTML )
        $root.append( personInfoHTML )
        $root.append( skillsHTML )
        $root.append( projectsHTML )
        $root.append( footerHTML )
    }
}

const application = new Application()

application
    .initModels()
    .then( () => application.render() )
