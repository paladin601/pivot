export function sensitiveTable(mps){

    var body = document.getElementById("table"),
    mes = false,
    reset = true,
    firts = true,
    celda,
    hilera,
    textoCelda,
    caracteristica,
    tabla   = document.createElement("table"),
    tblBody = document.createElement("tbody");

    // Crea las celdas
    for (var i = 0; i < mps.length; i++) {
        if(reset){
            hilera = document.createElement("tr");
            reset = false;
            caracteristica = mps[i].Caracteristica;
        }

        celda = document.createElement("td");

        if(!mes){
            if(mps[i].Caracteristica !== caracteristica){
                reset = true;
                mes = true;
                tblBody.appendChild(hilera);
                i = 0;
            }else{
                if(i == 0){
                    textoCelda = document.createTextNode("");
                    celda.appendChild(textoCelda);
                    hilera.appendChild(celda);
                    celda = document.createElement("td");
                }

                textoCelda = document.createTextNode(mps[i].Mes);
            }

        }else{
            if(firts){
                textoCelda = document.createTextNode(caracteristica);
                celda.appendChild(textoCelda);
                hilera.appendChild(celda);
                celda = document.createElement("td");
                firts = false;
            }
            if(mps[i].Caracteristica !== caracteristica){
                reset = true;
                mes = true;
                tblBody.appendChild(hilera);
                firts = true;
            }else{
                textoCelda = document.createTextNode(mps[i].value);
            }


        }
        
        celda.appendChild(textoCelda);
        hilera.appendChild(celda);
  
        // agrega la hilera al final de la tabla (al final del elemento tblbody)
    }
  
    // posiciona el <tbody> debajo del elemento <table>
    tabla.appendChild(tblBody);
    // appends <table> into <body>
    body.appendChild(tabla);
    // modifica el atributo "border" de la tabla y lo fija a "2";
    tabla.setAttribute("border", "2");
  }