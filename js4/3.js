const RATIO_X = 1263 / 421;
const RATIO_Y = 503 / 168;

const createMoveScopeEventHandler = (scope, smallFair) => (e) => {
  setScopeCoordinates(scope, e);
  moveScopeBackgroundPosition(e, scope, smallFair);
};

const createRemoveScopeEventHandler = (scope) => (e) => {
  scope.style.display = 'none';
};

function moveScopeBackgroundPosition(event, scope, smallFair) {
  const scopeInSmallFairTop = event.clientY - smallFair.offsetTop;
  const scopeInSmallFairLeft = event.clientX - smallFair.offsetLeft;
  scope.style.backgroundPositionY = `${
    -1 * scopeInSmallFairTop * RATIO_Y + scope.offsetHeight / 2
  }px`;
  scope.style.backgroundPositionX = `${
    -1 * scopeInSmallFairLeft * RATIO_X + scope.offsetWidth / 2
  }px`;
}

function setScopeCoordinates(scope, event) {
  scope.style.display = 'block';
  scope.style.top = `${event.clientY - scope.offsetHeight / 2}px`;
  scope.style.left = `${event.clientX - scope.offsetWidth / 2}px`;
}

function addEventListenersToPicture() {
  const fairSmall = document.getElementById('fairSmall');
  const scope = document.getElementById('scope');

  fairSmall.addEventListener(
    'mousemove',
    createMoveScopeEventHandler(scope, fairSmall)
  );
  fairSmall.addEventListener('mouseout', createRemoveScopeEventHandler(scope));
}

addEventListenersToPicture();
