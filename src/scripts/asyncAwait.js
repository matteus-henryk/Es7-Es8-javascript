(async function asyncListaLivros(){
  try{
    const resposta = await fetch('https://www.oogleapis.com/books/v1/volumes?q=javascript');
  
    const dados = await resposta.json();
    const items = dados.items.map(item => item);
    const informacoes = items.map(item => item.volumeInfo);
    const titulos = informacoes.map(info => info.title);
    renderizarLista('asyncListaLivros', titulos);
  }catch(erro){
    console.error('Deu ruim aqui óo ' + erro)
  } finally{
    console.log('A função asyncListaLivros foi executada')
  }
  
})()