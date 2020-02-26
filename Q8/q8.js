var input=document.getElementById('input')
var color=document.getElementById('color')
var button=document.getElementById('add')
var list=document.getElementById('list')
button.onclick=function add() {
  if(color.value==='red'){
    var node=document.createElement('LI')
    var textnode= document.createTextNode(input.value)
    node.appendChild(textnode)
    node.classList.add(color.value)
    document.getElementById('list').appendChild(node)
  }else if(color.value==='blue'){
    var node=document.createElement('LI')
    var textnode= document.createTextNode(input.value)
    node.appendChild(textnode)
    node.classList.add(color.value)
    document.getElementById('list').appendChild(node)
  }else if(color.value==='yellow'){
    var node=document.createElement('LI')
    var textnode= document.createTextNode(input.value)
    node.appendChild(textnode)
    node.classList.add(color.value)
    document.getElementById('list').appendChild(node)
  }else{
    alert('Color should be either red, blue or yellow')
  }
}