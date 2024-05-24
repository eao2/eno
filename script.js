document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); 

        const searchInput = document.getElementById('searchInput');
        const searchTerm = searchInput.value.toLowerCase(); 

        const gameItems = document.querySelectorAll('.game-item');

        gameItems.forEach(function(item) {
            const gameNameElement = item.querySelector('li'); 
            if (gameNameElement) { 
                const gameName = gameNameElement.textContent.toLowerCase(); 
                
                if (gameName.includes(searchTerm)) {
                    item.style.display = 'block'; 
                } else {
                    item.style.display = 'none'; 
                }
            }
        });
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const categoryLinks = document.querySelectorAll('#categories a');

    categoryLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault(); 

            const selectedCategory = link.dataset.category; 

            filterGames(selectedCategory); 
        });
    });

    function filterGames(category) {
        const gameItems = document.querySelectorAll('.game-row ul');

        gameItems.forEach(function(item) {
            const gameCategory = item.dataset.category; 

            
            if (gameCategory === category || category === 'all') {
                item.style.display = 'block'; 
            } else {
                item.style.display = 'none'; 
            }
        });
    }
});
document.addEventListener("DOMContentLoaded", function() {
    const categoryTabs = document.getElementById('category-tabs');
    const gameItems = document.querySelectorAll('.game-item');

    categoryTabs.addEventListener('click', function(event) {
        if (event.target.tagName === 'A') {
            const category = event.target.dataset.category;
            filterGames(category);
        }
    });

    function filterGames(category) {
        gameItems.forEach(item => {
            const itemCategory = item.dataset.category;
            if (category === 'all' || category === itemCategory) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    }
});
