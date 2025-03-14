const faqGroup = document.querySelectorAll('.faq-group');
const plusIcon = document.querySelector('.fas.fa-plus');

for(let i = 0; i < faqGroup.length; i++){
    faqGroup[i].addEventListener('click',
        function() {
            this.classList.toggle('open');
        }
    )
}

const mobileMenu = document.querySelector('.mobile-menu');
const navBtn = document.querySelector('.hamburger-btn');


navBtn.addEventListener('click', 
    function() {
        mobileMenu.classList.toggle('active');
    }
)

navBtn.addEventListener('click',
    function() {
        if(navBtn.classList.contains('change')){
            navBtn.classList.remove('change');
        } else {
            navBtn.classList.add('change');
        }
    }
)