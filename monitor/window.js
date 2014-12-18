
function Window () {
    this.count = 0
    this.sum = 0
    this.head = { head: true, value: null }
    this.head.next = this.head.previous = this.head
}

Window.prototype.sample = function (value, time) {
   var clock

    if (!time) clock = function () { return Date.now()}
    else clock = function () { return time }

    this.count++
    this.sum += value
    var node = {
        when: clock(),
        value: value,
        next: this.head.next,
        previous: this.head
    }
    this.head.next = node
    node.next.previous = node
}


Window.prototype.__defineGetter__('stats', function () {

    while (Date.now() - this.head.previous.when)  {
        value = this.head.previous.value
        this.head.previous = this.head.previous.previous
        this.head.previous.next = this.head
        this.count--
        this.sum -= value
    }

    if ( this.count == 0 ) return null
    else return { average: this.sum/this.count }
})

module.exports = Window
