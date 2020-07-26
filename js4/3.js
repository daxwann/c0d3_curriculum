const createMoveScopeEventHandler = scope => e => {
  setScopeCoordinates(scope, e);
}

const createRemoveScopeEventHandler = scope => e => {
  scope.style.display = "none";
}

function setScopeCoordinates(scope, event) {
  console.log('set scope');
  scope.style.display = "block";
  scope.style.top = `${event.clientY - (scope.offsetHeight / 2)}px`; 
  scope.style.left = `${event.clientX - (scope.offsetWidth / 2)}px`;
}

function addEventListenersToPicture() {
  const fairSmall = document.getElementById("fairSmall");
  const scope = document.getElementById("scope");
  
  fairSmall.addEventListener("mousemove", createMoveScopeEventHandler(scope));
  fairSmall.addEventListener("mouseout", createRemoveScopeEventHandler(scope));
}

addEventListenersToPicture();