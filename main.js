const listItems1 = document.querySelector('.tdlist1')
const input1 = document.querySelector('.textfield1')
const btn1 = document.querySelector('.btn1')

const listItems2 = document.querySelector('.tdlist2')
const input2 = document.querySelector('.textfield2')
const btn2 = document.querySelector('.btn2')

const listItems3 = document.querySelector('.tdlist3')
const input3 = document.querySelector('.textfield3')
const btn3 = document.querySelector('.btn3')



btn1.addEventListener('click', function()
{
var text = input1.value
var li=document.createElement('li')
li.classList.add('list')
li.textContent = text
console.log(input1)


var xbtn = document.createElement('button')

xbtn.classList.add('deletebtn1')
xbtn.textContent = 'X'
li.appendChild(xbtn)
listItems1.appendChild(li)
console.log(listItems1)  
input1.value = '' 

})

listItems1.addEventListener('click', function(e)
{
    if(e.target.classList.contains('deletebtn1'))
    {
        if(confirm("Are you sure you want to delete this to-do?"))
        {
        var li = e.target.parentElement
        listItems1.removeChild(li)
        }
    }
    
})

btn2.addEventListener('click', function()
{
var text = input2.value
var li=document.createElement('li')
li.classList.add('list')
li.textContent = text
console.log(input2)


var xbtn = document.createElement('button')

xbtn.classList.add('deletebtn2')
xbtn.textContent = 'X'
li.appendChild(xbtn)
listItems2.appendChild(li)
console.log(listItems2)  
input2.value = '' 

})

listItems2.addEventListener('click', function(e)
{
    if(e.target.classList.contains('deletebtn2'))
    {
        if(confirm("Are you sure you want to delete this to-do?"))
        {
        var li = e.target.parentElement
        listItems2.removeChild(li)
        }
    }
    
})

btn3.addEventListener('click', function()
{
var text = input3.value
var li = document.createElement('li')
li.classList.add('list')
li.textContent = text
console.log(input3)


var xbtn = document.createElement('button')

xbtn.classList.add('deletebtn3')
xbtn.textContent = 'X'
li.appendChild(xbtn)
listItems3.appendChild(li)
console.log(listItems3)  
input3.value ='' 

})

listItems3.addEventListener('click', function(e)
{
    if(e.target.classList.contains('deletebtn3'))
    {
        if(confirm("Are you sure you want to delete this to-do?"))
        {
        var li = e.target.parentElement
        listItems3.removeChild(li)
        }
    }
    
})

