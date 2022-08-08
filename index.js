const publish = (btn) => {
    console.log("click")
    btn.disabled = true;
    btn.innerHTML = "Publishing...";
    btn.classList.add("loading");
    setTimeout(() => {
        btn.innerHTML = "Published!";
        setTimeout(() => {
            btn.innerHTML = "Publish";
            btn.classList.remove("loading");
            btn.disabled = false;
        }, 2000);
    }, 5000);
}
