$('h1').click(function () {
    $(this).text('I was Clicked');
})

// key Press Functions
$('input').eq(0).keypress(function () {
    $('h3').addClass('addRed');
})

$('input').eq(0).keypress(function (event) {
    console.log(event);
})

//which returns keybutton code
$('input').eq(0).keypress(function (event) {
    if (event.which === 32) {
        $('h3').toggleClass('addBlue');
    }
})

//On Event function
$('h1').on('dblclick', function () {
    $(this).toggleClass('addRed')
})

$('h1').on('mouseover', function () {
    $(this).toggleClass('addBlue')
})

//Animation in jquery
$('input').eq(1).on('click', function () {
    $('.container').fadeOut('5000');
})

$('input').eq(1).on('click', function () {
    $('.container').slideUp('5000');
})