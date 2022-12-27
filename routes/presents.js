const express = require('express');
const router = express.Router();
const Present = require("../models/Present.model.js")

/* GET Presents page */
/* ROUTE /presents page */
router.get('/', async (req, res, next) => {
  try {
    const presents = await Present.find({});
    res.render('presents', { presents });
    return Present.updateOne({name: "The Colour Monster"}, {$set: {image:"/images/colour-monster-book-1.jpeg"}})
  } catch (error) {
    next(error)
  } 
});

/* GET Present Detail page */
/* ROUTE /presents/:id page */
router.get('/:presentId', async (req, res, next) => {
  const { presentId } = req.params;
  try {
    const present = await Present.findById(presentId);
    res.render('presentsDetails', present)
  } catch (error){
    next(error)
  }
});
module.exports = router;