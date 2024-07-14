const logincard = document.querySelector("#Logincard");
const login = document.querySelector("#login");
const close = document.querySelector('#close');
const overlape = document.querySelector('#overlape')
const SignUpCard = document.querySelector("#SignUpCard");
const AlreadySignUp = document.querySelector('#AlreadySignUp');
const GotoSignUp = document.querySelector('#GotoSignUp');
// const body = document.querySelector('body');

function freezeScreen() {
    // Disable scrolling by adding overflow: hidden to the body
    document.body.style.overflow = 'hidden';
}

// Function to unfreeze the screen
function unfreezeScreen() {
    // Enable scrolling by removing overflow: hidden from the body
    document.body.style.overflow = '';
}
function addOverlay(){
    overlape.classList.remove('opacity-0','z-[-1]');
    overlape.classList.add('opacity-50','z-[1]');
    SignUpCard.classList.remove('hidden');
    SignUpCard.classList.add('flex');
    freezeScreen();
       
}

function hideOverlay(){
    unfreezeScreen();
    overlape.classList.remove('opacity-50','z-[1]');
    overlape.classList.add('opacity-0','z-[-1]');
    SignUpCard.classList.remove('flex');
    SignUpCard.classList.add('hidden');
    logincard.classList.remove('flex');
    logincard.classList.add('hidden');
   
}

login.addEventListener('click',addOverlay);
close.addEventListener('click',hideOverlay);
overlape.addEventListener('click', hideOverlay);
close1.addEventListener('click',hideOverlay);

AlreadySignUp.addEventListener('click',()=>{
    SignUpCard.classList.remove('flex');
    SignUpCard.classList.add('hidden');
    logincard.classList.remove('hidden');
    logincard.classList.add('flex');
})

GotoSignUp.addEventListener('click',()=>{
    logincard.classList.remove('flex');
    logincard.classList.add('hidden');
    SignUpCard.classList.remove('hidden');
    SignUpCard.classList.add('flex');
})


// handling User-state
const SignUpForm =document.querySelector("#SignUpForm");

SignUpForm.addEventListener('submit',(e)=>{
   e.preventDefault();
    const FirstNameInput = document.getElementById("FirstName");
    const SecondNameInput = document.getElementById("SecondName");
    const FirstName = FirstNameInput.value.trim();
    const SecondName = SecondNameInput.value.trim();
    
    if(FirstName){
        console.log(FirstName)
       login.innerHTML = `${FirstName} ${SecondName}`;
    
       login.classList.add('bg-orange-500');
       login.classList.remove('bg-indigo-700');
       unfreezeScreen();
       SignUpCard.remove();
       overlape.remove();
        
    }


})