async function getData() {
    let response = await fetch("./data/data.json");
    let data = await response.json();
    document.getElementById("work-current").textContent = data[0].timeframes.weekly.current + "hrs";
    document.getElementById("work-previous").textContent = "Last week - " + data[0].timeframes.weekly.previous + "hrs";
    document.getElementById("play-current").textContent = data[1].timeframes.weekly.current + "hrs";
    document.getElementById("play-previous").textContent = "Last week - " + data[1].timeframes.weekly.previous + "hrs";
    document.getElementById("study-current").textContent = data[2].timeframes.weekly.current + "hrs";
    document.getElementById("study-previous").textContent = "Last week - " + data[2].timeframes.weekly.previous + "hrs";
    document.getElementById("exercise-current").textContent = data[3].timeframes.weekly.current + "hrs";
    document.getElementById("exercise-previous").textContent = "Last week - " + data[3].timeframes.weekly.previous + "hrs";
    document.getElementById("social-current").textContent = data[4].timeframes.weekly.current + "hrs";
    document.getElementById("social-previous").textContent = "Last week - " + data[4].timeframes.weekly.previous + "hrs";
    document.getElementById("self-care-current").textContent = data[5].timeframes.weekly.current + "hrs";
    document.getElementById("self-care-previous").textContent = "Last week - " + data[5].timeframes.weekly.previous + "hrs";
}

getData()


