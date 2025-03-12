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
    description: "This is a medium length description for submenu 1.",
  },
  {
    title: "Submenu 2",
    url: "/",
    description: "This is a medium length description for submenu 2.",
  },
  {
    title: "Submenu 3",
    url: "/",
    description: "This is a medium length description for submenu 3.",
  },
  {
    title: "Submenu 4",
    url: "/",
    description: "This is a medium length description for submenu 4.",
  },
  {
    title: "Submenu 5",
    url: "/",
    description: "This is a medium length description for submenu 5.",
  },
  {
    title: "Submenu 6",
    url: "/",
    description: "This is a medium length description for submenu 6.",
  },
  {
    title: "Submenu 7",
    url: "/",
    description: "This is a medium length description for submenu 7.",
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
              <div class="megamenu__sub-nav-item-container "><a class="main-nav-link megamenu__sub-nav-item" href="${item.url}">${item.title}</a></div>
              <p class="body-1">${item.description}</p>  
            </li>`
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
