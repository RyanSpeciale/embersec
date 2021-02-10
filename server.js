const express = require('express');
const app = express();

app.get('/', (req,res) => {
    var options = {
        root: __dirname + '/public/',
        dotfiles: 'deny'
      };
    
      var fileName = path.resolve(folder, runId, 'indexs.html');
      res.sendFile(fileName, options, function (err) {
        if (err) {
          console.log(err);
          res.status(err.status).end();
        }
        else {
          console.log('Sent:', fileName);
        }
      });
})

app.listen(4000, () => {
    console.log('Server listening on port 4000')
})

