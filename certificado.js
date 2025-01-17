module.exports = function model({
      tituloPessoa,
      pessoa,
      condicao,
      discente,
      aprovado,
      conceito,
      tituloOrientador,
      orientador,
      tituloCoOrientador,
      coOrientador,
      tituloAvaliador1,
      avaliador1,
      tituloAvaliador2,
      avaliador2,
      tituloTCC,
      diaDefesa,
      mesDefesa,
      anoDefesa,
      dia,
      mes,
      ano,
      diretor
}) {
  const trecho1 = `${tituloPessoa} ${pessoa} participou na condição de ${condicao} da Banca de`
  const trecho2 = `, apresentado pelo discente ${discente}`
  const trecho3 = `, sendo o trabalho ${aprovado} com conceito ${conceito}.`
  return `<!DOCTYPE html>
<html>
	<body>
		<style type="text/css">
			.outer {
				display: flex;
                        flex-direction: row;
                        flex-wrap: wrap;
                        justify-content: center;
                        align-items: center;
			}
                  .certificado {
                        font-weight: 700;
                        font-size: 150%;
                  }
		</style>
            <div class="outer">
                  <div style="display: flex;">
                        <img align="left"  src="img/logoFacomp.png">
                        <div>
                              <p align="center">UNIVERSIDADE FEDERAL DO PARÁ</p>
                              <p align="center">INSTITUTO DE CIÊNCIAS EXATAS E NATURAIS</p>
                              <p align="center">FACULDADE DE COMPUTAÇÃO</p>
                        </div>
                        <img align="left"  src="img/logoUFPA.png">
                  </div>   
            </div>
		
            <br>
            <br>
            <p align="center" class="certificado">C E R T I F I C A D O</p>
            <br>
            <br>
            <!--pessoa = Pessoa que vai estar na condição de orientador, co-orientador ou avaliador. -->

            <!--
                  Avaliadores:
                  trecho1 = ${tituloPessoa} ${pessoa} participou na condição de ${condicao} da Banca de
                  trecho2 = , apresentado pelo discente ${discente}
                  trecho3 = '.'
                  
                  Discente:
                  trecho1 = discente realizou a
                  trecho2 = ''
                  trecho3 = , sendo o trabalho ${aprovado} com conceito ${conceito}.

            -->
            <div class="outer">
                  <p>
                        Certificamos para os devidos fins que o(a) ${trecho1} Defesa Pública do Trabalho de Conclusão de Curso intitulado '${tituloTCC}'${trecho2}, no dia ${diaDefesa} de ${mesDefesa} de ${anoDefesa}${trecho3}
                  </p> 
            </div>
            
            <br>
            <br>
            &nbsp;<p align="left"><strong><em>Banca:</em></strong></p>
            <p align="center">${tituloOrientador} ${orientador} (Orientador(a))</p>
            <p align="center">${tituloCoOrientador} ${coOrientador} (Co-Orientador(a))</p>
            <p align="center">${tituloAvaliador1} ${avaliador1} (Avaliador(a))</p>
            <p align="center">${tituloAvaliador2} ${avaliador2} (Avaliador(a))</p>
            
            <br>
            <br>
            <p align="right">
                  &nbsp;Belém, ${dia} de ${mes} de ${ano}.
            </p>
            <br>
            <p align="center">
                ____________________________________
            </p>
            <p align="center">
                ${diretor}
            </p>
            <p align="center">
                Diretor(a) da Faculdade de Computação
            </p>
	</body>
</html>`
}
