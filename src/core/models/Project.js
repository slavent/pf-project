/**
 * Project model
 */
export default class Project {
    constructor () {
        this._name = ""
        this._term = ""
        this._techStack = ""
    }

    get name () {
        return this._name
    }

    set name ( value ) {
        this._name = value
    }

    get term () {
        return this._term
    }

    set term ( value ) {
        this._term = value
    }

    get techStack () {
        return this._techStack
    }

    set techStack ( value ) {
        this._techStack = value
    }
}
