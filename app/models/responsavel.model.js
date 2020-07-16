
module.exports = (sequelize, Sequelize) => {
    const Responsavel = sequelize.define("responsavel", {
      nome: {
        type: Sequelize.STRING
      },
      sexo :{
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      celular: {
        type: Sequelize.STRING
      },
      endereco: {
        type: Sequelize.STRING
      },
      vinculo: {
        type: Sequelize.STRING
      },
      ativo: {
        type: Sequelize.BOOLEAN
      }
    });

    return Responsavel;
  };