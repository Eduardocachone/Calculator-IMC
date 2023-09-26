const button = document.getElementById ('button');
const nome = document.getElementById ('name');
const altura = document.getElementById ('altura');
const peso = document.getElementById ('peso');
const resultado = document.getElementById ('resultado');

const getText = (imc) => {
    if(imc > 40) return 'Obesidade nivl III';
    if(imc > 35) return 'Obesidade nivl II';
    if(imc > 30) return 'Obesidade nivl I';
    if(imc > 25) return 'levemente acima do peso';
    if(imc > 18) return 'peso ideal';
    return 'abaixo do peso';
}


const imcCalc = () => {
    if(!nome.value || !peso.value || !altura.value) return resultado.textContent = 'prencha todos os campos'
    const valorImc = (+peso.value / (+altura.value * +altura.value)).toFixed(1);
    resultado.textContent = `${nome.value} - ${getText(valorImc)}`;
}

button.addEventListener('click',imcCalc);
