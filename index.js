const express = require('express');
const cors = require('cors');
require('dotenv').config();
const fileUpload = require('express-fileupload');


const app = express();
app.use(fileUpload({createParentPath: true, preserveExtension: true}));
app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
    res.sendFile(process.cwd() + '/views/index.html');
});

app.post('/api/fileanalyse', (req, res) =>{
  let file = req.files.upfile;

  console.log(file.name);
  console.log(file.size);
  console.log(file.mimetype);
  res.json({name: req.files.upfile.name, type: req.files.upfile.mimetype, size: file.size});
})



const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
