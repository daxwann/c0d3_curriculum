const starsElement = document.getElementById("stars");
const announcementElement = document.getElementById("announcement");
const stars = [];

const highlightStars = event => {
  let afterTarget = false;

  stars.forEach((e, i) => {
    if (!afterTarget) {
      e.classList.add('fas');
      e.classList.remove('far')
    } else {
      e.classList.remove('fas');
      e.classList.add('far');
    }

    if (e === event.target) {
      afterTarget = true;
      count = i + 1;
    }
  })

  return count;
}

const announceStarsToGive = count => {
  announcementElement.innerText = `You are giving ${count} stars!`;
}

const announceStarsGiven = count => {
  announcementElement.innerText = `You have given ${count} stars!`;
}

const starMouseEnterEventHandler = e => {
  const count = highlightStars(e);
  announceStarsToGive(count);
}

const starMouseClickEventHandler = e => {
  const count = highlightStars(e);
  announceStarsGiven(count);
  stars.forEach(star => {
    star.removeEventListener('mouseenter', starMouseEnterEventHandler);
  })
}

const Star = function() {
  const element = document.createElement('i');
  element.classList.add('far');
  element.classList.add('fa-star');
  element.addEventListener('mouseenter', starMouseEnterEventHandler);
  element.addEventListener('click', starMouseClickEventHandler);
  starsElement.append(element);
  return element;
}

starsElement.addEventListener('mouseleave', () => {
  stars.forEach(star => {
    star.addEventListener('mouseenter', starMouseEnterEventHandler);
  })
})

for (let i = 0; i < 5; i++) {
  stars.push(new Star());
}

