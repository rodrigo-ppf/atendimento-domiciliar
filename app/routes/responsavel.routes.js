module.exports = app => {
    const responsavels = require("../controllers/responsavel.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", responsavels.create);
  
    // Retrieve all responsavels
    router.get("/", responsavels.findAll);
  
    // Retrieve all published responsavels
    router.get("/published", responsavels.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", responsavels.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", responsavels.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", responsavels.delete);
  
    // Create a new Tutorial
    router.delete("/", responsavels.deleteAll);
  
    app.use('/api/responsavels', router);
  };