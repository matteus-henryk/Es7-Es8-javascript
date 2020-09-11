const { angular, ...frameworks } = cursos;
console.log('angular:', angular);
console.log('frameworks:', frameworks);

const novosCursos = { angular , ...frameworks };
console.log('novos:', novosCursos);