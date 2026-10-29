const orderBtn = document.getElementById("orderBtn");
const orderMessage = document.getElementById("orderMessage");

orderBtn.addEventListener("click", function() {
    orderMessage.textContent = "Thank you! Your order is coming soon!";
    orderBtn.textContent = "Order Requested!";
    orderBtn.disabled = true;
});
const filterButtons = document.querySelectorAll(".filter-btn");
const menuItems = document.querySelectorAll(".menu-item");
const searchInput = document.getElementById("searchInput");

filterButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        const filter = button.dataset.filter;
        searchInput.value = "";
        

        menuItems.forEach(function(item) {
            if (filter === "all") {
                item.style.display = "block";
            } else if (item.classList.contains(filter)) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });
    });
});


searchInput.addEventListener("input", function() {
    const searchText = searchInput.value.toLowerCase();

    menuItems.forEach(function(item) {
        const itemName = item.textContent.toLowerCase();

        if (itemName.includes(searchText)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
});