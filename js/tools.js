// Global Variables
let mutuallyExclusiveButtons = document.querySelectorAll('.mutuallyExclusiveButtons')

// Fundamental Functions
const getAllSiblings = element => {
    let elements = [element.parentNode.firstElementChild]
    while( elements[elements.length - 1].nextElementSibling){
        elements.push(elements[elements.length - 1].nextElementSibling)
    }
    return elements
}

const getAllChildElements = element => {
    let elements = [element.firstElementChild]
    while( elements[elements.length - 1].nextElementSibling ){
        elements.push(elements[elements.length - 1].nextElementSibling)
    }
    return elements
}

const changePropertyOfMany = (group, property, value) => {
    if(group.tagName == 'DIV'){ group = getAllChildElements(group) }
    group.forEach(function(e){e.style[property] = value})
}

const changePropertyOfOne = (element, property, value) => {
    element.style[property] = value
}

const changeBorderProperty = (element, target) => {
    if (element.style.backgroundColor == 'lightgreen'){
        let children = getAllChildElements(target)
        children.forEach(function(e){e.style.border = 'none'})
        element.style.backgroundColor = 'revert'
    } else {
        let children = getAllChildElements(target)
        children.forEach(function(e){e.style.border = '1px solid red'})
        element.style.backgroundColor = 'lightgreen'
    }
}

const showActive = element => {
    getAllSiblings(element).forEach(function(e){e.style.backgroundColor = 'revert'})
    element.style.backgroundColor = 'lightgreen'
}

const adjustAttributeValue = (element, attribute, increase=true) => {
    if( element.style[attribute] != ''){
        let value = parseInt(element.style[attribute].slice(0,-2))
        element.style[attribute] = increase ? `${value+=1}px` : `${value-=1}px`
    }else{
        element.style[attribute] = 0
        adjustAttributeValue(element, attribute, increase)
    }
}

const adjustAttributeValueOfMany = (group, attribute, increase=true) => {
    if(group.tagName == 'DIV'){ group = getAllChildElements(group) }
    group.forEach(e=>adjustAttributeValue(e, attribute, increase))
}

const incrementCount = button => {
    button.parentElement.firstElementChild.firstElementChild.innerText++
}

const decrementCountToZero = button => {
    let count = button.parentElement.firstElementChild.firstElementChild.innerText
    count > 0 && button.parentElement.firstElementChild.firstElementChild.innerText--
}

const decrementCountBelowZero = button => {
    button.parentElement.firstElementChild.firstElementChild.innerText--
}

// Event Listeners

mutuallyExclusiveButtons.forEach(function(e){
    let children = getAllChildElements(e)
    children.forEach(function(e){
        e.addEventListener('click', function(){
            showActive(e)
        })
    })
})