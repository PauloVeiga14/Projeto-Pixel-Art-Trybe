const pixelTableSize = 5;

function createPixelBoard() {
  const getBody = document.querySelector('body');
  console.log(getBody);
  const pixelBoard = document.createElement('section');
  pixelBoard.id = 'pixel-board';
  getBody.appendChild(pixelBoard);
}

createPixelBoard();

// A ideia de usar criar uma linha para depois associar o conjunto de pixels, veio da resposta no https://stackoverflow.com/questions/29229523/how-and-why-to-use-display-table-cell-css

function createPixels() {
  for (let index = 0; index < pixelTableSize; index += 1) {
    let boardLine = document.createElement('div');
    boardLine.className = 'board-line';
    document.querySelector('#pixel-board').appendChild(boardLine);
    for (let secondIndex = 1; secondIndex <= pixelTableSize; secondIndex += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      document.querySelectorAll('.board-line')[index].appendChild(pixel);    
    }
  }  
}

createPixels();