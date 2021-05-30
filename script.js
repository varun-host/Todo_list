var inpText = document.getElementById("inpText");

var ulid = document.querySelector('ul');
// var liid = document.getElementById('liid')

/**  Add button click function */

var btnAdd = document.getElementById("btnAdd");
var btnCancel = document.getElementById("btnCancel");
var btnDelete = document.getElementById("btnDelete");
var btnSort = document.getElementById("btnSort");
btnAdd.addEventListener('click', ()=>{
    if(inpText.value == ""){}
    else{
    let li = document.createElement('li')
    li.innerText = inpText.value
    ulid.appendChild(li)


    // var newli = document.createElement('li');
    // var element = newli.appendChild(document.createTextNode(inpText.value));
    // ulid.appendChild(element);
    
    inpText.value = '';
    
    }
}, false)
/**  Cancel button click function */
btnCancel.addEventListener('click', ()=>{
    inpText.value = '';
    


})
// btnDelete.addEventListener('click', () =>{
 
// })







