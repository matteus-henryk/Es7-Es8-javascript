const nome = 'Matteus';
const sobrenome = 'henryk';

const nomeCompleto = `${nome}  ${sobrenome}`;

//pad start
const nomeCompletoStringPadding = sobrenome.padStart(13, nome);

document.getElementById('stringPad').innerHTML =
nomeCompletoStringPadding;

const numeroCartao = '4890';

document.getElementById('numeroCartao').innerHTML = numeroCartao.padStart(16, "*");

//pad end
const nomeCompletoPadEnd = nome.padEnd(13, sobrenome);

document.getElementById('stringPadEnd').innerHTML =
nomeCompletoPadEnd;