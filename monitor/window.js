
function Window () {
    this.count = 0
    this.sum = 0
    this.head = {}
    this.head.next = this.head.previous = this.head
}

Window.prototype.sample = function (value) {
    // increment count and sum, add value to head.
    this.count++
    this.sum += value
    var node = {
        when: Date.now,
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
    return { average: 0 }
})

module.exports = Window
