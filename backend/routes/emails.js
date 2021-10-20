var express = require('express');
var router = express.Router();
var ObjId = require('mongoose').Types.ObjectId;
var Email = require('../models/email')
//Get
router.get('/', (req, res) => {
    Email.Email.find((err, docs) => {
        if(!err) { res.send(docs);}
        else{ console.log('Error in Retriving Id :' + JSON.stringify(err, undefined, 2));}

    });
});
//Post
router.post('/', (req,res) => {
    var mail = new Email({
        type: req.body.type,
        email_id: req.body.email_id,
        category: req.body.category,
    });
    mail.save((err, doc) => {
        if(!err){ res.send(doc);}
        else { console.log('Error in Id save:' + JSON.stringify(err, undefined, 2)); }
    });
});
//Read
router.put('/:id', (req,res) => {
    if (!ObjId.isValid(req.params.id))
      return res.status(400).send('No record with given id: $(req.params.id)');

    var mail ={
        type: req.body.type,
        email_id: req.body.email_id,
        category: req.body.category,
    };
    Email.findByIdAndUpdate(req.params.id, {$set: emp}, {new: true}, (err, doc) => {
        if(!err) { res.send(doc);}
        else{console.log('Error in Id Update :' + JSON.stringify(err, undefined, 2));}
        
    });
});

//Delete
router.delete('/:id', (req, res) => {
    if(!ObjId.isValid(req.params.id))
      return res.status(400).send('No record with given id : $(req.params.id)');
    
      Email.findByIdAndRemove(req.params.id, (err, doc) => {
          if(!err) { res.send(doc);}
          else{ console.log('Error in Id Delete :' + JSON.stringify(err, undefined,2));}
      });
});
module.exports = router;