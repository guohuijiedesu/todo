window.onload=function(){
var taskInput=document.querySelector('.todo-input')
var taskUl=document.querySelector('.todo-list')
var allDoneButton=document.querySelector('.iconselectAll')
var allLi=document.getElementsByTagName('li')
var allCheck=document.getElementsByClassName("icon-check")
var clearButton=document.querySelector('.clearButton')
var allButton=document.querySelector('.allButton')
var activeButton=document.querySelector('.activeButton')
var doneButton=document.querySelector('.doneButton')
var footernum=document.querySelector('.footernum')
var secondfooter=document.querySelector('.secondfooter')
var thirdfooter=document.querySelector('.thirdfooter')
var showfooter=document.querySelector('.todo-footer')
startListen()

function startListen(){
    taskInput.addEventListener('keypress',addItem)
    taskUl.addEventListener('click',removeTask)
    taskUl.addEventListener('mouseover',showX)
    taskUl.addEventListener('mouseout',hideX)
    taskUl.addEventListener('click',checkedTasks)
    allDoneButton.addEventListener('click',allDone)
    clearButton.addEventListener('click',clearDone)
    allButton.addEventListener('click',allLI)
    activeButton.addEventListener('click',activeLI)
    doneButton.addEventListener('click',doneLI)
    taskUl.addEventListener('change',changelistInput)
    taskUl.addEventListener('dblclick',contenteditable)
    taskUl.addEventListener('focusout',contentedit)
}
//以下是方法：
//添加的方法：
function addItem(e){
    if(e.keyCode== 13){
        e.preventDefault()
        taskUl.innerHTML+=`<li class="todo-item">
        <div class="todo-item-icon">
            <img class="icon-check" readonly= true src="todomvc/iconCheckNormal.png" alt="">
        </div>
        <div class="todo-item-content">
            <input type="text" readOnly= true value="${taskInput.value}" class="list-input" />
        </div>
        <div class="todo-item-X">
            <img class="icon-X" src="todomvc/iconX.png" alt="">
        </div></li>`
        store()
        taskInput.value=''
    }
    doneItemNum()
    showClearbutton()
    allDonePic()
    zeroHide()
}
//删除按钮的方法
function removeTask(e){
    if (e.target.classList.value=='icon-X'){
        e.target.parentNode.parentNode.remove()
    }
    doneItemNum()
    showClearbutton()
    store() 
    allDonePic()
    zeroHide()
}
//显示隐藏X键
function showX(e){
    if(e.target.className=='todo-item-content'){
                    if(e.target.style.marginRight=='-1px'){
                        return false
                    }else{
                        e.target.parentElement.lastElementChild.firstElementChild.style.visibility='visible'
                    }
    }else if(e.target.className=='todo-item'){
                    if(e.target.lastElementChild.previousElementSibling.style.marginRight=='-1px'){
                        return false
                    }else{
                    e.target.lastElementChild.firstElementChild.style.visibility='visible'}
    }else if((e.target.className=='todo-item-icon')||(e.target.className=='todo-item-X')){
                    if(e.target.parentElement.lastElementChild.previousElementSibling.style.marginRight=='-1px'){
                        return false
                    }else{
                        e.target.parentElement.lastElementChild.firstElementChild.style.visibility='visible'}
    }else if((e.target.className=='icon-check')||(e.target.className=='icon-done')){
        e.target.parentElement.parentElement.lastElementChild.firstElementChild.style.visibility='visible'
    }
}
function hideX(e){
    if(e.target.className=='todo-item'){
        e.target.lastElementChild.firstElementChild.style.visibility='hidden'
    }
    if((e.target.className=='todo-item-icon')||(e.target.className=='todo-item-content')||(e.target.className=='todo-item-X')){
        e.target.parentElement.lastElementChild.firstElementChild.style.visibility='hidden'
    }
}
// 勾选按钮的方法：
function checkedTasks(e){
    if (e.target.classList.value=='icon-check'){
        e.target.className='icon-done'
        e.target.src="todomvc/iconChecked.png"
        e.target.parentElement.nextElementSibling.firstElementChild.style.textDecoration='line-through'
        e.target.parentElement.nextElementSibling.firstElementChild.style.color=' #d9d9d9'
    }else if (e.target.classList.value=='icon-done'){
        e.target.src="todomvc/iconCheckNormal.png"
        e.target.className='icon-check'
        e.target.parentElement.nextElementSibling.firstElementChild.style.textDecoration='none'
        e.target.parentElement.nextElementSibling.firstElementChild.style.color=' #4d4d4d'    
    }
    doneItemNum()
    showClearbutton()
    store() 
    allDonePic()
}
//全选按钮的方法:
function allDone(){
    if(allLi.length-allCheck.length==allLi.length){
        document.querySelectorAll('.icon-done').forEach(function(taskLi){
        taskLi.className='icon-check'
        taskLi.src="todomvc/iconCheckNormal.png"
        taskLi.parentElement.nextElementSibling.firstElementChild.style.textDecoration='none'
        taskLi.parentElement.nextElementSibling.firstElementChild.style.color=' #4d4d4d'
    })
    }else{
        document.querySelectorAll('.icon-check').forEach(function(taskLi){
        taskLi.className='icon-done'
        taskLi.src="todomvc/iconChecked.png"
        taskLi.parentElement.nextElementSibling.firstElementChild.style.textDecoration='line-through'
        taskLi.parentElement.nextElementSibling.firstElementChild.style.color=' #d9d9d9'
    })
    }
    doneItemNum()
    showClearbutton()
    store() 
    allDonePic()
}
//全选按钮的显示：
function allDonePic(){
    if(allLi.length-allCheck.length==allLi.length){
        allDoneButton.src="todomvc/iconSelectAll1.png"
    }
    else{
        allDoneButton.src="todomvc/iconSelectAll.png"
    }
}
//改变listInput内容的方法：
function changelistInput(e){
    if((e.target.className=='list-input')){
        e.target.readOnly= true
        e.target.style.cursor= "default"
        e.target.parentElement.style.border='none'
        e.target.parentElement.style.margin='0'
        e.target.parentElement.style.boxShadow='none'
        e.target.parentElement.nextElementSibling.style.border='none'
        e.target.parentElement.nextElementSibling.style.margin='0'
        e.target.parentElement.nextElementSibling.style.boxShadow='none'
        e.target.parentElement.parentElement.style.borderBottom="1px solid #ededed"
        e.target.parentElement.previousElementSibling.style.visibility='visible'
        if(e.target.parentElement.previousElementSibling.firstElementChild.className=='icon-done'){
            e.target.style.textDecoration='line-through'
            e.target.style.color=' #d9d9d9' 
        e.target.parentNode.parentNode.parentNode.innerHTML=`<style>
        .list-input{color: #d9d9d9;text-decoration: line-through;}
        </style><li class="todo-item">
        <div class="todo-item-icon">
            <img class="icon-done" readonly= true src="todomvc/iconChecked.png" alt="">
        </div>
        <div class="todo-item-content">
            <input type="text" readOnly= true value="${e.target.value}" class="list-input" />
        </div>
        <div class="todo-item-X">
            <img class="icon-X" src="todomvc/iconX.png" alt="">
        </div></li>`
        }else{
            e.target.parentNode.innerHTML=`<input type="text" readOnly= true value="${e.target.value}" class="list-input" />`
        }
        store()
    }
}
//listInput的双击可编辑鼠标为text状态，它失去焦点（点击别的地方）的时候状态不可编辑鼠标为default状态
function contenteditable(e){
    if(e.target.classList.value=='list-input'){
        e.target.style.textDecoration='none'
        e.target.style.color=' #4d4d4d'
        e.target.readOnly= false
        e.target.style.cursor= "text"
        e.target.parentElement.style.border='0.5px solid #999'
        e.target.parentElement.style.borderRightColor='rgba(0, 0, 0, 0.01)'
        e.target.parentElement.style.marginRight='-1px'
        e.target.parentElement.style.boxShadow='2px 0 2px rgba(0, 0, 0, 0.2) inset'
        e.target.parentElement.nextElementSibling.style.border='0.5px solid #999'
        e.target.parentElement.nextElementSibling.style.borderLeftColor='rgba(0, 0, 0, 0.01)'
        e.target.parentElement.nextElementSibling.style.marginLeft='-1px'
        e.target.parentElement.nextElementSibling.style.boxShadow='-2px 0 2px rgba(0, 0, 0, 0.2) inset'
        e.target.parentElement.parentElement.style.borderBottom="none"
        e.target.parentElement.previousElementSibling.style.visibility='hidden'

    }
}
function contentedit(e){
    if(e.target.classList.value=='list-input'){
        if(e.target.parentElement.previousElementSibling.firstElementChild.className=='icon-done'){
            e.target.style.textDecoration='line-through'
        e.target.style.color=' #d9d9d9'
        }
        e.target.readOnly= true
        e.target.style.cursor= "default"
        e.target.parentElement.style.border='none'
        e.target.parentElement.style.margin='0'
        e.target.parentElement.style.boxShadow='none'
        e.target.parentElement.nextElementSibling.style.border='none'
        e.target.parentElement.nextElementSibling.style.margin='0'
        e.target.parentElement.nextElementSibling.style.boxShadow='none'
        e.target.parentElement.parentElement.style.borderBottom="1px solid #ededed"
        e.target.parentElement.previousElementSibling.style.visibility='visible'
    }
}
//footer:
//完成事件的数量（实时改变）的方法：
function doneItemNum(){
    var donenum=allCheck.length;
    footernum.textContent=`${donenum} items left`
}
//footer的四个按钮的方法：
//前三个：All、Active、Completed的方法：
function allLI(){
    document.querySelectorAll('.icon-done').forEach(function(doneLi){
        doneLi.parentElement.parentElement.style.display='flex'
    })
    document.querySelectorAll('.icon-check').forEach(function(checkLi){
        checkLi.parentElement.parentElement.style.display='flex'
    })
    allButton.style.borderColor ='rgba(192, 98, 98, 0.5)'
    activeButton.style.borderColor ='white'
    doneButton.style.borderColor ='white'
}
function activeLI(){
    document.querySelectorAll('.icon-done').forEach(function(doneLi){
        doneLi.parentElement.parentElement.style.display='none'
    })
    document.querySelectorAll('.icon-check').forEach(function(taskLi){
        taskLi.parentElement.parentElement.style.display='flex'
    })
    allButton.style.borderColor ='white'
    activeButton.style.borderColor ='rgba(192, 98, 98, 0.5)'
    doneButton.style.borderColor ='white'
}
function doneLI(){
    document.querySelectorAll('.icon-check').forEach(function(checkLi){
        checkLi.parentElement.parentElement.style.display='none'
    })
    document.querySelectorAll('.icon-done').forEach(function(taskLi){
        taskLi.parentElement.parentElement.style.display='flex'
    })
    allButton.style.borderColor ='white'
    activeButton.style.borderColor ='white'
    doneButton.style.borderColor ='rgba(192, 98, 98, 0.5)'
}
//Clear completed按钮的方法：
function clearDone(){
    document.querySelectorAll('.icon-done').forEach(function(taskLi){
        taskLi.parentElement.parentElement.remove()
    })
    doneItemNum()
    showClearbutton()
    store() 
    allDonePic()
    zeroHide()
}
//显示隐藏Clear completed按钮的方法：
function showClearbutton(){
    if(document.getElementsByClassName("icon-done").length){
        clearButton.style.visibility='visible'
    }else{
        clearButton.style.visibility='hidden'
    }
}

//页面内容改变时存数据给缓存：
function store() {
    window.localStorage.mytasks = taskUl.innerHTML;
}
//判断缓存是否有内容：
function getValues() {
    var storedValues = window.localStorage.mytasks
    if(!storedValues){
        taskUl.innerHTML = ""
        zeroHide()
    }else{
        taskUl.innerHTML = storedValues
    }
}
//InputList无内容时隐藏的内容：
function zeroHide(){
    if(allLi.length==0){
        allDoneButton.style.visibility='hidden'
        showfooter.style.display='none'
        secondfooter.style.display='none'
        thirdfooter.style.display='none'
        footernum.style.display='none'
    }else{
        allDoneButton.style.visibility='visible' 
        showfooter.style.display='flex'
        secondfooter.style.display='flex'
        thirdfooter.style.display='flex'
        footernum.style.display='flex'
    }
}

getValues()
doneItemNum()
}