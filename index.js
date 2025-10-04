const baseUrl = "https://rami-notion-api.fly.dev/api/sync/db/";

const publishArchive = async (btn) => {
    btn.disabled = true;
    btn.innerHTML = "Publishing...";
    btn.classList.add("loading");
    try {
        await Promise.all([
            fetch(baseUrl + "projects"),
            fetch(baseUrl + "cv-additional"),
            fetch(baseUrl + "cv-exhibitions-and-screenings"),
            fetch(baseUrl + "info"),
            fetch(baseUrl + "imprint"),
            fetch(baseUrl + "pages")
        ])
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
        await Promise.all([
            fetch(baseUrl + "virtues-videos"),
            fetch(baseUrl + "virtues-about"),
            fetch(baseUrl + "virtues-external-links")
        ])
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
