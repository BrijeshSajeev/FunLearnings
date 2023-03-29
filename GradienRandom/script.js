const btn = document.querySelector('button');

const generateRamdomColor= () => Math.floor(Math.random() * 0xffffff).toString(16);

const generateGradient =() =>{
    const color1= generateRamdomColor();
    const color2= generateRamdomColor();
    document.querySelector('body').style.background = `linear-gradient(to left top, #${color1},#${color2})`
}
generateGradient();

btn.addEventListener('click',function(){
    generateGradient();
})

