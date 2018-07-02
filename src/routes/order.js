const express = require('express');
const router = express.Router();
const request = require('request');

//Return
router.post('/', (req, res) => {
    var params = req.body;
    var clientName = params.name;
    var clientSurname = params.surname;
    var clientEmail = params.email;
    var clientPhoneList = params.phone_list;
    var clientPhoneArray = clientPhoneList.split(',');

    request('http://docker.for.mac.host.internal:49160', function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var phoneListFromDatabase = JSON.parse(response.body);
            var total = 0;
            phoneListFromDatabase.forEach(function (key) {
                var exists = clientPhoneArray.indexOf(key.name.toString());
                if (exists !== -1){ //Not exists
                    total = total + key.price;
                }
            });

            console.log('Phone App - Capitole Consulting');
            console.log('The client ' + clientName + ' ' + clientSurname + '(' + clientEmail + ') order this phones: ' + clientPhoneArray.toString());
            console.log('Total: ' + total + '€');

        }
        else {
            console.log('Error ' + response.statusCode)
        }
    });

    res.send("Phone App, please check logs");
});


module.exports = router;