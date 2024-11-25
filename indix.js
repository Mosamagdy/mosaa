


var btn = document.querySelector ('.btn-1')
var inputNaminput = document.getElementById('inputNam')
var inputURLinput = document.getElementById('inputURL')
// var lirrhed = document.querySelector('.lirr')
var prodautList=[];



if(localStorage.getItem('prodautList') !=null )
    {
    prodautList = JSON.parse(localStorage.getItem('prodautList'))
    displayData()
}



btn.addEventListener('click' , function(){

  
  var product ={
    name : inputNaminput.value ,
    URL : inputURLinput.value ,
  }

  
  clarForm()
  prodautList.push(product)
  localStorage.setItem ('prodautList' , JSON.stringify(prodautList))
  displayLast()
  handleInput();


 



  
     
} )


function clarForm(){
    inputNaminput.value =null;
    inputURLinput.value =null;
}


function displayData(){
    let container = '';
    for (let i=0 ; i < prodautList.length ; i++){

        container +=   ` <tr>
        <td>${prodautList[i].name}</td>
        <td>${prodautList[i].URL}</td>
        <td><button  class="b1 px-3"><i class="fa-solid fa-eye"></i>Visit</button></td>
        <td><button onclick='deleteProduct(${i})' class="b2 px-3"><i class="fa-solid fa-trash"></i>Delete</button></td>
       </tr>`
    }
 
    
    document.getElementById('tbody').innerHTML = container;
}
function displayLast(){
    var container = '';

        container =   ` <tr>
        <td>${prodautList[prodautList.length -1].name}</td>
        <td>${prodautList[prodautList.length -1].URL}</td>
        <td><button class="b1 px-3"><i class="fa-solid fa-eye"></i>Visit</button></td>
        <td><button onclick='deleteProduct()'   class="b2 px-3"><i class="fa-solid fa-trash"></i>Delete</button></td>
       </tr>`

 
    document.getElementById('tbody').innerHTML += container;
}

function deleteProduct(index){
    console.log(index);
    
    prodautList.splice(index , 1);
    console.log(prodautList);
    localStorage.setItem('prodautList' , JSON.stringify(prodautList));
    displayData(prodautList) 
    
}


function validateName(){
    var regex = /^[A-Za-z]{2,}$/



   


    if (regex.test(inputNaminput.value)){   
        // console.log('hiiiiiiiii');
        if(inputNaminput.classList.contains('is-invalid')){
            inputNaminput.classList.remove('is-invalid');
        }
        inputNaminput.classList.add('is-valid');
    }
    else{
        // console.log('moooooo');
        inputNaminput.classList.add('is-invalid');

        // handleInput()
        if(inputNaminput.classList.contains('is-valid')){
            inputNaminput.classList.remove('is-valid');

        }   


        // lirrhed.classList.replace( 'd-flex' , 'd-none'); 
        
    }




}



inputNaminput.addEventListener('input', function(){
    validateName();
    
    
});



function validateuURL(){
    var regex = /^(https:\/\/)?(www\.)?[A-Za-z0-9\-\.]+\.[a-z]{2,}\/?$/


    if (regex.test(inputURLinput.value)){

        inputURLinput.classList.add('is-valid');
        // console.log('hiiiiiiiii');
        if(inputURLinput.classList.contains('is-invalid')){
            inputURLinput.classList.remove('is-invalid');
        }
   
    }

    else{
        // console.log('moooooo');
        inputURLinput.classList.add('is-invalid');

        if(inputURLinput.classList.contains('is-valid')){
            inputURLinput.classList.remove('is-valid');
        }
    }
}

inputURLinput.addEventListener('input', function(){
    validateuURL();
});






// const inputField = document.getElementById("input");
// const outputField = document.getElementById("output");

// function handleInput() {
//   const userInput = inputField.value.trim();
  
//   if (userInput === "") {
//     outputField.innerText = "لم يتم إدخال شيء. إليك جملة جاهزة!";
//   } else {
//     outputField.innerText = لقد أدخلت: ${userInput};
//   }
// }


// function  handleInput(){
//     if (inputNaminput === "") {

//         lirrhed.classList.replace('d-none' ,'d-flex')

//        } 

// }
function handleInput() {
    if (inputNaminput.value === "") {
        Swal.fire({
            icon: "error",
            title: "Site Name or Url is not valid, Please follow the rules below :",
            text: "Site name must contain at least 3 characters",
            footer: "Site URL must be a valid one"

          }); 
    }
    if (inputURLinput.value === "") {
        Swal.fire({
            icon: "error",
            title: "Site Name or Url is not valid, Please follow the rules below :",
            text: "Site name must contain at least 3 characters",
            footer: "Site URL must be a valid one"
          }); 
    }
   
         
}
 