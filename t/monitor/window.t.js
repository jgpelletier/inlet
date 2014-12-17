
require('../proof')(1, prove)

function prove (assert) {
    var Window = require('../../monitor/window')
    var metric = new Window(60000)
    metric.sample(1)
    metric.sample(2)
    metric.sample(3)
    assert(metric.stats, { average: 2 }, 'stats')
}
