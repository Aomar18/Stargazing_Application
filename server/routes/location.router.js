const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


//Location form -- routes GET  
router.get('/home', (req, res) => {
    const query = `SELECT "location".*, "person"."id" as person_id, "person"."username"
                        FROM  "location"
                        JOIN "person"
                        ON "person"."id" = "location"."person_id";`;
    pool.query(query).then((results) => {
        res.send(results.rows);
    }).catch((error) => {
        console.log('Error getting shelf items', error);
        res.sendStatus(500);
    });
});


//Location form -- routes POST 
router.post('/', (req, res) => {
    if (req.isAuthenticated()) {
        const query = `INSERT INTO "location" (
        "title",
        "longitude","latitude",
        "description", "bortle_value", "nelm",
        "constellations_visible","name_constellation",
        "image_path", "person_id",
         "userinput_date",  "address"
        )
         VALUES (
        $1,$2,
        $3,$4,$5,
        $6,$7,
        $8,$9,
        $10,$11,$12);`;
        const locationToAdd = req.body;
        pool.query(query, [
        locationToAdd.title,
        locationToAdd.longitude, locationToAdd.latitude,
        locationToAdd.description,locationToAdd.bortle_value, locationToAdd.NELM,
        locationToAdd.constellations_visible, locationToAdd.name_constellation,
        locationToAdd.image_path,req.user.id,
        locationToAdd.userinput_date,  locationToAdd.address
        ]).then((results) => {
            console.log(req.body);
            res.sendStatus(200);
        }).catch((error) => {
            console.log('Error posting new item', error);
            res.sendStatus(500);
        })
    } else {
        res.sendStatus(403);
    }
});


//GET BY ID on PROFILE PAGE
router.get('/profile', (req, res) => {
    if(req.isAuthenticated()){
        const query = `SELECT "location".*, "person"."id" as person_id, "person"."username"
                        FROM  "location"
                        JOIN "person"
                        ON "person"."id" = "location"."person_id"
                        WHERE "person_id" = $1;`;
        pool.query(query, [req.user.id]).then((results) => {
            res.send(results.rows); 
        }).catch((error) => {
            console.log('Error getting posts by user id', error);
            res.sendStatus(500);
        });
    } else {
        res.sendStatus(403);
    }
});


//DETAILS PAGE GET
router.get('/details/:id', (req, res) => {
    if(req.isAuthenticated()){
        console.log(req.params.id);
        const query = `SELECT * FROM "location" WHERE id=$1`;
        pool.query(query, [req.params.id])
        .then((results) => {
            res.send(results.rows); 
        }).catch((error) => {
            console.log('Error getting posts by user id', error);
            res.sendStatus(500);
        });
    } else {
        res.sendStatus(403);
    }
});



router.delete('/', (req, res) => {
    const queryText = `DELETE FROM "location" WHERE "person_id" = $1;`;
    pool.query(queryText, [req.query.id])
      .then(() => { res.sendStatus(200); })
      .catch((error) => {
        console.log('Error completing SELECT location query', error);
        res.sendStatus(500);
      });
  });

module.exports = router;