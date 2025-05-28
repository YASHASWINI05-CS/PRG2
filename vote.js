function vote(){
    var name=document.getElementById("name").value;
    var age=document.getElementById("age").value;
    var res=document.getElementById("res");
if(age>=18)
  {
    res.innerHTML="your are eligible";
  }
    else{
       res.innerHTML="you are not eligible";
    }

}