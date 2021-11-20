# Going serverless with Vercel

source: [here](https://dev.to/sumitkolhe/going-serveless-with-vercel-5b4o)

`npm init`  
`npm install axios`  
`mkdir api`  

code for index.js
``js
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
```

to run `vercel`  
to put in production `vercel --prod`
