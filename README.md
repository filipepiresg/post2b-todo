# Post2b TodoApp

Esse todo app foi construido em `ReactJS` com `bootstrap`, para o gerenciamento dos estados da aplicacão foi utilizado `Redux`, para a persistencia dos dados com o `redux-persist`, e para a estilizacão dos componentes o `styled-components`.

## Add todo

Para adicionar é necessário pressionar o botão "Add Todo" (em qualquer dos 3 boards) e preencher os campos de título e de descricão, e após isso, pressionar o botão de "Submit", pra que assim seja feito a adicão do todo.

## Remover todo

Deve ser aberto o card do todo selecionado, e pressionar o botão "Delete", para que seja de fato removido da aplicacão

## Editar todo

Quando aberto o card, exibirá os campos título e descricão do todo, deve ser feito essas alteracões nesses campos e após isso pressionado o botão "Submit"

## Mudar status

Para mudar o status de um todo, só é necessário arrastar o card (drag n' drop) da lista atual para a desejada, ou apenar abrir o card e selecionar o novo status

___

### Melhorias possíveis

- [ ] Visto que as descricões podem ser muito grandes, pode-se remover a descricão do card (deixando apenas o título) e só o exibindo no modal

- [x] Colocar um `select` no modal pra facilitar a transição entre as colunas.
