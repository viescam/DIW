function Puzzle(){
    var numPiezas = 4;
    var estado;
    reset();
};

Puzzle.prototype.reset()=function(){
    this.estado = [];
    for(i=0;i<this.numPiezas;i++){
        this.estado.push(-(i+1));
    }
};
Puzzle.prototype.getNumPosicionEnCaja=function(numPieza){
    if (numPieza < 1){
        throw "El numero de pieza debe ser mayor de 0";
    }
    if( numPieza > this.numPiezas){
        throw "El numero de pieza debe ser menor de " + this.numPiezas;
    }
    if(this.isColocadaPieza(numPieza)){
         throw "La pieza no está en la caja";
    }
    return -this.estado[numPieza];
}
Puzzle.prototype.getNumPosicionEnTablero=function(numPieza){
    if (numPieza < 1){
        throw "El numero de pieza debe ser mayor de 0";
    }
    if( numPieza > this.numPiezas){
        throw "El numero de pieza debe ser menor de " + this.numPiezas;
    }
    if(this.isQuitadaPieza(numPieza)){
         throw "La pieza no está en en el tablero";
    }
    return this.estado[numPieza];
}
Puzzle.prototype.isLibreHuecoTablero = function (posicion){
    i=0;
    isLibre=false;
    while(i<this.estado.length $$ isLibre==false){
        if(this.estado[i]==posicion)
            isLibre=true;
        i++;
    }
    return isLibre;
}
Puzzle.prototype.isPermitidoColocarPieza = function (numPieza, posicion){
    if(isLibreHuecoTablero(posicion))
        return true;
    else
        return false;
}
Puzzle.prototype.isPermitidoQuitarPieza = function (numPieza){
    if(isColocada(numPieza)
        return true;
    else
        return false;
}
Puzzle.prototye.isColocada = function(numPieza){
    if(this.estado[numPieza+1]>0)
        return true;
    else
        return false;
}

Puzzle.prototype.onDragStartPiezaSinPoner=function(event){
    event.dataTransfer.setData("text",event.target.id);
};

Puzzle.prototype.onDragStartPiezaPuesta=function(event){
    event.dataTransfer.setData("text",event.target.id);
};

Puzzle.prototype.onDropPiezaSinPoner=function(event){
    //alert(event.target);
    event.preventDefault();
    var idNuevo = event.dataTransfer.getData("text");
    var srcAntigua = document.getElementById(idNuevo).src;
    document.getElementById(idNuevo).src = event.target.src;
    event.target.src = srcAntigua;
};

Puzzle.prototype.onDropPiezaPuesta=function(event){
    //alert(event.target);
    event.preventDefault();
    var idNuevo = event.dataTransfer.getData("text");
    //event.target.replaceChild(document.getElementById(idNuevo),event.target);
    var srcAntigua = document.getElementById(idNuevo).src;
    document.getElementById(idNuevo).src = event.target.src;
    event.target.src = srcAntigua;
};

Puzzle.prototype.onDragOverPiezaSinPoner=function(event){
    event.preventDefault();    
};

Puzzle.prototype.onDragOverPiezaPuesta=function(event){
    event.preventDefault();
};




puzzle = new Puzzle();

