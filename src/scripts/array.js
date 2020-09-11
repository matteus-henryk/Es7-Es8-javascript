const aprovados = ['marcelo', 'aline', 'gustavo', 'matteus', 'ricardo', 'maria'];

for(let nome of aprovados){
  if(nome === 'jose'){
    console.log("aprovado")
    // return true;
  }else {
    console.log("não encontrado")
  }
}

const nomeIndexOf = aprovados.indexOf('matteus');

console.log(nomeIndexOf);


const nomeAprovado = aprovados.includes('jose');
if(nomeAprovado){
  console.log('Você foi aprovado');
}else {
  console.log('Você não foi aprovado');
}
console.log(nomeAprovado);