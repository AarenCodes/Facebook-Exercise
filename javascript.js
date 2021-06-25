function searchFunction()(){
  var input, filter, ui, li, a, i;
  input= document.getElementsById('myinput');
  filter= input.value.toUpperCase();
  ul= document.getElementById('wrapper');
  li= ul.document.getElementByTagName('li');

for(i=0 ; i< li.length; i++){
  a= li[i].getElementByTagName('a')[0];
  if(a.innerHTML.toUpperCase().indexOf(filter) > -1){
    li[i].style.display= "";
      }

else{
  li[i].style.display='none';

      }
    }

  } 
