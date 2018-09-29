import PersonService from "./core/services/PersonService"
import RenderService from "./core/services/RenderService"
import DataSourceService from "./core/services/DataSourceService"

class App {
    constructor () {
        this.personService = new PersonService()
        this.renderService = new RenderService()
        this.dataSourceService = new DataSourceService()
    }

    init () {
        const person = this.dataSourceService.getPerson()
        const skills = this.dataSourceService.getPersonSkills()
        const projects = this.dataSourceService.getPersonProjects()

        this.personService.createPerson()
    }

    render ( $root ) {
        const header = this.renderService.renderHeader()
        const footer = this.renderService.renderFooter()

        $root.append( header )
        $root.append( footer )
    }
}

const app = new App()

app.init()
app.render()
