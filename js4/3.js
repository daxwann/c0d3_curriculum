const fairSmall = document.getElementById("fairSmall");
const scope = document.createElement("div");
scope.classList.add("scope");

const appendScope = (element, scope) => e => {
  element.appendChild(scope);
  const scopeRect = scope.getBoundingClientRect();
  scope.setAttribute("style", `display: block; top: ${e.clientY - (scopeRect.height / 2)}px; left: ${e.clientX - (scopeRect.width / 2)}px`);
};

const removeScope = (element, scope) => e => {
  element.removeChild(scope);
}

fairSmall.addEventListener("mouseenter", appendScope(fairSmall, scope));
fairSmall.addEventListener("mouseleave", removeScope(fairSmall, scope));