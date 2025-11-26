const colors = {
".": "transparent",
"0": "#f80505ff",
"1": "#7b31f3ff",
"2": "#ffffff",
"3": "#000000",
};

const ppupet = [
"..........333333..........",
"........3322222233........",
".......322222222223.......",
"......32222222222223......",
".....3222222222222223.....",
".....3222222222222223.....",
"....322222222222222223....",
"....322222222222222223....",
"....322222222222222223....",
"....322333322223333223....",
"...32233333322333333223...",
"...32222211222211222223...",
"...32222211222211222223...",
"...32002211222211220023...",
"...32002211000011220023...",
"....300333333333333003....",
"....322233333333332223....",
".....3223333333333223.....",
".....3222333333332223.....",
"......32222000022223......",
".......322222222223.......",
"........3322222233........",
"..........333333..........",
];

//animacion cuadro a cuadro 
async function createPixelArtSlow(matrix){
    const container = document.getElementById("pixelArt");
    container.innerHTML = ""; // Limpiar el contenedor antes de agregar nuevos cuadros

    for(let row = 0; row < matrix.length; row++){
        for (let col = 0; col < matrix[row].length; col++){
            const pixel = matrix[row][col];

            const cell = document.createElement("div");
            cell.style.width = "16px";
            cell.style.height = "16px";
            cell.style.background = colors[pixel];

            container.appendChild(cell);

            await new Promise(resolve => setTimeout(resolve,20)); // Espera 20 ms antes de agregar el siguiente cuadro
        }
    }
}

document.getElementById("startBtn").addEventListener("click", () => {
    // cambiar fondo
    document.body.classList.add("grid-background");

    //Quitar boton
    document.getElementById("startBtn").style.display = "none";

    //mostar pixel art
    const art = document.getElementById("pixelArt");
    art.style.display = "grid";

    //Dibujar pixel art 
    createPixelArtSlow(ppupet);

})