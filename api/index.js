const axios = require("axios"); 

module.exports = (req, res) => {

    var ran = Math.random() * (1600 - 1) + 1;
    var val = Math.floor(ran);

    axios
        .get("https://type.fit/api/quotes")
        .then((response) => {
            res.send(response.data[val]);
    }); 
};