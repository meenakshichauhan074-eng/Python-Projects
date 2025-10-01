var x = $('h1');

x.css('color', 'white');
x.css('background', 'yellow')

var head = {
    "color": "white",
    "background": "blue",
    "border": "5px solid green"
}

x.css(head)

// For list items

var listitem = $('li');
listitem.css('color', 'blue')

// if want to select only one item
listitem.eq(0).css('color', 'orange')

// if want to select last item in a list
listitem.eq(-1).css('color', 'green')

// if want to change text
x.text("BRAND NEW HTML!!!")

// if want to change html 
x.html("<em>BRAND</em> New HTML!!!")

// if we want to grab attribute
var input = $('input')

input.eq(1).attr('type', 'checkbox')

// if we want to change value of an input
input.eq(0).val('My New Value here')

// if want to add class to an element
x.addClass('addRed')

// if we want to remove class from an element
x.removeClass('addRed')

// if we dont want add or remove class we use toggle class
x.toggleClass('addBlue')

