const express = require('express');
const router = express.Router();
const Present = require("../models/Present.model.js")

/* GET Presents page */
/* ROUTE /presents page */
router.get('/', async (req, res, next) => {
  try {
    const presents = await Present.find({});
    res.render('presents', { presents });
  } catch (error) {
    next(error)
  }
 
});
module.exports = router;