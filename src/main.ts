import "./style.scss";
import $ from "jquery";

declare global {
  interface JQuery {
    fadeOutWithVisibility(duration: number, callback?: () => void): JQuery;
    fadeInWithVisibility(duration: number, callback?: () => void): JQuery;
  }
}

$.fn.fadeOutWithVisibility = function (duration, callback) {
  return this.animate(
    {
      opacity: 0,
      // transition: "opacity ease-in-out 0.3s",
    },
    duration,
    function () {
      $(this).css("visibility", "hidden");
      if (typeof callback === "function") callback();
    }
  );
};

$.fn.fadeInWithVisibility = function (duration, callback) {
  // First ensure the element is visible but still at opacity 0
  this.css({
    visibility: "visible",
    opacity: 0,
    // transition: "opacity ease-in-out 0.3s",
  });

  // Then fade in the opacity
  return this.animate(
    {
      opacity: 1,
      // transition: "opacity ease-in-out 0.3s",
    },
    duration,
    function () {
      if (typeof callback === "function") callback();
    }
  );
};

export function render() {
  const header = $(".header");
  const menuButton = $(".menu-button");
  const searchButton = $(".search-button");
  const overlay = $(".megamenu__overlay");
  const menuContent = $(".megamenu__grid.menu");
  const searchContent = $(".megamenu__grid.search");

  $(document).ready(function () {
    // Mobile menu

    //
    let hoverTimeout: number = 0;

    function handleMemuClick() {
      clearTimeout(hoverTimeout);
      searchButton.find(".icon").removeClass("active");
      searchButton.removeClass("active");
      if (menuButton.hasClass("active")) {
        overlay.fadeOutWithVisibility(300);
        menuContent.fadeOutWithVisibility(300);
        header.removeClass("active");
        menuButton.removeClass("active");
        menuButton.find(".icon").removeClass("active");
      } else {
        overlay.fadeInWithVisibility(300);
        menuContent.fadeInWithVisibility(300);
        searchContent.fadeOutWithVisibility(300);

        setTimeout(() => {
          header.addClass("active");
        }, 300);
        menuButton.addClass("active");
        menuButton.find(".icon").addClass("active");
      }
    }

    function handleSearchClick() {
      clearTimeout(hoverTimeout);
      menuButton.find(".icon").removeClass("active");
      menuButton.removeClass("active");
      if (searchButton.hasClass("active")) {
        overlay.fadeOutWithVisibility(300);
        searchContent.fadeOutWithVisibility(300);
        header.removeClass("active");
        searchButton.removeClass("active");
        searchButton.find(".icon").removeClass("active");
      } else {
        overlay.fadeInWithVisibility(300);
        menuContent.fadeOutWithVisibility(300);
        searchContent.fadeInWithVisibility(300);
        setTimeout(() => {
          header.addClass("active");
        }, 300);
        searchButton.addClass("active");
        searchButton.find(".icon").addClass("active");
      }
    }

    // Meny Click
    // Show menu on hover
    menuButton.click(function () {
      console.log("button click");
      handleMemuClick();
    });

    // Search Click
    searchButton.click(function () {
      console.log("button click");
      handleSearchClick();
    });

    // Handle menu item clicks
    $(".megamenu__nav-item").click(function () {
      // Remove active class from all items and sections
      $(".megamenu__nav-item").removeClass("active");
      $(".megamenu__sub-nav-content").removeClass("active");

      // Add active class to clicked item
      $(this).addClass("active");

      // Show corresponding content
      $("#" + $(this).data("content")).addClass("active");

      $(".megamenu__content").scrollTop(0);
    });

    // Show first section by default
    $(".megamenu__nav-item:first").click();

    // Close menu on button click or when clicking outside
    $(".menu-button").click(function (e) {
      console.log("button click");
      e.stopPropagation();
      // $(".megamenu__overlay").fadeToggle(200);
    });
  });
}

render();
