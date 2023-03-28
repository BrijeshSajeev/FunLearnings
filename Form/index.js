'strict mode'

const singUp =document.querySelector('.sign_up');
const loginPage=document.querySelector('.log-page');
const signInBtn=document.querySelector('.sing-in');
const cAccBtn=document.querySelector('.create-acc');
const signUpBtn = document.getElementById('xbtn');


 


const name = document.getElementById('name2');
const mail = document.getElementById('email2');
const pass = document.getElementById('password2');
const form=document.querySelector('.form');
const form_end =document.querySelector('.form2');


const checkNull = function(){
    if(name.value && mail.value && pass.value )
        return true;
    else
        return false;
}




signInBtn.addEventListener('click',function(e){
   
    loginPage.classList.add('hidden');
    singUp.classList.remove('hidden');
   
})

cAccBtn.addEventListener('click',function(e){
    
    if(checkNull()){
        loginPage.classList.remove('hidden');
        singUp.classList.add('hidden');
       
        form.reset();
    }
    // console.log(name.value);

})

signUpBtn.addEventListener('click',function(){
    // singUp.classList.add('hidden');
    form_end.reset();

})