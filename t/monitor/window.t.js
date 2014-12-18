
require('../proof')(2, prove)

function prove (assert) {
    var Window = require('../../monitor/window')
    var metric = new Window(60000)
    //setTimeout(metric.sample(1), 6000)
    //setTimeout(metric.sample(2), 15000)
    //setTimeout(metric.sample(3), 25000)
    assert(metric.stats,  null , 'stats')
    metric.sample(1)
    metric.sample(2)
    metric.sample(3)
    assert(metric.stats, { average: 2 }, 'stats')
}
