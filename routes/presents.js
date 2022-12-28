const express = require('express');
//const { } = require('../app.js');
const router = express.Router();
const Present = require("../models/Present.model.js")

/* GET Presents page */
/* ROUTE /presents*/
//Sort presents alphabetically
router.get('/', async (req, res, next) => {
  try {
    const presents = await Present.find({}).sort({name:1});
    /*presents.sort((a, b) => {
      if (a.name.toLowerCase() < b.name.toLowerCase()) {
        return -1;
      } if (a.name.toLowerCase() > b.name.toLowerCase()) {
        return 1;
      } return 0;
    });*/
    res.render('presents', { presents });
    //return Present.updateOne({name: "The Colour Monster"}, {$set: {image:"/images/colour-monster-book-1.jpeg"}}) "change image"
  } catch (error) {
    next(error)
  } 
});

/* GET form view */
/* ROUTE /presents/new */
router.get('/new', (req, res, next) => {
  res.render('newPresent')
})

/* POST get users present inputs */
/* ROUTE /presents/new */
router.post('/new', async (req, res, next) => {
  const { name, image, price, recipient, season, description } = req.body;
  try {
    const newPresent = await Present.create({ name, image, price, recipient, season, description });
    //res.redirect(`/presents/${newPresent._id}`); redirect detail
    res.redirect('/presents'); // redirect all presents
  } catch (error) {
    next(error)
  }
});


/* GET delete show */
/* ROUTE /presents/delete/:id */
router.get('/delete/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    await Present.findByIdAndDelete(id);
    res.redirect('/presents');
  } catch (error) {
    next(error)
  }
});

/* GET One Present - Present Detail page */
/* ROUTE /presents/:id */
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