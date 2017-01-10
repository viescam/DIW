function abrirCerrar(nodo){
    nodoIL = nodo.parentNode;
    nodoUL = nodoIL.getElementsByTagName("ul")[0];
    //nodoUL.className="vertical-menu vertical-menu--0";
    if(nodo.className.indexOf("vertical-menu__item--folder--close")===-1){
        nodoUL= addClass(nodoUL,"vertical-menu--close");
        nodo=addClass(nodo,"vertical-menu__item--folder--close")
        nodo=removeClass(nodo,"vertical-menu__item--folder--open");
    }else{
        nodoUL= removeClass(nodoUL,"vertical-menu--close");
        nodo=removeClass(nodo,"vertical-menu__item--folder--close")
        nodo=addClass(nodo,"vertical-menu__item--folder--open");
    }
    //alert(nodo.className);
    //alert("Hola");
}
function removeClass(nodo1,clase){
    claseNodo=nodo1.className;
    //alert(claseNodo);
    var posClase=claseNodo.indexOf(clase);
    //alert(posClase);
    claseNodoNueva=claseNodo.slice(0,posClase)+claseNodo.slice(posClase+clase.length+1);
    //alert(claseNodoNueva);
    nodo1.className=claseNodoNueva;

    return nodo1;            
}
function addClass(nodo1, clase){
    claseNodo=nodo1.className;
    claseNodoNueva=claseNodo+" "+clase;
    //alert(claseNodoNueva);
    nodo1.className=claseNodoNueva;

    return nodo1;  
}


