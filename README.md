# jumpBetweenInputFields
PT-BR: Na empresa onde trabalho me foi solicitado que o sistema que eu estava desenvolvendo (um sistema de cadastro de pedidos de venda) tivesse a opção de pular os campos através da tecla "Enter". Como esse sistema possuía muitos campos (quase 70), fiz essa função que fará o salto de campo de forma automática e dinâmica, sem a necessidade de criar eventos manuais de keypress pra todos os campos da tela. 

(OBS: Essa função funciona somente com campos do tipo "Text" e "Check", não funcionando com o "Date", pois o mesmo ao pressionar enter ativa o calendário. Caso necessário, pode-se alterar a tecla que o salto é efetuado para que funcione no campo "Date" também.)

Função javascript que faz o salto de campo a campo entre inputs utilizando o enter de forma dinâmica. 

ENG: In the company where I work for, it was asked to me to the system I was developing (a sales order system) had a function to pull the input fields with the Enter key. The system has almost 70 input fields, so I did a function that will do the "jump" between input fields in automatic and dynamic way, with no need to create keypress events for all fields in the screen.

(OBS: This function works only with input type "Text" and "Check", does not work with the "Date" type, because this type open the calendar when you press Enter. If you need, you can change the key that will do the jump to work with the "Date" type too.)
