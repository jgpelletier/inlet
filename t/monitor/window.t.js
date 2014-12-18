
require('../proof')(2, prove)

function prove (assert) {
    var Window = require('../../monitor/window')
    var metric = new Window(60000)
    assert(metric.stats,  null , 'stats')
    metric.sample(1,1)
    metric.sample(2,2)
    metric.sample(3)
    assert(metric.stats, { average: 3 }, 'stats')
}
