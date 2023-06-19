var p1=prompt("Enter Player 1 name");
var p2=prompt("Enter Player 2 name");
document.querySelectorAll("p")[0].innerHTML=p1;
document.querySelectorAll("p")[1].innerHTML=p2;

function roll(){
    var c1=Math.random();
    var c2=Math.random();
    c1=Math.floor(c1*6)+1;
    c2=Math.floor(c2*6)+1;

    if(c1==c2){
    document.getElementsByTagName("h1")
    }
    var i11="images/dice"+c1+".png";
    var i22="images/dice"+c2+".png";

    document.querySelectorAll("img")[0].setAttribute("src",i11);
    document.querySelectorAll("img")[1].setAttribute("src",i22);
    
    if(c1>c2)document.querySelector("h1").innerHTML=p1+" wins";
    if(c2>c1)document.querySelector("h1").innerHTML=p2+" wins";
    if(c1==c2)document.querySelector("h1").innerHTML="Draw !";
}
