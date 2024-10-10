export default class ErrorRepository {
    constructor() {
        this.errors = new Map();
    }

    add(code, message) {
        this.errors.set(code, message);
    }

    translate(code) {
        return this.errors.get(code) || 'Unknown error';
    }
}