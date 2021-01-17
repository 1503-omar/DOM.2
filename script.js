let btnplus = document.getElementsByClassName("add")
for( let i=0; i<btnplus.length; i++){
    btnplus[i].addEventListener( "click", function(){
        btnplus[i].nextElementSibling.innerHTML++;
        somme()
    })
}
let btnminus = document.querySelectorAll(".minus")
for( let btn of btnminus){
    btn.addEventListener( "click" , function(){
        if( btn.previousElementSibling.innerHTML > 0){
            btn.previousElementSibling.innerHTML--;
            somme()
        }
    })
}
function somme(){
    let price = document.getElementsByClassName("price")
    let qte = document.getElementsByClassName("qte")
    let sum = 0
   
        sum += price.value * qte
    
    return document.getElementById("totalp").innerHTML = "Shopping bag total :  $" + sum
}




let heart = document.getElementsByClassName("fa-heart");

for(let i of heart){
    i.addEventListener("click", function()
    {if(i.style.color=== 'red'){
        i.style.color='black';
    }else{i.style.color= 'red'
    // i.classList.toggle('red');
   }  
    });

}
let heart = document.getElementsByClassName("fa-trash");
i.addEventListener("click", function(){
for(let i of heart){
qte=0
price=0
    }
});

