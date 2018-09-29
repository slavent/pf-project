/**
 * Render service
 */
export default class RenderService {
    constructor () {

    }

    renderHeader () {
        return "<div class='container'><div class='row'><div class='col-12'>header</div></div></div>"
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
