document.getElementById("formulario").addEventListener("submit",crear);

var dataCargada =[{
  name: "Sabritas Original",
  precio:"22",
  desc:"Sabritas Original, papas fritas con sal (bolsa de 45 gramos)",
  imagen:"https://imgur.com/3Bmssx1.jpeg",
  desl:"Sabritas Originales son unas ricas papas saladas que te dan todo el sabor tradicional de Sabritas. Su sencillo sabor las hace ideales para complementar tus recetas de botanas y una de las botanas saladas más populares.",
  categoría:"Botanas"
},
{
  name:"Arroz Verde Valle",
  precio:"38",
  desc:"Arroz Verde Valle súper extra 1 kg",
  imagen:"https://imgur.com/BT53dX3.jpeg",
  desl:"Consiga el arroz más blanco, entero y esponjadito con el Arroz Súper Extra Verde Valle. Prepárelo como usted prefiera y dele ese sazón especial, el Arroz Super Extra Verde Valle es ideal para cualquier tipo de preparación. Le tomará solo 25 minutos prepararlo y tenerlo listo para deleitar su paladar. Es un arroz de la variedad grano largo y siendo ideal para todo tipo de platillos, es el más común en México y su calidad es “SUPER EXTRA” ya que contiene más del 95% de granos enteros.",
  categoría:"Arroz, Frijol y Semillas"
},
{
  name:"Frijol Verde Valle",
  precio:"37",
  desc:"Frijol Verde Valle súper extra 1 kg",
  imagen:"https://imgur.com/6swvWmc.jpeg",
  desl:"5 décadas de experiencia de respaldo, los frijoles negros Verde Valle serán la mejor opción para realizar sus preparaciones. Estos frijoles de color negro son ideales para cualquier receta y le darán un sabor espectacular a sus platillos.",
  categoría:"Arroz, Frijol y Semillas"
},
{
  name:"Papel Higiénico Suave",
  precio:"168",
  desc:"Paquete de 48 rollos de papel Marca Suave Cuidado Completo",
  imagen:"https://imgur.com/hWsjPfP.jpeg",
  desl:"Papel higiénico suavel de 48 rollos, con 213 hojas dobles por cada rollo, producto de alta calidad no acepte imitaciones.",
  categoría:"Limpieza del Hogar"
},
{
  name:"Salchichas Fud",
  precio:"42",
  desc:"Paquete de Salchichas de Pavo de 1 Kg. de la marca FUD",
  imagen:"https://imgur.com/MIS1XP6.jpeg",
  desl:"Disfruta de una rica comida incorporando a tus platillos, salchichas de pavo Fud, por su tamaño son ideales para preparar hot dogs y compartir con toda la familia, aparte son una fuente de proteína. Dale gusto a todos en casa.",
  categoría:"Carnes Frías"
},
{
  name:"Azúcar Great Value",
  precio:"42",
  desc:"Con una textura fina que se disuelve fácilmente - Ideal para darle a tus alimentos el sabor dulce que tanto te gusta",
  imagen:"https://imgur.com/RAmVr1B.jpeg",
  desl:"Sus características únicas le brindan la versatilidad necesaria para poderse utilizar en cualquier tipo de postre bebida Conserva todos los nutrientes vitaminas y minerales de caña del azúcar No contienen ningún ingrediente artificial Endulzante de caña 100 natural",
  categoría:"Azúcar y postres"
},
{
  name:"Galletas María 3 Rollos",
  precio:"42",
  desc:"Son galletas de bajo precio y relativo bajo contenido en grasa y azúcar. En principio son redondas y llevan el nombre grabado en un lado",
  imagen:"https://imgur.com/SsAQLov.jpeg",
  desl:"El delicioso sabor de tus galletas preferidas, Marías Gamesa en presentación de 60 g. Con esta presentación podrás llevar contigo el sabor de tus galletas preferidas en cualquier momento del día Disfrútalas solas, con un vaso de leche o como tú lo prefieras. Contiene Ácido Fólico, Zinc, Hierro, Calcio, Vitamina A y Vitamina B, podrás consumir parte de los micro nutrimentos dentro de una alimentación correcta.",
  categoría:"Galletas"
},
{
  name:"Fabuloso Fresca Lavanda",
  precio:"28",
  desc:"Producto de Limpieza de 2L con fragancia a Fresca Lavanda. Antibacterial y Antiviral",
  imagen:"https://imgur.com/KZQYcsl.jpeg",
  desl:"Con el delicioso aroma del limpiador líquido Fabuloso lavanda sentirás una relajante sensación en tu hogar que permanecerá por más tiempo, déjate invadir por una experiencia de limpieza y fragancia única.",
  categoría:"Limpieza del Hogar"
},
{
  name:"Lechera",
  precio:"35",
  desc:"Leche condensada Nestlé La Lechera original 375 g a un súper precio.",
  imagen:"https://i.imgur.com/4qXl7Bf.jpeg",
  desl:"Con el delicioso aroma del limpiador líquido Fabuloso lavanda sentirás una relajante sensación en tu hogar que permanecerá por más tiempo, déjate invadir por una experiencia de limpieza y fragancia única.",
  categoría:"Leche"
},
{
  name:"Pan Bimbo",
  precio:"48",
  desc:"El pan blanco Bimbo, es un pan de caja adicionado para darle a toda tu familia un alimento saludable en cada una de sus comidas.",
  imagen:"https://imgur.com/5oGcQDa.jpeg",
  desl:"Prueba el rico Pan Blanco Bimbo Grande es ideal para preparar un sabroso desayuno, lunch o cena. Es perfecto para hacer deliciosos sándwiches para toda la familia en cualquier momento del día. No tiene sellos de advertencia. Sin jarabe de maíz de alta fructosa. Hazlo como quieras. Haz Sándwich. Empaque biodegradable. El pan del osito",
  categoría:"Pan"
}
]

//fetch("./Productos.json").then(response=>{
  //return response.json();
//}).then(jsondata => console.log(jsondata))
function crear(e){
    nombre = document.getElementById("name").value;
    precio = document.getElementById("precio").value;
    description = document.getElementById("description").value;
    imagen = document.getElementById("image").value;
    desc = document.getElementById("desc").value;
    category = document.getElementById("category").value;

    let product={
        nombre,
        precio,
        description,
        imagen,
        desc,
        category
    }

    if (localStorage.getItem("Productos")==null) {
        let products = []
        products.push(product)
        localStorage.setItem("Productos", JSON.stringify(products))
    }else{
        let products = JSON.parse(localStorage.getItem("Productos"))
        products.push(product)
        localStorage.setItem("Productos", JSON.stringify(products))
    }
    leerBasic();
    document.getElementById("formulario").reset();
    console.log("Producto Guardado Correctamente")
    e.preventDefault()
}

function leerBasic(){
  let productos = JSON.parse(localStorage.getItem("Productos"));
  /*document.getElementById("tbody").innerHTML=""
  for(let i=0; i<dataCargada.length;i++){
      let nombre = dataCargada[i].name
      let precio = dataCargada[i].precio
      let description = dataCargada[i].desc
      let imagen = dataCargada[i].imagen
      let desc = dataCargada[i].desl
      let category = dataCargada[i].categoría

      document.getElementById("tbody").innerHTML+= 
     `<tr>
     <td>${nombre}</td>
     <td>$${precio}</td>
     <td>${description}</td>
     <td><img src="${imagen}" alt="productoImagen" width="100" height="100"></td>
     <td>${desc}</td>
     <td>${category}</td>
     <td><button class="btn btn-danger")">Eliminar</button>
     <button class="btn btn-success" )">Editar</button></td>
      </tr>`
  }*/
  for(let i=0; i<productos.length;i++){
    let nombre = productos[i].nombre
    let precio = productos[i].precio
    let description = productos[i].description
    let imagen = productos[i].imagen
    let desc = productos[i].desc
    let category = productos[i].category

    document.getElementById("tbody").innerHTML+= 
   `<tr>
   <td>${nombre}</td>
   <td>$${precio}</td>
   <td>${description}</td>
   <td><img src="${imagen}" alt="productoImagen" width="100" height="100"></td>
   <td>${desc}</td>
   <td>${category}</td>
   <td><button class="btn btn-danger" onClick="eliminar('${nombre}')">Eliminar</button>
   <button class="btn btn-success" onClick="editar('${nombre}')">Editar</button></td>
    </tr>`
}
}

function leer(){
    let productos = JSON.parse(localStorage.getItem("Productos"));
    document.getElementById("tbody").innerHTML=""
    for(let i=0; i<productos.length;i++){
        let nombre = productos[i].nombre
        let precio = productos[i].precio
        let description = productos[i].description
        let imagen = productos[i].imagen
        let desc = productos[i].desc
        let category = productos[i].category

        document.getElementById("tbody").innerHTML+= 
       `<tr>
       <td>${nombre}</td>
       <td>$${precio}</td>
       <td>${description}</td>
       <td><img src="images/${imagen}" alt="productoImagen" width="100" height="100"></td>
       <td>${desc}</td>
       <td>${category}</td>
       <td><button class="btn btn-danger" onClick="eliminar('${nombre}')">Eliminar</button>
       <button class="btn btn-success" onClick="editar('${nombre}')">Editar</button></td>
        </tr>`
    }
}

function editar(nombre){
    let productos= JSON.parse(localStorage.getItem("Productos"));
    for (let i=0;i<productos.length;i++){
        if (productos[i].nombre===nombre) {
            document.getElementById("body").innerHTML = `<div class="row">
            <div class="col-md-5">
                <div class="card">
                    <div class="card-header">
                        <h2>Editar Producto</h2>
                    </div>
                    <div class="card-body">
                        <form>
                            <div class="form-group">
                                <input type="text" id="newname" class="form control" value="${productos[i].nombre}">
                            </div>
                            <div class="form-group">
                                <input type="number" id="newprecio" class="form control" value="${productos[i].precio}">
                            </div>
                            <div class="form-group">
                                <textarea id="newdescription" class="form-control" requiered placeholder="${productos[i].description}"></textarea>
                            </div>
                            <div class="form-group">
                                <input type="text" id="newimage" class="form control" value="${productos[i].imagen}">
                            </div>
                            <div class="form-group">
                                <textarea id="newdesc" class="form-control" requiered placeholder="${productos[i].desc}"></textarea>
                            </div>
                            <div class="form-group">
                                <input type="text" id="newcategory" class="form control" value="${productos[i].category}">
                            </div>
                            
                        </form>
                        <button class="btn btn-success" onClick="actualizar(${i})">Actualizar</button>
                        <a href="CRUDProducts.html"><button class="btn btn-danger">Cancelar</button></a>
                    </div>
                </div>
            `
        }
    }
}

function actualizar(i){
    let productos = JSON.parse(localStorage.getItem("Productos"));
    productos[i].nombre=document.getElementById("newname").value;
    productos[i].precio=document.getElementById("newprecio").value;
    productos[i].description=document.getElementById("newdescription").value;
    productos[i].imagen=document.getElementById("newimage").value;
    productos[i].desc=document.getElementById("newdesc").value;
    productos[i].category=document.getElementById("newcategory").value;
    if (productos[i].nombre=="") {
        alert("No ha ingreado el nombre")
    }else{
        if (productos[i].precio=="") {
            alert("No ha ingreado el precio")
        }else{
            if (productos[i].description=="") {
                alert("No ha ingreado la descripción corta")
            }else{
                if (productos[i].imagen=="") {
                    alert("No ha ingreado la imagen")
                }else{
                    if (productos[i].desc=="") {
                        alert("No ha ingreado la descripción larga")
                    }else{
                        if (productos[i].category=="") {
                            alert("No ha ingreado la categoría")
                        }else{
                            localStorage.setItem("Productos",JSON.stringify(productos));
                            vistaPrincipal();
                        }
                    }
                }
            }
        }
    }  
}

function agregarBasicos(){
  for (let i=0;i<dataCargada.length;i++){
    nombre = dataCargada[i].name;
    precio = dataCargada[i].precio;
    description = dataCargada[i].desc;
    imagen = dataCargada[i].imagen;
    desc = dataCargada[i].desl;
    category = dataCargada[i].categoría;

    let product={
        nombre,
        precio,
        description,
        imagen,
        desc,
        category
    }

    if (localStorage.getItem("Productos")==null) {
        let products = []
        products.push(product)
        localStorage.setItem("Productos", JSON.stringify(products))
    }else{
        let products = JSON.parse(localStorage.getItem("Productos"))
        products.push(product)
        localStorage.setItem("Productos", JSON.stringify(products))
    }
  }
}

function eliminar(nombre){
    let productos = JSON.parse(localStorage.getItem("Productos"));
    for (let i=0;i<productos.length;i++){
        if (productos[i].nombre===nombre) {
            productos.splice(i,1);
        }
    }
    localStorage.setItem("Productos",JSON.stringify(productos));
    leerBasic();
}

function vistaPrincipal(){
    document.getElementById("body").innerHTML =`<div class="row">
    <div class="col-md-4">
      <div class="card">
        <div class="card-header">
          <h2>Agregar Productos</h2>
        </div>
        <div class="card-body">
          <form id="formulario">
            <div class="form-group">
              <input
                type="text"
                id=name
                class="form control"
                placeholder="Ingresa Nombre"
              />
            </div>
            <div class="form-group">
              <input
                type="number"
                id=precio
                class="form control"
                placeholder="Ingresa Precio"
              />
            </div>
            <div class="form-group">
              <textarea
                id="description"
                class="form-control"
                placeholder="Ingresar descripción corta"
              ></textarea>
            </div>
            <div class="form-group">
              <input
                type="text"
                id="image"
                class="form control"
                placeholder="Ingresa Imagen"
              />
            </div>
            <div class="form-group">
              <textarea
                id=desc
                class="form-control"
                placeholder="Ingresar descripción Larga"
              ></textarea>
            </div>
            <div class="form-group">
              <input
                type="text"
                id="category"
                class="form control"
                placeholder="Ingresa Categoría"
              />
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
            <th scope="col">Precio</th>
            <th scope="col">Desc. Corta</th>
            <th scope="col">Imagen</th>
            <th scope="col">Desc. Larga</th>
            <th scope="col">Categoría</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody id="tbody">
        </tbody>
      </table>
    </div>
  </div>
    `
    leerBasic();
}

leerBasic();