var express = require('express');
var router = express.Router();

const MongoClient = require('mongodb').MongoClient; //Importo la libreria mongodb

/* GET users listing. */
router.get('/morterurale', function (req, res, next) {
    const uri = 'mongodb+srv://Fiorito:ciao12345@cluster0.2grvr.mongodb.net/DATI?retryWrites=true&w=majority'
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    
    client.connect(err => {
        console.log('prova');
        const collection = client.db("DATI").collection("morte_rurale"); //Mi connetto alla collection movies
        // perform actions on the collection object
        collection.find().limit(10).toArray((err, result) => {
            if (err) console.log(err.message); //Se c'è qualche errore lo stampo
            else console.log(result);
            //client.close(); //Quando ho terminato la find chiudo la sessione con il db
        }); //Eseguo la query e passo una funzione di callback
            
    });
    res.send(result);
});

module.exports = router;