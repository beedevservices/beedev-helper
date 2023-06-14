// Global Variables
let mutually_exclusive_buttons = document.querySelectorAll('.mutually_exclusive_buttons')

// Fundamental Functions
const get_all_siblings = element => {
    let elements = [element.parentNode.firstElementChild]
    while( elements[elements.length - 1].nextElementSibling){
        elements.push(elements[elements.length - 1].nextElementSibling)
    }
    return elements
}

const get_all_child_elements = element => {
    let elements = [element.firstElementChild]
    while( elements[elements.length - 1].nextElementSibling ){
        elements.push(elements[elements.length - 1].nextElementSibling)
    }
    return elements
}

const change_property_of_many = (group, property, value) => {
    if(group.tagName == 'DIV'){ group = get_all_child_elements(group) }
    group.forEach(function(e){e.style[property] = value})
}

const change_property_of_one = (element, property, value) => {
    element.style[property] = value
}

const change_border_property = (element, target) => {
    if (element.style.backgroundColor == 'lightgreen'){
        let children = get_all_child_elements(target)
        children.forEach(function(e){e.style.border = 'none'})
        element.style.backgroundColor = 'revert'
    } else {
        let children = get_all_child_elements(target)
        children.forEach(function(e){e.style.border = '1px solid red'})
        element.style.backgroundColor = 'lightgreen'
    }
}

const show_active = element => {
    get_all_siblings(element).forEach(function(e){e.style.backgroundColor = 'revert'})
    element.style.backgroundColor = 'lightgreen'
}

const adjust_attribute_value = (element, attribute, increase=true) => {
    if( element.style[attribute] != ''){
        let value = parseInt(element.style[attribute].slice(0,-2))
        element.style[attribute] = increase ? `${value+=1}px` : `${value-=1}px`
    }else{
        element.style[attribute] = 0
        adjust_attribute_value(element, attribute, increase)
    }
}

const adjust_attribute_value_of_many = (group, attribute, increase=true) => {
    if(group.tagName == 'DIV'){ group = get_all_child_elements(group) }
    group.forEach(e=>adjust_attribute_value(e, attribute, increase))
}

const increment_count = button => {
    button.parentElement.firstElementChild.firstElementChild.innerText++
}

const decrement_count_to_zero = button => {
    let count = button.parentElement.firstElementChild.firstElementChild.innerText
    count > 0 && button.parentElement.firstElementChild.firstElementChild.innerText--
}

const decrement_count_below_zero = button => {
    button.parentElement.firstElementChild.firstElementChild.innerText--
}

// Event Listeners

mutually_exclusive_buttons.forEach(function(e){
    let children = get_all_child_elements(e)
    children.forEach(function(e){
        e.addEventListener('click', function(){
            show_active(e)
        })
    })
})