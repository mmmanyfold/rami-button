const baseUrl = "https://rami-notion-api.fly.dev/api/sync/db/";

const publishArchive = async (btn) => {
    btn.disabled = true;
    btn.innerHTML = "Publishing...";
    btn.classList.add("loading");
    try {
        await fetch(baseUrl + "projects");
        await fetch(baseUrl + "cv-additional");
        await fetch(baseUrl + "cv-exhibitions-and-screenings");
        await fetch(baseUrl + "info");
        await fetch(baseUrl + "imprint");
        btn.innerHTML = "Done!";
        setTimeout(() => {
            btn.innerHTML = "Publish Archive";
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

const publishVirtues = async (btn) => {
    btn.disabled = true;
    btn.innerHTML = "Publishing...";
    btn.classList.add("loading");
    try {
        await fetch(baseUrl + "virtues-videos");
        btn.innerHTML = "Done!";
        setTimeout(() => {
            btn.innerHTML = "Publish Virtues";
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
