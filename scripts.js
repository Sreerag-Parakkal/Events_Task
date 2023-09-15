let box=document.getElementById("box")

box.addEventListener('mouseover',function(event){
    this.style.background="red"
    console.log(event)
})

box.addEventListener('mouseleave',function(event){
    this.style.background="blue"
    console.log(event)

})