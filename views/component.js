export function toggleChkComponent(selector) {
    document.addEventListener('DOMContentLoaded', function() {
        var toggles = document.querySelectorAll(selector);

        toggles.forEach(function(toggle) {
            toggle.addEventListener('click', function() {
                var toggleCont = this.parentElement.querySelector('.card-cont');
                this.classList.toggle('on');
                toggleCont.classList.toggle('on');
            });
        });
    });
}



    // import { toggleChkComponent } from './component.js';
    // toggleChkComponent('.toggleChk');
