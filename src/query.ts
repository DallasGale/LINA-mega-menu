import $ from "jquery";

export function query() {
  $(document).ready(function () {
    console.log("we have jquery");
    let hoverTimeout: number;

    // Show menu on hover
    $(".nav-container").hover(
      function () {
        clearTimeout(hoverTimeout);
        $(".megamenu-overlay").fadeIn(200);
      },
      function () {
        hoverTimeout = setTimeout(function () {
          $(".megamenu-overlay").fadeOut(200);
        }, 300);
      }
    );

    // Handle menu item clicks
    $(".menu-item").click(function () {
      // Remove active class from all items and sections
      $(".menu-item").removeClass("active");
      $(".content-section").removeClass("active");

      // Add active class to clicked item
      $(this).addClass("active");

      // Show corresponding content
      $("#" + $(this).data("content")).addClass("active");
    });

    // Show first section by default
    $(".menu-item:first").click();

    // Close menu on button click or when clicking outside
    $(".menu-button").click(function (e) {
      console.log("button click");
      e.stopPropagation();
      $(".megamenu-overlay").fadeToggle(200);
    });
  });
}
