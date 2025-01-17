module.exports = function model({
  tituloDiretor,
  diretor,
  orientador,
  CURSO,
  nomeDosAlunos,
  matricula,
  dia,
  mes,
  ano,
  membroConvidado
}) {
  return `<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
    </head>
    <body>
        <style type="text/css">
            body {
                padding: 0 10%;
                position: relative;
            }
        </style>
        <p align="center">
            <strong>
                REQUERIMENTO DE CREDENCIAMENTO PARA PARTICIPAÇÃO DE BANCA
            </strong>
        </p>
        <p>
            &nbsp;Para o diretor(a) da Faculdade de Computação da Universidade Federal do Pará,
            [Prof. Dr. Josivaldo de Souza Araújo] ${tituloDiretor} ${diretor}
        </p>
        <p>
            &nbsp;De acordo com o Art. 94 do Regulamento da Graduação desta Universidade,
            solicito o credenciamento para participação de bancas de defesa de
            Trabalhos de Conclusão de Curso. Informo o convite recebido pelo(a)
            professor(a) ${orientador}, para compor a banca de defesa
            do aluno concluinte do Curso de Bacharelado em ${CURSO},
            ${nomeDosAlunos}, matrícula ${matricula}}.
        </p>
        <p>
           &nbsp;Nestes termos, peço deferimento.
        </p>
        <p>
            &nbsp;Belém, ${dia} de ${mes} de ${ano}.
        </p>
        <br>
        <p align="center">
            ____________________________________
        </p>
        <p align="center">
            ${membroConvidado}
        </p>
        <p align="center">
            (Membro convidado)
        </p>
        <br>
        <p align="center">
            ____________________________________
        </p>
        <p align="center">
            ${orientador}
        </p>
        <p align="center">
            (Orientador(a))
        </p>
        <footer>
            <p>Art. 94. O TCC será defendido em sessão pública, perante banca examinadora  constituída  de,  no  mínimo,  dois  membros,  sendo  um  deles,  obrigatoriamente,  o orientador, que presidirá a sessão. </p>
            <p>
                &#167;  1&#176; A  sessão  pública  será  organizada  pela  Faculdade  ou  Escola  e  realizada durante o período letivo. 

            </p>
            <p>
                &#167;  2&#176; A  composição  da  banca  examinadora  e  seu  suplente  deverá  ser  proposta pelo orientador, de acordo com a temática do TCC, em acordo com o discente. 

            </p>
            <p>
                &#167;  3&#176; O Conselho da Faculdade ou Escola poderá credenciar membros externos à subunidade   acadêmica,   ou   mesmo   à   Instituição,   caso   necessário,   para   fins   de composição de banca.
            </p>
        </footer>
    </body>
</html>`
}
