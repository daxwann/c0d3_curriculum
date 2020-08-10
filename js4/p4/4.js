const Block = function (size = 2) {
  this.size = size;
  this.matrix = [];
  this.blockElem = document.createElement("div");
  this.board = document.getElementById("board");
  this.blockElem.classList.add("block");
  this.blockElem.id = "block";
  this.isOutOfBound = setOutOfBound(size);

  this.build = () => {
    if (!this.board.hasChildNodes()) {
      this.board.append(this.blockElem);
    }

    for (let row = 0; row < this.size; row++) {
      const rowArr = [];
      const rowElem = this.createRow();

      for (let col = 0; col < this.size; col++) {
        const light = new Light([row, col], this);
        rowElem.append(light.getElement());
        rowArr.push(light);
      }
      this.matrix.push(rowArr);
    }
  };

  this.getMatrix = () => this.matrix;

  this.createRow = () => {
    const rowElem = document.createElement("div");
    rowElem.classList.add("row");
    this.blockElem.append(rowElem);
    return rowElem;
  };

  this.getElement = () => this.blockElem;

  this.turnRandomLightOn = () => {
    if (this.matrix.length === 0) return;
    const row = getRandomInt(this.size);
    const light = getRandomInt(this.size);
    this.matrix[row][light].turnOn();
  };

  this.isAnyLightOn = () => {
    return this.matrix.some(isAnyRowWithLightOn);
  };

  this.toggleLight = (coordinate) => {
    if (this.isOutOfBound(coordinate)) return;

    const [y, x] = coordinate;
    this.matrix[y][x].toggle();
  };

  this.toggleSurroundingLight = (coordinate) => {
    [y, x] = coordinate;
    const left = [y, x - 1];
    const up = [y - 1, x];
    const right = [y, x + 1];
    const down = [y + 1, x];
    const surroundingLights = [left, up, right, down];
    surroundingLights.forEach((coord) => this.toggleLight(coord));
  };

  this.remove = () => {
    if (this.board.hasChildNodes()) {
      this.board.innerHtml = "";
      this.getElement().remove();
    }
  };

  return this;
};

function getRandomInt(maxExclusive) {
  return Math.floor(Math.random() * Math.floor(maxExclusive));
}

function isAnyRowWithLightOn(row) {
  return row.some(isAnyLightOn);
}

function isAnyLightOn(light) {
  return light.isSwitchedOn();
}

function setNewGame(oldBlock = null) {
  let size = 2;

  if (oldBlock) {
    size = prompt(
      "You won! Play again with different size? 0 to stop playing",
      "4"
    );
    if (size < 2 || size > 20) {
      size = prompt("Please enter size between 2 and 20", "4");
    }
    oldBlock.remove();
  }

  const block = new Block(size);
  block.build();
  block.turnRandomLightOn();
}

function checkGame(block) {
  if (!block.isAnyLightOn()) {
    setNewGame(block);
  }
}

const setOutOfBound = (size) => (coordinate) => {
  [y, x] = coordinate;
  return y < 0 || x < 0 || y >= size || x >= size;
};

const clickLightEventHandler = (block) => (event) => {
  const lightElem = event.target;
  const light = block.getMatrix()[lightElem.dataset.y][lightElem.dataset.x];
  if (!light.isSwitchedOn()) return;
  light.turnOff();
  block.toggleSurroundingLight(light.getCoordinate());
  checkGame(block);
};

const Light = function (coordinate, block) {
  const [y, x] = coordinate;
  this.lightElem = document.createElement("div");
  this.isOn = false;
  this.lightElem.classList.add("light");
  this.lightElem.dataset.y = y;
  this.lightElem.dataset.x = x;
  this.lightElem.addEventListener("click", clickLightEventHandler(block));
  this.coordinate = coordinate;

  this.isSwitchedOn = () => {
    return this.isOn;
  };

  this.getElement = () => this.lightElem;

  this.turnOn = () => {
    this.isOn = true;
    this.lightElem.classList.add("light--on");
  };

  this.turnOff = () => {
    this.isOn = false;
    this.lightElem.classList.remove("light--on");
  };

  this.toggle = () => {
    this.isOn = !this.isOn;

    if (this.isOn) {
      this.lightElem.classList.add("light--on");
    } else {
      this.lightElem.classList.remove("light--on");
    }
  };

  this.getCoordinate = () => this.coordinate;

  return this;
};

setNewGame();
