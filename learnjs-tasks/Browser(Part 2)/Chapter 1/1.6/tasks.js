// Task 1:
const divEl = document.querySelector("[data-widget-name]");
alert(divEl.dataset.widgetName);

//Task 2:
const links = document.querySelectorAll('a');
for (const link of links) {
    const href = link.getAttribute('href');
    alert(link)
    if (!href) {
        continue;
    }
    if (!href.includes("://")) {
        continue;
    }
    if (href.startsWith("http://internal.com")) {
        continue;
    }
    link.style.color = 'orange'
}