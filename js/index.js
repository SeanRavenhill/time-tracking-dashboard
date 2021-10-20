const btnDailyToggle = document.getElementById("btn-daily");
const btnWeeklyToggle = document.getElementById("btn-weekly");
const btnMonthlyToggle = document.getElementById("btn-monthly");

document
	.getElementById("btn-daily")
	.addEventListener("click", async function () {
		let response = await fetch("./data/data.json");
		let data = await response.json();

		// handles btn active stage toggles
		if (btnDailyToggle.className === "btn btn-daily") {
			btnDailyToggle.classList.add("btn--active");
			btnWeeklyToggle.classList.remove("btn--active");
			btnMonthlyToggle.classList.remove("btn--active");
		}

		// handles DOM elements population
		document.getElementById("work-current").textContent =
			data[0].timeframes.daily.current === 1
				? data[0].timeframes.daily.current + "hr"
				: data[0].timeframes.daily.current + "hrs";
		document.getElementById("work-previous").textContent =
			data[0].timeframes.daily.previous === 1
				? "Yesterday - " + data[0].timeframes.daily.previous + "hr"
				: "Yesterday - " + data[0].timeframes.daily.previous + "hrs";

		document.getElementById("play-current").textContent =
			data[1].timeframes.daily.current === 1
				? data[1].timeframes.daily.current + "hr"
				: data[1].timeframes.daily.current + "hrs";
		document.getElementById("play-previous").textContent =
			data[1].timeframes.daily.previous === 1
				? "Yesterday - " + data[1].timeframes.daily.previous + "hr"
				: "Yesterday - " + data[1].timeframes.daily.previous + "hrs";

		document.getElementById("study-current").textContent =
			data[2].timeframes.daily.current === 1
				? data[2].timeframes.daily.current + "hr"
				: data[2].timeframes.daily.current + "hrs";
		document.getElementById("study-previous").textContent =
			data[2].timeframes.daily.previous === 1
				? "Yesterday - " + data[2].timeframes.daily.previous + "hr"
				: "Yesterday - " + data[2].timeframes.daily.previous + "hrs";

		document.getElementById("exercise-current").textContent =
			data[3].timeframes.daily.current === 1
				? data[3].timeframes.daily.current + "hr"
				: data[3].timeframes.daily.current + "hrs";
		document.getElementById("exercise-previous").textContent =
			data[3].timeframes.daily.previous === 1
				? "Yesterday - " + data[3].timeframes.daily.previous + "hr"
				: "Yesterday - " + data[3].timeframes.daily.previous + "hrs";

		document.getElementById("social-current").textContent =
			data[4].timeframes.daily.current === 1
				? data[4].timeframes.daily.current + "hr"
				: data[4].timeframes.daily.current + "hrs";
		document.getElementById("social-previous").textContent =
			data[4].timeframes.daily.previous === 1
				? "Yesterday - " + data[4].timeframes.daily.previous + "hr"
				: "Yesterday - " + data[4].timeframes.daily.previous + "hrs";

		document.getElementById("self-care-current").textContent =
			data[5].timeframes.daily.current === 1
				? data[5].timeframes.daily.current + "hr"
				: data[5].timeframes.daily.current + "hrs";
		document.getElementById("self-care-previous").textContent =
			data[5].timeframes.daily.previous === 1
				? "Yesterday - " + data[5].timeframes.daily.previous + "hr"
				: "Yesterday - " + data[5].timeframes.daily.previous + "hrs";
	});

document
	.getElementById("btn-weekly")
	.addEventListener("click", async function () {
		let response = await fetch("./data/data.json");
		let data = await response.json();

		// handles btn active stage toggles
		if (btnWeeklyToggle.className === "btn btn-weekly") {
			btnDailyToggle.classList.remove("btn--active");
			btnWeeklyToggle.classList.add("btn--active");
			btnMonthlyToggle.classList.remove("btn--active");
		}

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
	});

document
	.getElementById("btn-monthly")
	.addEventListener("click", async function () {
		let response = await fetch("./data/data.json");
		let data = await response.json();

		// handles btn active stage toggles
		if (btnMonthlyToggle.className === "btn btn-monthly") {
			btnDailyToggle.classList.remove("btn--active");
			btnWeeklyToggle.classList.remove("btn--active");
			btnMonthlyToggle.classList.add("btn--active");
		}

		document.getElementById("work-current").textContent =
			data[0].timeframes.monthly.current === 1
				? data[0].timeframes.monthly.current + "hr"
				: data[0].timeframes.monthly.current + "hrs";
		document.getElementById("work-previous").textContent =
			data[0].timeframes.monthly.previous === 1
				? "Last Month - " + data[0].timeframes.monthly.previous + "hr"
				: "Last Month - " + data[0].timeframes.monthly.previous + "hrs";

		document.getElementById("play-current").textContent =
			data[1].timeframes.monthly.current === 1
				? data[1].timeframes.monthly.current + "hr"
				: data[1].timeframes.monthly.current + "hrs";
		document.getElementById("play-previous").textContent =
			data[1].timeframes.monthly.previous === 1
				? "Last Month - " + data[1].timeframes.monthly.previous + "hr"
				: "Last Month - " + data[1].timeframes.monthly.previous + "hrs";

		document.getElementById("study-current").textContent =
			data[2].timeframes.monthly.current === 1
				? data[2].timeframes.monthly.current + "hr"
				: data[2].timeframes.monthly.current + "hrs";
		document.getElementById("study-previous").textContent =
			data[2].timeframes.daily.previous === 1
				? "Last Month - " + data[2].timeframes.monthly.previous + "hr"
				: "Last Month - " + data[2].timeframes.monthly.previous + "hrs";

		document.getElementById("exercise-current").textContent =
			data[3].timeframes.monthly.current === 1
				? data[3].timeframes.monthly.current + "hr"
				: data[3].timeframes.monthly.current + "hrs";
		document.getElementById("exercise-previous").textContent =
			data[3].timeframes.monthly.previous === 1
				? "Last Month - " + data[3].timeframes.monthly.previous + "hr"
				: "Last Month - " + data[3].timeframes.monthly.previous + "hrs";

		document.getElementById("social-current").textContent =
			data[4].timeframes.monthly.current === 1
				? data[4].timeframes.monthly.current + "hr"
				: data[4].timeframes.monthly.current + "hrs";
		document.getElementById("social-previous").textContent =
			data[4].timeframes.monthly.previous === 1
				? "Last Month - " + data[4].timeframes.monthly.previous + "hr"
				: "Last Month - " + data[4].timeframes.monthly.previous + "hrs";

		document.getElementById("self-care-current").textContent =
			data[5].timeframes.monthly.current === 1
				? data[5].timeframes.monthly.current + "hr"
				: data[5].timeframes.monthly.current + "hrs";
		document.getElementById("self-care-previous").textContent =
			data[5].timeframes.weekly.previous === 1
				? "Last Month - " + data[5].timeframes.monthly.previous + "hr"
				: "Last Month - " + data[5].timeframes.monthly.previous + "hrs";
	});
