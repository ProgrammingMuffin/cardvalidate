const express = require('express');
const bodyParser = require('body-parser');
const spawn = require("child_process").spawn;
const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


app.get("/validate", (req, res) => {
    input = {
        number: req.query.number,
        name: req.query.name,
        cvv: req.query.cvv,
        expiry: req.query.expiry
    }

    const pythonProcess = spawn('python',["cardvalidate.py", input.name.toString(), input.number, input.cvv, input.expiry]); //Call python code

    pythonProcess.stdout.on('data', (data) => {
        console.log(data.toString())
        res.send(data.toString())
    });
});

app.get("/", (req, res) => {
    res.send("Hello world!");
});


//JAVASCRIPT version of the luhn's algorithm (not used for now)
function isCreditCardValid(value) {
    // accept only digits, dashes or spaces
    if (/[^0-9-\s]+/.test(value)) return false;

    // The Luhn Algorithm calculation
    var nCheck = 0, nDigit = 0, bEven = false;
    value = value.replace(/\D/g, "");
    
    for (var n = value.length - 1; n >= 0; n--) {
        var cDigit = value.charAt(n),
        nDigit = parseInt(cDigit, 10);
    
        if (bEven) {
            if ((nDigit *= 2) > 9) nDigit -= 9;
        }
    
        nCheck += nDigit;
        bEven = !bEven;
    }
    
    return (nCheck % 10) == 0;
}

//console.log(isCreditCardValid("5089930011010643"));


//for the server hosting.. The server will be hosted on the specified port.
app.listen(3000, () => {console.log("Successfully running server on port 3000")} );