// Write your JavaScript code here.
// Remember to pay attention to page loading!

window.addEventListener("load", (event) => {
  //BUTTONS
  let takeoffButton = document.getElementById("takeoff");
  let landingButton = document.getElementById("landing");
  let abortMissionButton = document.getElementById("missionAbort");
  let upButton = document.getElementById("up");
  let downButton = document.getElementById("down");
  let rightButton = document.getElementById("right");
  let leftButton = document.getElementById("left");

  //ROCKET DEFAULT POSITON ON LOAD
  let rocket = document.getElementById("rocket");
  rocket.style.position = "absolute";
  resetRocketPosition();

  //TAKEOFF BUTTON HANDLING:
  takeoffButton.addEventListener("click", (event) => {
    let confirmShuttleTakeoff = window.confirm(
      "Confirm that the shuttle is ready for takeoff."
    );

    if (confirmShuttleTakeoff) {
      let flightStatus = document.getElementById("flightStatus");
      flightStatus.innerHTML = "Shuttle in flight.";
      let shuttleBackground = document.getElementById("shuttleBackground");
      shuttleBackground.style.backgroundColor = "blue";
      let spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
      let currentShuttleHeight = Number(spaceShuttleHeight.innerHTML);
      spaceShuttleHeight.innerHTML = currentShuttleHeight + 10000;
    }
  });
  //LAND BUTTON HANDLING:

  landingButton.addEventListener("click", (event) => {
    let confirmLanding = window.confirm(
      "The shuttle is landing. Landing gear engaged."
    );
    if (confirmLanding) {
      flightStatus.innerHTML = "The shuttle has landed.";
      shuttleBackground.style.backgroundColor = "green";
      spaceShuttleHeight.innerHTML = 0;
      resetRocketPosition();
    }
  });
  //ABORT MISSION BUTTON HANDLING:
  abortMissionButton.addEventListener("click", (event) => {
    let confirmAbortMission = window.confirm(
      "Confirm that you want to abort the mission."
    );
    if (confirmAbortMission) {
      flightStatus.innerHTML = "Mission aborted.";
      shuttleBackground.style.backgroundColor = "green";
      spaceShuttleHeight.innerHTML = 0;
      resetRocketPosition();
    }
  });
  //ROCKET HANDLING:
  //rocket directional button handling:
  upButton.addEventListener("click", (event) => {
    if (spaceShuttleHeight.innerHTML == "0") {
      window.alert("Space Shuttle is grounded.");
    } else {
      let currentRocketHeight = parseInt(rocket.style.bottom);
      rocket.style.bottom = currentRocketHeight + 10 + "px";
      let currentShuttleHeight = Number(spaceShuttleHeight.innerHTML);
      spaceShuttleHeight.innerHTML = currentShuttleHeight + 10000;
    }
  });
  downButton.addEventListener("click", (event) => {
    if (spaceShuttleHeight.innerHTML == "0") {
      window.alert("Space Shuttle is grounded.");
    } else {
      let currentRocketHeight = parseInt(rocket.style.bottom);
      rocket.style.bottom = currentRocketHeight - 10 + "px";
      let currentShuttleHeight = Number(spaceShuttleHeight.innerHTML);
      spaceShuttleHeight.innerHTML = currentShuttleHeight - 10000;
    }
  });
  rightButton.addEventListener("click", (event) => {
    if (spaceShuttleHeight.innerHTML == "0") {
      window.alert("Space Shuttle must be launched first.");
    } else {
      let currentRocketXAxis = parseInt(rocket.style.left);
      rocket.style.left = currentRocketXAxis + 10 + "px";
      // if(currentRocketXAxis == 470){
      //   rightButton.addEventListener("click", event =>{

      //     rocket.style.left = 470 + "px";
      //   });
      // }
    }
  });
  leftButton.addEventListener("click", (event) => {
    if (spaceShuttleHeight.innerHTML == "0") {
      window.alert("Space Shuttle must be launched first.");
    } else {
      let currentRocketXAxis = parseInt(rocket.style.left);
      rocket.style.left = currentRocketXAxis - 10 + "px";
    }
  });

  //reset positon to bottom left corner
  function resetRocketPosition() {
    rocket.style.left = 0;
    rocket.style.bottom = 0;
  }
});
