const createAppendScopeEventHandler = (element, scope, moveScopeEventHandler) => e => {
  console.log('append scope')
  element.appendChild(scope);
  element.addEventListener("mousemove", moveScopeEventHandler);
  setScopeCoordinates(scope, e);
};

const createMoveScopeEventHandler = scope => e => {
  setScopeCoordinates(scope, e);
}

const createRemoveScopeEventHandler = (element, scope, moveScopeEventHandler) => e => {
  console.log('remove scope');
  element.removeChild(scope);
  element.removeEventListener("mousemove", moveScopeEventHandler);
}

function setScopeCoordinates(scope, event) {
  console.log('set scope');
  const scopeRect = scope.getBoundingClientRect();
  scope.setAttribute("style", `display: block; top: ${event.clientY - (scopeRect.height / 2)}px; left: ${event.clientX - (scopeRect.width / 2)}px`);
}

function addEventListenersToPicture() {
  const fairSmall = document.getElementById("fairSmall");
  const scope = document.createElement("div");
  scope.classList.add("scope");
  const moveScopeEventHandler = createMoveScopeEventHandler(scope);
  
  fairSmall.addEventListener("mouseenter", createAppendScopeEventHandler(fairSmall, scope, moveScopeEventHandler));
  fairSmall.addEventListener("mouseleave", createRemoveScopeEventHandler(fairSmall, scope, moveScopeEventHandler));
}

addEventListenersToPicture();