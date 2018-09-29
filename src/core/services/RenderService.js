/**
 * Render service
 */
export default class RenderService {
    constructor () {

    }

    renderHeader () {
        return "<div class='header'>header</div>"
    }

    renderFooter () {
        return "<div class='footer'>footer</div>"
    }

    renderPersonInfo ( person ) {
        return "<div class='person__info'>person</div>"
    }

    renderPersonSkills ( skills ) {
        return "<div class='person__skills'>skills</div>"
    }

    renderPersonProjects ( projects ) {
        return "<div class='person__projects'>projects</div>"
    }
}
