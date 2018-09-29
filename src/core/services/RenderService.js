/**
 * Render service
 */
export default class RenderService {
    constructor () {

    }

    renderHeader () {
        return "<div>header</div>"
    }

    renderFooter () {
        return "<div>footer</div>"
    }

    renderPersonInfo ( person ) {
        return "<div>person</div>"
    }

    renderPersonSkills ( skills ) {
        return "<div>skills</div>"
    }

    renderPersonProjects ( projects ) {
        return "<div>projects</div>"
    }
}
