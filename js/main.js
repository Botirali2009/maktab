(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').css('top', '0px');
        } else {
            $('.sticky-top').css('top', '-100px');
        }
    });
    
    
    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        items: 1,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        margin: 24,
        dots: true,
        loop: true,
        nav : false,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
})(jQuery);







function toggleSearch() {
    const box = document.getElementById("searchBox");
    box.style.display = box.style.display === "block" ? "none" : "block";
    showHistory();
  }
  
  function handleSearch(value) {
    if (value.trim() && !searchHistory.includes(value)) {
      searchHistory.unshift(value);
      localStorage.setItem("searchHistory", JSON.stringify(searchHistory));
    }
  
    const resultBox = document.getElementById("searchResults");
    resultBox.innerHTML = "";
  
    // Faqat kerakli bloklar ichidan qidiradi
    const elements = document.querySelectorAll(".searchable");
    const results = [];
  
    elements.forEach(el => {
      if (el.textContent.toLowerCase().includes(value.toLowerCase())) {
        results.push({
          id: el.id,
          content: el.innerHTML
        });
      }
    });
  
    if (results.length === 0) {
      resultBox.innerHTML = "<p>Hech narsa topilmadi.</p>";
    } else {
      results.forEach(r => {
        resultBox.innerHTML += `
          <div style="margin-bottom: 10px; padding: 10px; border: 1px solid #ccc;">
            <a href="#${r.id}" style="font-weight: bold;">#${r.id}</a>
            <div>${r.content}</div>
          </div>
        `;
      });
    }
  
    showHistory();
  }
  
  function showHistory() {
    const container = document.getElementById("searchHistory");
    container.innerHTML = "";
    searchHistory.forEach((item, index) => {
      container.innerHTML += `
        <div class="history-item">
          <span>${item}</span>
          <button onclick="deleteHistory(${index})">×</button>
        </div>
      `;
    });
  }
  
  function deleteHistory(index) {
    searchHistory.splice(index, 1);
    localStorage.setItem("searchHistory", JSON.stringify(searchHistory));
    showHistory();
  }
  
  let searchHistory = JSON.parse(localStorage.getItem("searchHistory")) || [];






  document.addEventListener("keydown", function (e) {
    if (e.ctrlKey && e.key === "u") {
      e.preventDefault();
      alert("Kodlarimiz maxfiy 😎");
    }
  });
  
  
  
  document.addEventListener('keydown', function (e) {
    if (
      e.key === "F12" ||
      (e.ctrlKey && e.shiftKey && e.key === "I") ||
      (e.ctrlKey && e.shiftKey && e.key === "J") ||
      (e.ctrlKey && e.key === "U")
    ) {
      e.preventDefault();
      alert("Kodga ruxsat yo‘q 😉");
    }
  });
  

  document.addEventListener("keydown", function (e) {
    if (e.ctrlKey && e.key.toLowerCase() === "u") {
      e.preventDefault();
      alert("Kodlar maxfiy! 😊");
      return false; // bu ham zarur
    }
  });
  