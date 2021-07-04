
  form.addEventListener('submit', function(event){

 
    if(document.getElementById('age').value < 18 ){
      
        alert(`Sizin yasiniz  catmir bura girmeye get boyende gelersen gagas`)
        form.style.borderColor = "red";
    }

    else if(document.getElementById('age').value > 18){
        alert("get sellen gire bildin")
    } 
})  




