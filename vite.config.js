import { defineConfig } from "vite";
import { createHtmlPlugin } from "vite-plugin-html";

// Create your menu data
const forNewsrooms = [
  {
    title: "Submenu 1",
    url: "/",
    children: [
      { title: "Category 1", url: "/products/cat1" },
      { title: "Category 2", url: "/products/cat2" },
    ],
  },
  {
    title: "Submenu 2",
    url: "/",
    children: [
      { title: "Category 1", url: "/products/cat1" },
      { title: "Category 2", url: "/products/cat2" },
    ],
  },
  {
    title: "Submenu 3",
    url: "/",
    children: [
      { title: "Category 1", url: "/products/cat1" },
      { title: "Category 2", url: "/products/cat2" },
    ],
  },
  {
    title: "Submenu 4",
    url: "/",
    children: [
      { title: "Category 1", url: "/products/cat1" },
      { title: "Category 2", url: "/products/cat2" },
    ],
  },
  {
    title: "Submenu 5",
    url: "/",
    children: [
      { title: "Category 1", url: "/products/cat1" },
      { title: "Category 2", url: "/products/cat2" },
    ],
  },
  {
    title: "Submenu 6",
    url: "/",
    children: [
      { title: "Category 1", url: "/products/cat1" },
      { title: "Category 2", url: "/products/cat2" },
    ],
  },
];

const whatWeDo = [
  {
    title: "Submenu 1",
    url: "/",
  },
  {
    title: "Submenu 2",
    url: "/",
  },
  {
    title: "Submenu 3",
    url: "/",
  },
  {
    title: "Submenu 4",
    url: "/",
  },
  {
    title: "Submenu 5",
    url: "/",
  },
  {
    title: "Submenu 6",
    url: "/",
  },
  {
    title: "Submenu 1",
    url: "/",
  },
  {
    title: "Submenu 2",
    url: "/",
  },
  {
    title: "Submenu 3",
    url: "/",
  },
  {
    title: "Submenu 4",
    url: "/",
  },
  {
    title: "Submenu 5",
    url: "/",
  },
  {
    title: "Submenu 6",
    url: "/",
  },
];

// Generate HTML for menu
function generateListWithChildren(items) {
  return `
      ${items
        .map(
          (item) => `
        <li class="megamenu__sub-nav-cell ${item.hasChildren ? "has-children" : ""}">
          <h3 class="body-2">Sub-title.</h3>
            <ul class="megamenu__children">
              ${item.children
                .map(
                  (child) =>
                    `<li class="megamenu__sub-nav-item-container"><a class="main-nav-link megamenu__sub-nav-item" href="${child.url}">${child.title}</a></li>`
                )
                .join("")}
            </ul>
          
        </li>
      `
        )
        .join("")}
  `;
}
function generateList(items) {
  return `
      ${items
        .map(
          (item) =>
            `<li class="megamenu__sub-nav-cell">
              <div class="megamenu__sub-nav-item-container "><a class="main-nav-link megamenu__sub-nav-item" href="${item.url}">${item.title}</a></div></li>`
        )
        .join("")}
  `;
}

export default defineConfig({
  plugins: [
    createHtmlPlugin({
      minify: true,
      inject: {
        data: {
          whatWeDo: generateList(whatWeDo),
          forNewsrooms: generateListWithChildren(forNewsrooms),
          linaMovement: generateList(whatWeDo),
          joinTheMovement: generateList(whatWeDo),
          becomeASupporter: generateList(whatWeDo),
        },
      },
    }),
  ],
  build: {
    outDir: "dist",
  },
});
