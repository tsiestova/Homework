// *************************** task 1****************************

$('a [href^="https://"]').attr('target', '_blank');


// *************************** task 2 ************************

$('h2.head').css('background-color', 'green').find('.inner').css('font-size', '35px');


// *************************** task 3 ************************

$('h3').each(function (index, element) {
    $(element).next('div').insertBefore($(element));
});

// *************************** task 4 ************************

let count = 0;

$('.checkbox').on('change', function (event) {
    if(event.target.checked) {
        count++;
    } else {
        count--;
    }
    if(count >= 3) {
        $('.checkbox').attr('disabled', 'true');
    }
});