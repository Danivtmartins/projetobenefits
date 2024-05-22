if (typeof document !== 'undefined') {

document.addEventListener('DOMContentLoaded', function () {
    const categoryBtn = document.querySelectorAll('.categories');
    const categoryCard = document.querySelectorAll('.card-result');
    const hideClass = 'hide';
    const activeClass = 'active';

    categoryBtn.forEach(btn=> {
        btn.addEventListener('click', function () {
    
            updateActiveCategory(btn);
            
            filterItemsByCategory(this.dataset.category);
        });
    });

    function updateActiveCategory(selectedBtn) {
        categoryBtn.forEach(btn => {
            btn.classList.remove(activeClass);
        });

        selectedBtn.classList.add(activeClass);
    }

    function filterItemsByCategory(category) {
        categoryCard.forEach(card => {
            card.classList.remove(hideClass); 

            if (category == 'all') {
                return;
            }
           
            if (card.dataset.category !== category) {
                card.classList.add(hideClass);
            }
        });
    }
});


}
