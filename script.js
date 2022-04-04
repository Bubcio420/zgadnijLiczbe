var wylosowanaliczba=Math.floor(Math.random()*100)+1;
var iloscProb=0
function sprawdzLiczbe(){
    iloscProb++;
    dane=document.getElementById('liczba')
    if(dane.value==wylosowanaliczba){
        alert("Wygrałeś. Ilość prób to "+iloscProb)
    }else if(dane.value<wylosowanaliczba){
        alert("Za mała liczba")
    }else{
        alert("Za duża liczba")
    }
}