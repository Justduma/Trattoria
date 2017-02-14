//  open/close popup
var catch_event = document.querySelector('.slaider'),
    popup = document.querySelector('.popup'),
    popup_close_btn = document.querySelector('.popup__close-btn');
var temp_popup_class = '';
catch_event.addEventListener('click', function(event) {
    temp_popup_class = event.target.name;
    if (event.target.name && event.target.tagName == 'BUTTON') {
        event.preventDefault();
        popup.classList.add(event.target.name);
    }
});
popup_close_btn.addEventListener('click', function(event) {
    popup.classList.remove(temp_popup_class);
});

//slaider
var slaider = document.querySelector('.slaider'),
    radio_left = document.querySelector('.slaider__radio--left input'),
    radio_right = document.querySelector('.slaider__radio--right input'),
    field = document.querySelector('.slaider__list');

function addClass(cls) {
    field.classList.remove('slaider-1', 'slaider-2', 'slaider-tb-1',
        'slaider-tb-2', 'slaider-tb-3', 'slaider-mb-1', 'slaider-mb-2',
        'slaider-mb-3', 'slaider-mb-4', 'slaider-mb-5', 'slaider-mb-6');
    field.classList.add(cls);
}
slaider.addEventListener('click', function(event) {
    var number = event.target.getAttribute('data-number');
    if (!number) return;
    var field_width = parseInt(getComputedStyle(slaider).width);
    if (field_width > 900) {
        if (number == 11 || number == 21) {
            addClass('slaider-1')
            radio_left.checked = true;
        }
        if (number == 12 || number == 22) {
            addClass('slaider-2')
            radio_right.checked = true;
        }
        return
    }
    if (field_width <= 900 && field_width > 680) {
        if (number == 11) {
            if (field.classList[1].slice(-1) == 1) return
            addClass('slaider-tb-' + (+field.classList[1].slice(-1) - 1))
        }
        if (number == 12) {
            if (field.classList[1].slice(-1) == 3) return
            addClass('slaider-tb-' + (+field.classList[1].slice(-1) + 1))
        }
        return
    }
    if (field_width <= 680) {
        if (number == 11) {
            if (field.classList[1].slice(-1) == 1) return
            addClass('slaider-mb-' + (+field.classList[1].slice(-1) - 1))
        }
        if (number == 12) {
            if (field.classList[1].slice(-1) == 6) return
            addClass('slaider-mb-' + (+field.classList[1].slice(-1) + 1))
        }
        return
    }
});
