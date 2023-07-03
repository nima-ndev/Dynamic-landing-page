const body=document.querySelector('body');
const userName=document.getElementById('name');
const time=document.getElementById('time');
const good=document.getElementById('good');
const focus=document.getElementById('focus');

setTime();
setGood();

userName.addEventListener('keypress',saveName);   //this is for entering name
userName.addEventListener('blur',saveName);  
localStorage.getItem('name')=="" ? userName.value='[Enter name]' : userName.value=localStorage.getItem('name');

focus.addEventListener('keypress',saveFocus);   //this is for entering focus subject
focus.addEventListener('blur',saveFocus);
localStorage.getItem('focus')=="" ? focus.value ='[Enter focus]' : focus.value=localStorage.getItem('focus');