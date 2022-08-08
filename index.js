const publish = (element) => {
    element.innerHTML = "Publishing...";
    element.classList.add("loading");
    setTimeout(() => {
        element.innerHTML = "Published!";
        setTimeout(() => {
            element.innerHTML = "Publish";
            element.classList.remove("loading");
        }, 2000);
    }, 5000);
}
