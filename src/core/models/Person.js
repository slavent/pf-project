/**
 * Person model
 */
export default class Person {
    constructor () {
        this._name = ""
        this._age = ""
        this._address = ""
        this._skills = []
    }

    get name () {
        return this._name
    }

    set name ( value ) {
        this._name = value
    }

    get age () {
        return this._age
    }

    set age ( value ) {
        this._age = value
    }

    get address () {
        return this._address
    }

    set address ( value ) {
        this._address = value
    }

    get skills () {
        return this._skills
    }

    set skills ( value ) {
        this._skills = value
    }
}
