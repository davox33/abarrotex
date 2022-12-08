document.getElementById("formulario").addEventListener("submit",crear);
var dataCargada=[
  {
    "name":"Botanas",
    "desc":"Las botanas se han vuelto parte de nuestros días, es tan común verlas en fiestas, bares, restaurantes, en tu casa para ver películas o partidos."
  },
  {
    "name":"Pan",
    "desc":"Alimento básico que se elabora con una mezcla de harina, generalmente de trigo, agua, sal y levadura, que se amasa y se cuece en un horno en piezas de distintas formas y tamaños; su sabor, color y textura pueden variar según el tipo de harina empleado y los ingredientes secundarios añadidos, como leche, mantequilla, frutos secos, etc."
  },
  {
    "name":"Arroz Frijol y Semillas",
    "desc":"Las semillas son la base principal para el sustento humano. Son las depositarias del potencial genético de las especies agrícolas y sus variedades resultantes de la mejora continua y la selección a través del tiempo."
  },
  {
    "name":"Limpieza del Hogar",
    "desc":"Productos de Limpieza de la mejor calidad, variedad de marcas y tipos"
  },
  {
    "name":"Galletas",
    "desc":"Las pastas secas son una especialidad de repostería, son pequeñas galletas cocidas al horno, hecho con una pasta a base de harina, mantequilla, huevos, y, azúcar o sal según el tipo."
  },
  {
    "name":"Azucar y Postres",
    "desc":"El postre es el plato de sabor dulce o salado que se toma al final de la comida, o de merienda. Cuando se habla de postres se entiende alguna preparación dulce, bien sean cremas, tartas, pasteles, helados, bombones, etc."
  },
  {
    "name":"Leche",
    "desc":"Bebidad lácteas o basadas en leche"
  }
  ]

  function agregarBasicos(){
    for (let i=0;i<dataCargada.length;i++){
      nombre = dataCargada[i].name;
      description = dataCargada[i].desc;
  
      let categoria={
        nombre,
        description
    }

    if (localStorage.getItem("Categorias")==null) {
        let categorias = []
        categorias.push(categoria)
        localStorage.setItem("Categorias", JSON.stringify(categorias))
    }else{
        let categorias = JSON.parse(localStorage.getItem("Categorias"))
        categorias.push(categoria)
        localStorage.setItem("Categorias", JSON.stringify(categorias))
    }

    }

    leer();
  }

function crear(e){
    nombre = document.getElementById("name").value;
    description = document.getElementById("description").value;


    let categoria={
        nombre,
        description
    }

    if (localStorage.getItem("Categorias")==null) {
        let categorias = []
        categorias.push(categoria)
        localStorage.setItem("Categorias", JSON.stringify(categorias))
    }else{
        let categorias = JSON.parse(localStorage.getItem("Categorias"))
        categorias.push(categoria)
        localStorage.setItem("Categorias", JSON.stringify(categorias))
    }
    leer();
    document.getElementById("formulario").reset();
    console.log("Categoría Guardada Correctamente")
    e.preventDefault()
}

function leer(){
    let categorias = JSON.parse(localStorage.getItem("Categorias"));
    document.getElementById("tbody").innerHTML=""
    /*for(let i=0; i<dataCargada.length;i++){
      let nombre = dataCargada[i].name
      let description = dataCargada[i].desc

      document.getElementById("tbody").innerHTML+= 
     `<tr>
     <td>${nombre}</td>
     <td>${description}</td>
     <td><button class="btn btn-danger">Eliminar</button>
     <button class="btn btn-success">Editar</button></td>
      </tr>`
  }*/
    for(let i=0; i<categorias.length;i++){
        let nombre = categorias[i].nombre
        let description = categorias[i].description

        document.getElementById("tbody").innerHTML+= 
       `<tr>
       <td>${nombre}</td>
       <td>${description}</td>
       <td><button class="btn btn-danger" onClick="eliminar('${nombre}')">Eliminar</button>
       <button class="btn btn-success" onClick="editar('${nombre}')">Editar</button></td>
        </tr>`
    }
}

function editar(nombre){
    let categorias= JSON.parse(localStorage.getItem("Categorias"));
    for (let i=0;i<categorias.length;i++){
        if (categorias[i].nombre===nombre) {
            document.getElementById("body").innerHTML = `<div class="row">
            <div class="col-md-5">
                <div class="card">
                    <div class="card-header">
                        <h2>Editar Categoría</h2>
                    </div>
                    <div class="card-body">
                        <form>
                            <div class="form-group">
                                <input type="text" id="newname" class="form control" value="${categorias[i].nombre}">
                            </div>
                            <div class="form-group">
                                <textarea id="newdescription" class="form-control" requiered placeholder="${categorias[i].description}"></textarea>
                            </div>                            
                        </form>
                        <button class="btn btn-success" onClick="actualizar(${i})">Actualizar</button>
                        <a href="CRUDCategorys.html"><button class="btn btn-danger">Cancelar</button></a>
                    </div>
                </div>
            `
        }
    }
}

function actualizar(i){
    let categorias = JSON.parse(localStorage.getItem("Categorias"));
    categorias[i].nombre=document.getElementById("newname").value;
    categorias[i].description=document.getElementById("newdescription").value;
    if (categorias[i].nombre=="") {
        alert("No ha ingreado el nombre")
    }else{
        if (categorias[i].description=="") {
            alert("No ha ingreado la descripción corta")
        
        }else{
            localStorage.setItem("Categorias",JSON.stringify(categorias));
            vistaPrincipal();
        }
    }  
}

function eliminar(nombre){
    let categorias = JSON.parse(localStorage.getItem("Categorias"));
    for (let i=0;i<categorias.length;i++){
        if (categorias[i].nombre===nombre) {
            categorias.splice(i,1);
        }
    }
    localStorage.setItem("Categorias",JSON.stringify(categorias));
    leer();
}

function vistaPrincipal(){
    document.getElementById("body").innerHTML =`<div class="row">
    <div class="col-md-4">
      <div class="card">
        <div class="card-header">
          <h2>Agregar Categorias</h2>
        </div>
        <div class="card-body">
          <form id="formulario">
            <div class="form-group">
              <input
                type="text"
                id="name"
                class="form control"
                placeholder="Ingresa Nombre"
              />
            </div>
            <div class="form-group">
              <textarea
                id="description"
                class="form-control"
                placeholder="Ingresar Descripción"
              ></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Agregar</button>
          </form>
        </div>
      </div>
    </div>
    <div class="container-fluid">
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Descripción</th>
          </tr>
        </thead>
        <tbody id="tbody"></tbody>
      </table>
    </div>
  </div>
    `
    leer();
}

leer();