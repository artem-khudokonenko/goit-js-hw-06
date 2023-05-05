const liEL = document.querySelectorAll('li.item')
console.log("Number of categories:", liEL.length)
liEL.forEach(element => {
    const text = element.firstElementChild.textContent
    const length = element.lastElementChild.children.length
    console.log("Category",text,"\n",length)
 })

