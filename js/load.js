window.onload = async() => {
    let response = await fetch("./data/data.json");
    let data = await response.json();

    // handles btn active stage toggles
    document.getElementById("btn-weekly").classList.add("btn--active");

    // handles DOM elements population
    document.getElementById("work-current").textContent =
        data[0].timeframes.weekly.current === 1
            ? data[0].timeframes.weekly.current + "hr"
            : data[0].timeframes.weekly.current + "hrs";
    document.getElementById("work-previous").textContent =
        data[0].timeframes.weekly.previous === 1
            ? "Last Week - " + data[0].timeframes.weekly.previous + "hr"
            : "Last Week - " + data[0].timeframes.weekly.previous + "hrs";

    document.getElementById("play-current").textContent =
        data[1].timeframes.weekly.current === 1
            ? data[1].timeframes.weekly.current + "hr"
            : data[1].timeframes.weekly.current + "hrs";
    document.getElementById("play-previous").textContent =
        data[1].timeframes.weekly.previous === 1
            ? "Last Week - " + data[1].timeframes.weekly.previous + "hr"
            : "Last Week - " + data[1].timeframes.weekly.previous + "hrs";

    document.getElementById("study-current").textContent =
        data[2].timeframes.weekly.current === 1
            ? data[2].timeframes.weekly.current + "hr"
            : data[2].timeframes.weekly.current + "hrs";
    document.getElementById("study-previous").textContent =
        data[2].timeframes.daily.previous === 1
            ? "Last Week - " + data[2].timeframes.weekly.previous + "hr"
            : "Last Week - " + data[2].timeframes.weekly.previous + "hrs";

    document.getElementById("exercise-current").textContent =
        data[3].timeframes.weekly.current === 1
            ? data[3].timeframes.weekly.current + "hr"
            : data[3].timeframes.weekly.current + "hrs";
    document.getElementById("exercise-previous").textContent =
        data[3].timeframes.weekly.previous === 1
            ? "Last Week - " + data[3].timeframes.weekly.previous + "hr"
            : "Last Week - " + data[3].timeframes.weekly.previous + "hrs";

    document.getElementById("social-current").textContent =
        data[4].timeframes.weekly.current === 1
            ? data[4].timeframes.weekly.current + "hr"
            : data[4].timeframes.weekly.current + "hrs";
    document.getElementById("social-previous").textContent =
        data[4].timeframes.weekly.previous === 1
            ? "Last Week - " + data[4].timeframes.weekly.previous + "hr"
            : "Last Week - " + data[4].timeframes.weekly.previous + "hrs";

    document.getElementById("self-care-current").textContent =
        data[5].timeframes.weekly.current === 1
            ? data[5].timeframes.weekly.current + "hr"
            : data[5].timeframes.weekly.current + "hrs";
    document.getElementById("self-care-previous").textContent =
        data[5].timeframes.weekly.previous === 1
            ? "Last Week - " + data[5].timeframes.weekly.previous + "hr"
            : "Last Week - " + data[5].timeframes.weekly.previous + "hrs";
};
