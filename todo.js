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
}
//以下是方法：
//完成事件的数量的方法：
function doneItemNum(){
    var donenum=allCheck.length;
    footernum.textContent=`${donenum} items left`
    footernum.parentElement.style.display='flex'
    secondfooter.style.display='block'
    thirdfooter.style.display='block'
}
//显示隐藏Clear completed按钮的方法：
function showClearbutton(){
    if(document.getElementsByClassName("icon-done").length){
        clearButton.style.visibility='visible'
    }else{
        clearButton.style.visibility='hidden'
    }
    
}
//添加的方法：
function addItem(e){
    if(e.keyCode== 13){
        var newTask=taskInput.value
        let li=document.createElement('li')
        li.className='todo-item'
        li.innerHTML=`
        <div class="todo-item-icon">
            <img class="icon-check" src="todomvc/iconCheckNormal.png" alt="">
        </div>
        <div class="todo-item-content"><input type="text" value="${newTask}" class="list-input" /></div>
        <div class="todo-item-X">
            <img class="icon-X" src="todomvc/iconX.png" alt="">
        </div>`
        taskUl.appendChild(li)
        taskInput.value=''
        e.preventDefault()
    }
    doneItemNum()
    showClearbutton()
}
//删除按钮的方法
function removeTask(e){
    if (e.target.classList.value=='icon-X'){
        e.target.parentNode.parentNode.remove()
    }
    doneItemNum()
    showClearbutton()
}
//显示隐藏X键
function showX(e){
    if((e.target.className=='todo-item')){
        e.target.lastElementChild.style.visibility='visible'
    }
}
function hideX(e){
    if(e.target.className=='todo-item'){
        e.target.lastElementChild.style.visibility='hidden'
    }
}
// 勾选按钮的方法：
function checkedTasks(e){
    if (e.target.classList.value=='icon-check'){
        e.target.className='icon-done'
        e.target.src="todomvc/iconChecked.png"
        e.target.parentElement.nextElementSibling.firstChild.style.textDecoration='line-through'
        e.target.parentElement.nextElementSibling.firstChild.style.color=' #d9d9d9'
    }else if (e.target.classList.value=='icon-done'){
        e.target.src="todomvc/iconCheckNormal.png"
        e.target.className='icon-check'
        e.target.parentElement.nextElementSibling.firstChild.style.textDecoration='none'
        e.target.parentElement.nextElementSibling.firstChild.style.color=' #4d4d4d'
    }
    doneItemNum()
    showClearbutton()
    
}
//全选按钮的方法
function allDone(){
    if(allLi.length-allCheck.length>1){
        document.querySelectorAll('.icon-done').forEach(function(taskLi){
            taskLi.className='icon-check'
        taskLi.src="todomvc/iconCheckNormal.png"
        taskLi.parentElement.nextElementSibling.firstChild.style.textDecoration='none'
        taskLi.parentElement.nextElementSibling.firstChild.style.color=' #4d4d4d'
    })
    }else{
        document.querySelectorAll('.icon-check').forEach(function(taskLi){
        taskLi.className='icon-done'
        allDoneButton.src="todomvc/iconSelectAll1.png"
        taskLi.src="todomvc/iconChecked.png"
        taskLi.parentElement.nextElementSibling.firstChild.style.textDecoration='line-through'
        taskLi.parentElement.nextElementSibling.firstChild.style.color=' #d9d9d9'
    })
    }
    doneItemNum()
    showClearbutton()
}
//footer的四个按钮的方法：
function clearDone(){
    document.querySelectorAll('.icon-done').forEach(function(taskLi){
        taskLi.parentElement.parentElement.remove()
    })
    doneItemNum()
    showClearbutton()
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
}