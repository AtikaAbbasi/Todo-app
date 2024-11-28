

//////XXXX=======XXXXXX----TODO-APP----XXXXX=======/////

var ntask = document.getElementById("ntask")
var ul = document.getElementById("ul")


function addi(){
    if(ntask.value === ""){
alert("please enter your task")
    }
else{
    var li = document.createElement("li")
    var  linote =document.createTextNode(ntask.value)
    li.setAttribute("class", "node")
    li.appendChild(linote)


// var eBtn = document.createElement("button")
// var eBtnTx = document.createTextNode("Edit")
// eBtn.appendChild(eBtnTx)
// eBtn.setAttribute("onclick", "editTx(this)")
// eBtn.setAttribute("class","but1")
// li.appendChild(eBtn)




var eBtn = document.createElement("button")
 var icon2 = document.createElement("i")
icon2.className = "fa-solid fa-pen"
eBtn.appendChild(icon2)
eBtn.setAttribute("onclick", "editTx(this)")
eBtn.setAttribute("class","but1")
li.appendChild(eBtn)


/////////////////////

// var delbtn = document.createElement("button");
// var delbtntx = document.createTextNode('delete')
// delbtn.appendChild(delbtntx)
// delbtn.setAttribute("onclick","deletx(this)")
// delbtn.setAttribute("class", "but2")
// li.appendChild(delbtn)


var delbtn = document.createElement("button");
var icon = document.createElement("i")
icon.className = "fa-solid fa-delete-left"
delbtn.appendChild(icon)
delbtn.setAttribute("onclick","deletx(this)")
delbtn.setAttribute("class", "but2")
li.appendChild(delbtn)


ul.appendChild(li)
ntask.value = ""
}

}

function dele() {
    ul.innerHTML = ""
}

function editTx(eBtn){
var oldv = eBtn.parentNode.firstChild.nodeValue;
var newvalue = prompt("Enter your task",oldv)

eBtn.parentNode.firstChild.nodeValue = newvalue

} 

function deletx(delbtn){
delbtn.parentNode.remove()
}