
window.addEventListener('DOMContentLoaded', ()=>{
    const textsc1 = document.getElementById("writterSou");

    let tosc1 = 'Front End Developer';
    const escrever = () =>{
        if (tosc1 == 'Front End Developer' && textsc1.innerHTML != tosc1) {
            let resultado = '';
            let array = tosc1.split('');
            let i = 0;
            let intervalo = setInterval(() => {
                if (resultado.length != tosc1.length) {
                    resultado += array[i];
                    i++;
                    textsc1.innerHTML = resultado;
                } else{clearInterval(intervalo);}
            }, 120);
            if (i>array.lenght) {
                i = 0;
            }
        } else{}
    }
    escrever();

});

document.querySelector('.gridhabilidades div:nth-child(1)').addEventListener('mouseover',()=>{
    document.getElementById("textHC").innerHTML = 'Habilidade em escrever códigos semânticos,rápidos e otimizados em HTML.'
});
document.querySelector('.gridhabilidades div:nth-child(2)').addEventListener('mouseover',()=>{
    document.getElementById("textHC").innerHTML = 'Habilidade em desenvolver uma estilização rápida, funcional e responsiva em CSS3.'
});
document.querySelector('.gridhabilidades div:nth-child(3)').addEventListener('mouseover',()=>{
    document.getElementById("textHC").innerHTML = 'Habilidade em criar códigos Javascript com funcionalidades diversas, avançadas e totalmente funcionais'
});
document.querySelector('.gridhabilidades div:nth-child(4)').addEventListener('mouseover',()=>{
    document.getElementById("textHC").innerHTML = 'Habilidade em construir layouts flexíveis e responsivos.'
});
document.querySelector('.gridhabilidades div:nth-child(5)').addEventListener('mouseover',()=>{
    document.getElementById("textHC").innerHTML = 'Habilidades em construir aplicativos mobile e/ou sites em React e ReactJS.'
});
document.querySelector('.gridhabilidades div:nth-child(6)').addEventListener('mouseover',()=>{
    document.getElementById("textHC").innerHTML = 'Habilidade na biblioteca para React e React Native que permite que você use estilos ao nível de componente na sua aplicação.'
});

document.querySelector('#linksmbl').addEventListener('click', ()=>{
    document.querySelector('#checkbox').checked = false;
});
document.querySelector('#linksmbl a').addEventListener('click', ()=>{
    document.querySelector('#checkbox').checked = false;
});

const AllItens = document.querySelectorAll('.itensc3');

AllItens.forEach((item, index)=>{item.addEventListener('click',()=>{
    const id = index+1;
    window.open(document.querySelector('.gap .itensc3:nth-child('+id+')>a').getAttribute('href'));
})});