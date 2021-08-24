const conexao = require('../infraestrutura/conexao');

class Atendimento {
  adiciona(atendimento) {
    // ? = oq a gnt pegar ali na interrogação é que vai ser jogado dentro da tabela Atendimentos
    const sql = `INSERT INTO Atendimentos SET ?`

    conexao.query(sql, atendimento, (err, resultados) => {
      if(err) {
        console.log(err);
      } else {
        console.log(resultados);
      }
    });
  }
}

module.exports = new Atendimento