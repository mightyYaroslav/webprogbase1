var fs = require('fs')
var glob = require('glob')
var htmlLint = require('html5-lint')

glob("*.html", {}, function(err, files) {
    if(err) throw err
    files.forEach(function(file) {
        fs.readFile(file, 'utf8', function (err, html) {
            if (err) throw err
        
            htmlLint(html, function (err, results) {
                results.messages.forEach(function(msg) {
                    console.log("File: ", file, "\nHTML5 Lint [%s]: %s", msg.type, msg.message)
                })
            })
        
        })
    })
})