module.exports = (sequelize, Sequelize) => {
    const Paciente = sequelize.define("paciente", {
      nome: {
        type: Sequelize.STRING
      },
      sexo: {
        type: Sequelize.STRING
      },
      endereço: {
        type: Sequelize.STRING
      },      
      rotina:{
        type: Sequelize.STRING
      },
      dataDeNascimento:{
        type: Sequelize.DATE
      },
      ativo: {
        type: Sequelize.BOOLEAN
      },
      // funcionario que criou
      userIdCreated : {
        type: Sequelize.INTEGER,
        references: {
            model: 'users',
            key: 'id'
        },
    }
    });

    return Paciente;
  };