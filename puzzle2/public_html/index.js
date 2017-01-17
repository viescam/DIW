var puzzle = new Puzzle(4);

function onDragStartPieza(event){
    event.dataTransfer.setData("text",event.target.numPieza)
};

function onDropHuecoCaja(event){
    event.preventDefault();
    var idPieza = event.dataTransfer.getData("idPieza");
    var idHuecoCaja = event.target.idHuecoCaja;
    if(puzzle.isQuitadaPieza(idPieza)){
        if(puzzle.isPermitidoQuitarPieza(idPieza,idHuecoCaja))
            puzzle.quitarPieza(idPieza,idHuecoCaja)
    }
}; 

function onDropHuecoTablero(event){
    event.preventDefault();
    var idPieza = event.dataTransfer.getData("idPieza");
    var idHuecoTablero = event.target.idHuecoTablero;
    if(puzzle.isColocadaPieza(idPieza)){
        if(puzzle.isPermitidoColocarPieza(idPieza,idHuecoTablero))
            puzzle.colocarPieza(idPieza,idHuecoTablero)
    }
};

function onDragOverHuecoCaja(event){
    event.preventDefault()    
};

function onDragOverHuecoTablero(event){
    event.preventDefault()
};


