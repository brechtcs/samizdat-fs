var spec = require('samizdat-spec')
var rm = require('rimraf')

rm.sync('/tmp/samizdat-fs-utf8-basic')
rm.sync('/tmp/samizdat-fs-utf8-stream')
rm.sync('/tmp/samizdat-fs-binary-basic')
rm.sync('/tmp/samizdat-fs-binary-stream')

spec.basic('filesystem (utf8)', {
    tape: require('tape'),
    db: require('./')('/tmp/samizdat-fs-utf8-basic')
})

spec.stream('filesystem (utf8)', {
    tape: require('tape'),
    db: require('./')('/tmp/samizdat-fs-utf8-stream')
})

spec.basic('filesystem (binary)', {
    tape: require('tape'),
    db: require('./')('/tmp/samizdat-fs-binary-basic', {
        encoding: 'binary'
    })
})

spec.stream('filesystem (binary)', {
    tape: require('tape'),
    db: require('./')('/tmp/samizdat-fs-binary-stream', {
        encoding: 'binary'
    })
})
