//**************************** Toggles ******************************//

const email = document.getElementById("email"),
  profile = document.getElementById("profile"),
  timezone = document.getElementById("timezone");

const lsEmail = localStorage.getItem("email"),
  lsProfile = localStorage.getItem("profile"),
  lsTimezone = localStorage.getItem("timezone");

lsEmail === "on" ? (email.checked = true) : (email.checked = false);
lsProfile === "on" ? (profile.checked = true) : (profile.checked = false);

if (lsTimezone) timezone.value = lsTimezone;

//************************ Alert Banner ***************************//

const alertBanner = document.getElementById("alert");
alertBanner.innerHTML = `
<div class="alert-banner">
<p><strong>Alert:</strong> You have <strong>6</strong> overdue tasks to complete </p>
<p class="alert-banner-close">x</p>
</div>
`;

alertBanner.addEventListener("click", (e) => {
  const element = e.target;
  if (element.classList.contains("alert-banner-close")) {
    alertBanner.style.display = "none";
  }
});

//**********************  Notification ******************************//
const notices = document.getElementsByClassName("notice");
const notificationBell = document.getElementsByClassName("nav-bell")[0];

notificationBell.addEventListener("click", () => {
  document.getElementById("notifications").classList.toggle("show");
});

for (let i = 0, length = notices.length; i < length; i++) {
  notices[i].addEventListener("click", (e) => {
    const element = e.target;
    if (element.classList.contains("notice-close")) {
      notices[i].style.display = "none";
    }
  });
}

//********************** Chart Widgets ***************************//

/************************ Line Graph ****************************/

// Weekly
const weeklydata = [
  750,
  1250,
  1000,
  2000,
  1500,
  1750,
  1250,
  1850,
  2250,
  1500,
  2500,
];

const weeklyLabel = [
  "16-22",
  "23-29",
  "30-5",
  "6-12",
  "13-19",
  "20-26",
  "27-3",
  "4-10",
  "11-7",
  "18-24",
  "25-31",
];

// Hourly
const hourData = [
  700,
  150,
  1020,
  3400,
  250,
  1550,
  780,
  790,
  950,
  400,
  350,
  250,
];

const hourLabel = [
  "0-1",
  "2-3",
  "4-5",
  "6-7",
  "8-9",
  "10-11",
  "12-13",
  "14-15",
  "16-17",
  "18-19",
  "20-21",
  "22-24",
];

// Daily
const dayData = [1000, 2000, 2500, 3000, 1700, 2250, 3400];
const dayLabel = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

// Monthly
const monthData = [
  4000,
  4700,
  6000,
  5000,
  2000,
  4500,
  3000,
  1540,
  6000,
  1200,
  3000,
  2000,
];
const monthLabel = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const trafficCanvas = document.getElementById("traffic-chart");
let trafficData = {
  labels: [
    "16-22",
    "23-29",
    "30-5",
    "6-12",
    "13-19",
    "20-26",
    "27-3",
    "4-10",
    "11-7",
    "18-24",
    "25-31",
  ],
  datasets: [
    {
      data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500],
      backgroundColor: "rgba(116, 119, 191, .3)",
      borderWidth: 1,
    },
  ],
};

let trafficOptions = {
  aspectRatio: 2.5,
  animation: {
    duration: 0,
  },
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
  legend: {
    display: false,
  },
};

let trafficChart = new Chart(trafficCanvas, {
  type: "line",
  data: trafficData,
  options: trafficData,
});

/********************** Bar Graph ****************************/
const dailyCanvas = document.getElementById("daily-chart");

const dailyData = {
  labels: ["S", "M", "T", "W", "T", "F", "S"],
  datasets: [
    {
      label: "# of Hits",
      data: [75, 115, 175, 125, 225, 200, 100],
      backgroundColor: "#7477BF",
      borderWidth: 1,
    },
  ],
};

const dailyOptions = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
  legend: {
    display: false,
  },
};

let dailyChart = new Chart(dailyCanvas, {
  type: "bar",
  data: dailyData,
  options: dailyOptions,
});

/************************* Doughnut Chart ***************************/
const mobileCanvas = document.getElementById("mobile-users");

const mobileData = {
  labels: ["Desktop", "Tablet", "Phones"],
  datasets: [
    {
      label: "# of Users",
      data: [2000, 550, 500],
      borderWidth: 0,
      backgroundColor: ["#7477BF", "#78CF82", "#51B6C8"],
    },
  ],
};

const mobileOptions = {
  legend: {
    position: "right",
    labels: {
      boxWidth: 20,
      fontStyle: "bold",
    },
  },
};

let mobileChart = new Chart(mobileCanvas, {
  type: "doughnut",
  data: mobileData,
  options: mobileOptions,
});

/*************************** Messaging Section ***************************/
const user = document.getElementById("userField");
const message = document.getElementById("messageField");
const send = document.getElementById("send");

send.addEventListener("click", () => {
  if (user.value === "" && message.value === "") {
    alert("Please fill out user and message fields before sending");
  } else if (user.value === "") {
    alert("Please fill out user field before sending");
  } else if (message.value === "") {
    alert("Please fill out message field before sending");
  } else {
    alert(`Message successfully sent to: ${user.value}`);
  }
});

/**************** Buttons to change data on line graph **********************/
function setTrafficChartTriggers() {
  const btns = document.getElementsByClassName("traffic-nav-link");

  for (let i = 0, length = btns.length; i < length; i++) {
    btns[i].addEventListener("click", () => {
      console.log("firing");
      const active = document.getElementsByClassName("active")[0];
      const label = btns[i].innerText.toLowerCase();
      active.classList.toggle("active");
      btns[i].classList += " active";

      const datasets = trafficChart.data.datasets[0];

      switch (label) {
        case "hourly":
          datasets.data = hourData;
          trafficChart.data.labels = hourLabel;
          break;
        case "weekly":
          datasets.data = weeklydata;
          trafficChart.data.labels = weeklyLabel;
          break;
        case "monthly":
          datasets.data = monthData;
          trafficChart.data.labels = monthLabel;
          break;
        case "daily":
          datasets.data = dayData;
          trafficChart.data.labels = dayLabel;
          break;
      }

      trafficChart.update();
    });
  }
}

setTrafficChartTriggers();

/******************* Search ***********************/

/******************* Storage **********************/

document.getElementById("save").addEventListener("click", () => {
  email.checked
    ? localStorage.setItem("email", "on")
    : localStorage.setItem("email", "off");
  profile.checked
    ? localStorage.setItem("profile", "on")
    : localStorage.setItem("profile", "off");

  const timeZoneSelected = timezone.value;
  localStorage.setItem("timezone", timeZoneSelected);
  debugger;
});

document.getElementById("cancel").addEventListener("click", () => {
  localStorage.removeItem("email");
  localStorage.removeItem("profile");
  localStorage.removeItem("timezone");
});
