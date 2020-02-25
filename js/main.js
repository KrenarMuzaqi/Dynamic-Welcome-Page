const time = document.getElementById('time'),
 greeting = document.getElementById('greeting'),
 name = document.getElementById('name'),
 focus = document.getElementById('focus'),
 body = document.body;

 const showAmPm = true;

 function showTime(){
     let today = new Date(),
     hour = today.getHours(),
     min = today.getMinutes(),
     sec = today.getSeconds();

     const amPm = hour >= 12 ? 'PM' : 'AM';

     hour = hour % 12 || 12;

     time.innerHTML = `${addZero(hour)}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${showAmPm ? amPm : ''}`;

     setTimeout(showTime, 1000);
 }

 function addZero(n){
     return (parseInt(n, 10) < 10 ? '0': '') + n;
 }


 function setBgGr(){

     let today = new Date(),
     hour = today.getHours();

     if(hour < 12){
         
         body.classList.add('morning');
         greeting.textContent = 'Good Morning, ';
     }else if(hour < 18){
         body.classList.add('afternoon');
         greeting.textContent = 'Good Afternoon, ';
     }else {
         body.classList.add('evening');
         greeting.textContent = 'Good Evening, ';
         
     }
 }


 function setName(e){
     if(e.type === 'keypress'){
        if(e.which == 13 || e.keyCode == 13){
            localStorage.setItem('name', e.target.innerText);
            name.blur();
        }
     }else{
        localStorage.setItem('name', e.target.innerText);
     }
 }

 function getName(){
     if(localStorage.getItem('name') === null){
         name.textContent = '[Enter Name]';
     }else {
         name.textContent = localStorage.getItem(name);
     }
 }

 function getFocus(){
    if(localStorage.getItem('focus') === null){
        focus.textContent = '[Enter Focus]';
    }else {
        focus.textContent = localStorage.getItem(focus);
    }
}

function setFocus(e){
    if(e.type === 'keypress'){
       if(e.which == 13 || e.keyCode == 13){
           localStorage.setItem('focus', e.target.innerText);
           focus.blur();
       }
    }else{
       localStorage.setItem('focus', e.target.innerText);
    }
}

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);

focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);


 showTime();
 setBgGr();
 getName();
 getFocus();