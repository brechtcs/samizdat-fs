var spec = require('samizdat-spec')
var rm = require('rimraf')

rm.sync('/tmp/samizdat-fs-basic')
rm.sync('/tmp/samizdat-fs-stream')

spec.basic('filesystem', {
    tape: require('tape'),
    db: require('./')('/tmp/samizdat-fs-basic')
})

spec.stream('filesystem', {
    tape: require('tape'),
    db: require('./')('/tmp/samizdat-fs-stream')
})
