const express = require("express")
//setup express
const app = express();

function doWork (task) {
    return `Task compete: ${task}`
}

app.get("/doWork",(request, response) => {
    const result = doWork('Contractor request')

    response.send(result)
})

console.log(doWork('learning express'));

//configure your doors aka routes   verbs

app.listen(3000, () => `Server is listening on port 3000`)