const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', (req, res) => {
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

router.post('/', (req, res) => {
    if (req.isAuthenticated()) {
        const query = `INSERT INTO "location" ("title","longitude","latitude","description","image_path", "person_id","address","date") VALUES ($1, $2, $3, $4,$5,$6,$7);`;
        const locationToAdd = req.body;
        pool.query(query, [locationToAdd.title,
        locationToAdd.longitude,
        locationToAdd.latitude,
        locationToAdd.description,
        itemToAdd.image_path,
        locationToAdd.address,
        locationToAdd.date,
        req.user.id]).then((results) => {
            res.sendStatus(200);
        }).catch((error) => {
            console.log('Error posting new item', error);
            res.sendStatus(500);
        })
    } else {
        res.sendStatus(403);
    }
});


module.exports = router;