
function setTime(){  
    const date=new Date();
    let hours=date.getHours()>12 ? date.getHours()-12 : date.getHours(); //converting to 12Hours model
    time.textContent=`${hours}:${date.getMinutes()}:${date.getSeconds()<10 ? 0 : ""}${date.getSeconds()} ${date.getHours()>12 ? "PM" : "AM"}`;  //outputing current time
    setTimeout(setTime,1000);
}
function setGood(){ //setting the massage and background
    const date=new Date();
    if(date.getHours()<12){ 
        good.textContent="good morning";
        body.style="background-image: url('https://i.ibb.co/7vDLJFb/morning.jpg');";
    }
    else if(date.getHours()<18){
        good.textContent="good afternoon";
        body.style=`background-image: url('https://i.ibb.co/3mThcXc/afternoon.jpg');
        color: rgb(255, 255, 255);`;
        userName.style.color='white';
        focus.style.color='white';
    }
    else{
        console.log('biaaaaaaaaaaa');
        good.textContent="good evening";
        body.style=`background-image: url('https://i.ibb.co/924T2Wv/night.jpg');
        color: rgb(255, 255, 255);`;
        body.style.color='white';
        userName.style.color='white';
        focus.style.color='white';
    };
    // body.style=`background-image: url('https://i.ibb.co/924T2Wv/night.jpg');
    // color: rgb(255, 255, 255);`;
}

function saveName(value){
    // console.dir(value);
    if(value.type=="keypress" && value.which==13){
        localStorage.setItem("name",userName.value);
        userName.blur();
    }
    else{
        localStorage.setItem("name",userName.value);
    }
}
function saveFocus(value){
    // console.dir(value);
    if(value.type=="keypress" && value.which==13){
        localStorage.setItem("focus",focus.value);
        focus.blur();
    }
    else{
        localStorage.setItem("focus",focus.value);
    }
}
