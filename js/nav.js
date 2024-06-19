fetch('nav.html')
.then(res => res.text())
.then(text => {
    let oldelem = document.querySelector("script#replace_with_navbar");
    let newelem = document.createElement("div");
    newelem.innerHTML = text;
    oldelem.parentNode.replaceChild(newelem,oldelem);

    initializeNavbar();
})

function initializeNavbar(){
    let subMenu = document.getElementById("subMenu");
    
    function admin() {
      subMenu.classList.toggle("open-menu");
    }
    
    const body = document.querySelector("body"),
    nav = document.querySelector("nav"),
    main = document.querySelector("main"),
    modeToggle = document.querySelector(".dark-light"),
    searchToggle = document.querySelector(".searchToggle"),
    sidebarOpen = document.querySelector(".sidebarOpen"),
    siderbarClose = document.querySelector(".siderbarClose");
    
    let getMode = localStorage.getItem("mode");
    if (getMode && getMode === "dark-mode") {
      body.classList.add("dark");
    }
    
    // js code to toggle dark and light mode
    modeToggle.addEventListener("click", () => {
      modeToggle.classList.toggle("active");
      body.classList.toggle("dark");
      
      // js code to keep user selected mode even page refresh or file reopen
      if (!body.classList.contains("dark")) {
        localStorage.setItem("mode", "light-mode");
      } else {
        localStorage.setItem("mode", "dark-mode");
      }
    });
    
    // js code to toggle search box
    searchToggle.addEventListener("click", () => {
      searchToggle.classList.toggle("active");
    });
    
    //   js code to toggle sidebar
    sidebarOpen.addEventListener("click", () => {
      nav.classList.add("active");
    });
    
    body.addEventListener("click", (e) => {
      let clickedElm = e.target;
      
      if (
        !clickedElm.classList.contains("sidebarOpen") &&
        !clickedElm.classList.contains("menu")
        ) {
          nav.classList.remove("active");
        }
      });
      
      // Drop-down button
      
      function toggleDropdown() {
        var dropdown = document.querySelector(".dropdown");
        dropdown.classList.toggle("show");
      }
      
      // Close dropdown when clicking outside
      document.addEventListener("click", function (event) {
        var dropdown = document.querySelector(".dropdown");
        if (!dropdown.contains(event.target)) {
          dropdown.classList.remove("show");
        }
      });
}

