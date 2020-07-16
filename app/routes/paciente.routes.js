module.exports = app => {
    const pacientes = require("../controllers/paciente.controller.js");
  
    var router = require("express").Router();
  
    // Create a new paciente
    router.post("/", pacientes.create);
  
    // Retrieve all pacientes
    router.get("/", pacientes.findAll);
  
    // Retrieve all published pacientes
    router.get("/published", pacientes.findAllPublished);
  
    // Retrieve a single paciente with id
    router.get("/:id", pacientes.findOne);
  
    // Update a paciente with id
    router.put("/:id", pacientes.update);
  
    // Delete a paciente with id
    router.delete("/:id", pacientes.delete);
  
    // Create a new paciente
    router.delete("/", pacientes.deleteAll);
  
    app.use('/api/pacientes', router);
  };