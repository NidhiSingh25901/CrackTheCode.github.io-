function submit(){
    let x=document.getElementById("text").Value;
    let y='2501';
    console.log(x);
    if(x==(y)){
        document.getElementById('screen').value='Code Cracked';
        console.log("correct");
        console.log(x);
    }
    else{
        document.getElementById('screen').value='Wrong Code';
    }

}