let string = "";
let buttons = document.querySelectorAll('.Button');
Array.from(buttons).forEach((button) => {
  button.addEventListener('click', (e) => { // Corrected spelling here
    if(e.target.innerHTML == '='){
       string = eval(string);
       document.querySelector('input').value = string;
    }
     else if(e.target.innerHTML == 'C'){
         string = ""
         document.querySelector('input').value = string;
      }
    else{
      
    
    console.log(e.target);
    string = string + e.target.innerHTML;
    document.querySelector('input').value = string;
      }
  });
});


