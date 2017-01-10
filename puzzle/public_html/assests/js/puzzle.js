function Puzzle(){}

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

