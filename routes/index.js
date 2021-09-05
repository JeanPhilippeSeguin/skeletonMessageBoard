var express = require('express');
var router = express.Router();


const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Messageboard', messages:messages });
});

/*GET message page*/
router.get('/new', function(req,res,next) {
  res.render('form')
})

/*message page POST*/
router.post('/new', (req,res,next) => {
messageText = req.body.messageText;
messageUser = req.body.messageUser; 
messages.push({text: messageText, user: messageUser, added: new Date()});
res.writeHead(301, {"Location": "/"});
return res.end(); 
})

module.exports = router;
