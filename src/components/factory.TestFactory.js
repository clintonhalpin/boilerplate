module.exports = function() {
    var get = function() {
        return "Hey I'm a value and I'm being returned from a factory!"
    }

    return {
        get: get
    }
}
