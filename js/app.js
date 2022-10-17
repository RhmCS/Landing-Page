/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 *
 */

const navbarList = document.querySelector("#navbar__list");
build();

// build the nav
for (let i = 1; i <= 4; i++) {
  const li = document.createElement("li");
  const link = document.createElement("a");
  link.setAttribute("href", `#section${i}`);
  link.innerHTML = `Section ${i}`;
  navbarList.appendChild(li);
  li.append(link);
  li.classList.add("navbar__menu");
  link.classList.add("menu__link");
}

// build the HTML Structure
function build() {
  const section = document.createElement("section");
  const div = document.createElement("div");
  const h2 = document.createElement("h2");
  const p = document.createElement("p");
  section.setAttribute("id", "section4");
  section.setAttribute("data-nav", "Section 4");
  div.setAttribute("class", "landing__container");

  const main = document.querySelector("main");
  main.appendChild(section);
  section.appendChild(div);
  const text = document.createTextNode("Section 4");
  h2.appendChild(text);
  div.appendChild(h2);
  const para1 =
    document.createTextNode(`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
fermentum metus faucibus lectus pharetra dapibus. Suspendisse
potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget
lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed
convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla
eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam
nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis
lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a
tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus
vitae elit. Integer nec libero venenatis libero ultricies molestie
semper in tellus. Sed congue et odio sed euismod.`);
  p.appendChild(para1);
  div.append(p);
}

// Add class 'active-class' to section
const sections = document.querySelectorAll('[id^="section"]');
for (let i = 1; i < sections.length; i++) {
  window.addEventListener("scroll", function () {
    if (sections[i].getBoundingClientRect().top < window.innerHeight) {
      sections[i].classList.toggle("active-class");
    }
  });
}

// Scroll to section on link click
const anchor = document.querySelectorAll('a[href^="#"]');
for (let i = 0; i < anchor.length; i++) {
  anchor[i].addEventListener("click", function (e) {
    e.preventDefault();
    const attr = document.querySelector(anchor[i].getAttribute("href"));
    attr.scrollIntoView({
      behavior: "smooth",
    });
  });
}
