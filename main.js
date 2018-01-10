var cellWidth = 0;
var cellHeight = 0;
var numberOfCells = 0;
var gridContainer;

function visitCell(e) {
  console.log("visited");
  console.log(e.target);
  e.target.classList.toggle("cell-unvisited");
}

function createGrid( pixelDensity ){
  cellWidth = 100 / pixelDensity;
  cellHeight = 100 / pixelDensity;
  numberOfCells = pixelDensity * pixelDensity;
  console.log(cellHeight);
  gridContainer = document.querySelector("#grid");
  console.log(gridContainer);

  for(i = 0;i<numberOfCells;i++){
    let cell = document.createElement('div');
    cell.classList.add("cell-unvisited");
    cell.setAttribute("id", "myBtn");
    cell.style.height = cellHeight + "%";
    cell.style.width = cellWidth + "%";
    cell.addEventListener("click",visitCell);
    cell.addEventListener("mouseover", visitCell);
    cell.setAttribute('width', "30%");
    cell.setAttribute("height", "30%");
    gridContainer.appendChild(cell);
  }
}
