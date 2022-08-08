const baseUrl = "https://rami-notion-api.fly.dev/api/sync/db/";

const publish = async (btn) => {
    btn.disabled = true;
    btn.innerHTML = "Publishing...";
    btn.classList.add("loading");
    try {
        await fetch(baseUrl + "projects");
        await fetch(baseUrl + "cv-additional");
        btn.innerHTML = "Done!";
        setTimeout(() => {
            btn.innerHTML = "Publish";
            btn.classList.remove("loading");
            btn.disabled = false;
        }, 2000);
    } catch(e) {
        btn.innerHTML = "Error";
        btn.classList.remove("loading");
        setTimeout(() => {
            btn.innerHTML = "Try again";
            btn.disabled = false;
        }, 2000);
    };
}
