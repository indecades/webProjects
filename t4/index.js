//imports
const express = require('express')
let bodyParser = require('body-parser')
const fs = require('fs')
const helmet = require('helmet')
//fs = file system
const app = express()
const port = process.env.PORT || 8080
//allows to parse json data
app.use(express.json());
app.use(bodyParser.json())
app.use(helmet())
// gets search results from json file
const searches = JSON.parse(fs.readFileSync('./data/searchResults.json'))
// gets searches 
app.get('/searches', (req, res)=> {
    res.json(searches)
})
// posts new search
app.post('/searches/add', (req, res)=> {
    const newSearch = Object.assign(req.body)
    searches.length = 0
    searches.push(newSearch)
    fs.writeFileSync('./data/searchResults.json', JSON.stringify(searches))
    res.json(searches)
})



// express is being run in port 8080
app.listen(port, function () {
	console.log("Web projects app listening on port 8080!");
});
