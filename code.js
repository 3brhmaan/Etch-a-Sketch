
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
            col.setAttribute(
                'style' , 
                'flex : 1 0 auto;');
            col.classList.add("col");
            row.appendChild(col);
        }
        
        parent.appendChild(row);
    }
}

createGrid()


