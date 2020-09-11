(function listaLivrosJavascript(){
  return fetch('https://www.googleapis.com/books/v1/volumes?q=javascript')
  .then(data => data.json())
  .then(data => data.items.map(item => item))
  .then(data => data.map(item => item.volumeInfo))
  .then(data => data.map(item => item.title))
  .then(data => renderizarLista("promiseListaLivro", data))
  .catch(erro => console.error('Eita:' + erro))
  .finally(() => console.log('Foi executado a função listalivros javascript'))
})();