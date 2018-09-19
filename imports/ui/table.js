export function sensitiveTable(mps){

    var body = document.getElementById("table"),
    mes = false,
    reset = true,
    firts = true,
    celda,
    hilera,
    textoCelda,
    meses = [],
    caracteristica,
    j = 0,
    tabla   = document.createElement("table"),
    tblBody = document.createElement("tbody");

    // Crea las celdas
    for (var i = 0; i < mps.length; i++) {

        if(reset){
            hilera = document.createElement("tr");
            reset = false;
            caracteristica = mps[i].Caracteristica;
            j = 0;
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

                textoCelda =  document.createElement("input");
                textoCelda.type = "text"
                textoCelda.value = mps[i].Mes;
                meses.push(mps[i].Mes);
                celda.appendChild(textoCelda);
                hilera.appendChild(celda);
            }

        }else{
            if(mps[i].Caracteristica !== caracteristica){

                reset = true;
                mes = true;
                tblBody.appendChild(hilera);
                firts = true;

            }else{

                if(firts){
                    textoCelda = document.createTextNode(caracteristica);
                    celda.appendChild(textoCelda);
                    hilera.appendChild(celda);
                    celda = document.createElement("td");
                    firts = false;
                }

                while(mps[i].Mes !== meses[j]) {
                    textoCelda =  document.createElement("input");
                    textoCelda.type = "number"
                    textoCelda.value = 0;
                    celda.appendChild(textoCelda);
                    hilera.appendChild(celda);
                    j++
                    celda = document.createElement("td");
                }

                textoCelda =  document.createElement("input");
                textoCelda.type = "number"
                textoCelda.value = mps[i].value;
                j++;
                celda.appendChild(textoCelda);
                hilera.appendChild(celda);

            }


        }
        
        
  
    }
  
    tabla.appendChild(tblBody);
    body.appendChild(tabla);
    tabla.setAttribute("border", "2");
  }