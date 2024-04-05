/* var primeiro tipo de 
variavel funciona em qualquer lugar do arquivo*/
var altura = 5;
var comprimento = 7;


area = altura * comprimento;
console.log(area);
var area;

/*let  só permite que a 
variável seja utilizada 
após sua declaração.*/

let forma = 'retângulo';
let altura2 = 5;
let comprimento2 = 7;

if(forma === 'retângulo'){
    area = altura2 * comprimento2;
}else{
    area = (altura2 * comprimento2)/2;
}
console.log(area);
//let area;

/* A const é uma constante, ou seja, uma vez
 que a colocamos no programa não conseguimos 
 alterá-la.*/

 const forma3 = 'quadrado';
 const altura3 = 5;
 const comprimento3 = 7;

 const area3 = altura3 * comprimento3;

 console.log(area3);
