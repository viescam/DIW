function Puzzle(numPiezas){
    this.numPiezas = numPiezas;
    var estado;
    reset();
};

Puzzle.prototype.reset()=function(){
    this.estado = [];
    numeroPiezas = this.getNumPiezas();
    for(i=0;i<numeroPiezas;i++){
        this.estado.push(-(i+1));
    }
};
Puzzle.prototype.getNumPosicionPiezaEnCaja=function(numPieza){
    if (numPieza < 1){
        throw "El numero de pieza debe ser mayor de 0";
    }
    if( numPieza > this.numPiezas){
        throw "El numero de pieza debe ser menor de " + this.numPiezas;
    }
    if(this.isColocadaPieza(numPieza)){
         throw "La pieza no está en la caja";
    }
    return -this.estado[numPieza-1];
};
Puzzle.prototype.getNumPosicionPiezaEnTablero=function(numPieza){
    if (numPieza < 1){
        throw "El numero de pieza debe ser mayor de 0";
    }
    if( numPieza > this.numPiezas){
        throw "El numero de pieza debe ser menor de " + this.numPiezas;
    }
    if(this.isQuitadaPieza(numPieza)){
         throw "La pieza no está en en el tablero";
    }
    return this.estado[numPieza-1];
};

Puzzle.prototype.getNumPiezas = function(){
    return this.numPiezas;
};

Puzzle.prototype.isLibreHuecoTablero = function (posicion){
    i=0;
    while(i<this.estado.length){
        if(this.estado[i]===posicion)
            return true;
        i++;
    }
    return false;
};
Puzzle.prototype.isPermitidoColocarPieza = function (numPieza, posicion){
    if(this.isColocadaPieza(numPieza))
        return false;
    return this.isLibreHuecoTablero(posicion)   
};
Puzzle.prototype.isPermitidoQuitarPieza = function (numPieza){
    return this.isColocada(numPieza)
};
Puzzle.prototye.isColocadaPieza= function(numPieza){
    if(this.estado[numPieza-1]>0)
        return true;
    else
        return false;
};

Puzzle.prototye.isQuitadaPieza= function(numPieza){
    if(this.estado[numPieza-1]<0)
        return true;
    else
        return false;
};

Puzzle.prototye.colocarPieza= function(numPieza,posicion){
    if(this.isPermitidoColocarPieza(numPieza,posicion))
        this.estado[numPieza-1]=posicion;
    else
        throw "La pieza no se puede colocar";
};
Puzzle.prototype.quitarPieza= function(numPieza){
    if(this.isPermitidoQuitarPieza(numPieza))
        this.estado[numPieza-1]=-numPieza;
    else
        throw "La pieza no se puede quitar";
};
Puzzle.prototype.isResuelto = function(){
    i=0;
    while(i<this.estado.length){
        if(this.estado[i]!=i+1)
            return false;
        i++;
    }
    return true;
    
};

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

puzzle = new Puzzle(4);

