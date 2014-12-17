
function Window () {
    this.count = 0
    this.sum = 0
    this.head = { head: true, value: null }
    this.head.next = this.head.previous = this.head
}

Window.prototype.sample = function (value) {
    // increment count and sum, add value to head.
    this.count++
    this.sum += value
    var node = {
        when: Date.now(),
        value: value,
        next: this.head.next,
        previous: this.head
    }
    this.head.next = node
    node.next.previous = node
}

Window.prototype.__defineGetter__('stats', function () {
    // purge expired values, calculate average.
    // node === this.head

    while ((this.head.next.when - this.head.previous.when) > 60000) {
        value = this.head.previous.value
        this.head.previous = this.head.previous.previous
        this.head.previous.next = this.head.next
        this.count--
        this.sum -= value
    }

    return { average: this.sum/this.count }
})

module.exports = Window
