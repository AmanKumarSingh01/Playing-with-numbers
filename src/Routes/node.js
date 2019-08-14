const axios = require('axios')

axios.get('http://numbersapi.com/5/math?json')
        .then(response => {
          console.log(response.data.text);
        })

        .catch(error => {
          console.log(error);
        });