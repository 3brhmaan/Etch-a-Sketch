
createGrid();

const gridCells = document.querySelectorAll('.col');
const btns = document.querySelectorAll('.btn');
const colorPicker = document.querySelector('#color');
let colorMode = 'nothing';


btns.forEach(btn => btn.addEventListener('click' , setBtnAttribute));

gridCells.forEach(cell => cell.addEventListener('mouseover' , setCellColor));


function createGrid(){
    
    let n = Number.parseInt(prompt('enter the grid size x*x'));
    const parent = document.querySelector('.container');
    
    
    for(let i = 0 ; i<n ; i++){
        let row = document.createElement('div');
        row.setAttribute(
            'style' , 
            'display : flex; flex : 1 1 auto;');
        row.classList.add("row");
    
        for(let j = 0 ; j<n ; j++){
            let col = document.createElement('div');

            col.setAttribute('style' , 'flex : 1 1 auto; background-color : white;');

            col.classList.add("col");
            row.appendChild(col);
        }
        
        parent.appendChild(row);
    }
}

function randColor() {
    return "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();
}

function clearCell(cell){
    cell.style['background-color'] = 'white';
}

function setCellColor(){
    switch(colorMode){
        case 'color-mode':
            this.style['background-color'] = colorPicker.value;
            break;
        case 'rainbow':
            this.style['background-color'] = randColor();
            break;
        case 'eraser' :
            this.style['background-color'] = 'white';
            break;
    }
}

function setBtnAttribute(){
    colorMode = this.id;

    if(colorMode === 'clear'){
        gridCells.forEach(clearCell);
        return;
    }

    for(let i=0 ; i<btns.length ; i++){
 
        let backgroundColor = '#e9e9ed';
        let color = 'black';

        if(btns[i].id === colorMode){
            backgroundColor = 'black';
            color = '#e9e9ed';
        }

        btns[i].style.backgroundColor = backgroundColor;
        btns[i].style.color = color;

    }

}



