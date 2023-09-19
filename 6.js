// Ejercicio 6:
// Una subasta o remate es una venta organizada basado en la competencia directa, y 
// generalmente pública, es decir, a aquel comprador que pague la mayor cantidad de 
// dinero o de bienes a cambio del producto.
// Hacer en JavaScript una simulación de subasta que cumpla con las siguientes 
// características:
// 1. Se podrá registrar los productos a subastar almacenados (id del producto, nombre 
// del producto, fecha y precio inicial de subasta).
// 2. Cada persona puede pujar por el producto que desea, indicando la fecha, el 
// producto y el valor ofrecido.
// 3. Se puede ver la lista de productos registrados.
// 4. La lista de ofertas por producto.
// 5. Seleccionar una oferta ganadora


class Producto {
    constructor(id, nombre, fecha, precioInicial) {
      this.id = id;
      this.nombre = nombre;
      this.fecha = fecha;
      this.precioInicial = precioInicial;
      this.ofertas = [];
    }
  
    agregarOferta(oferta) {
      this.ofertas.push(oferta);
    }
  
    obtenerOfertaGanadora() {
      if (this.ofertas.length === 0) {
        return null; 
      }
  
     
      const ofertasOrdenadas = this.ofertas.slice().sort((a, b) => b.valor - a.valor);
  
      return ofertasOrdenadas[0];
    }
  }
  
  
  class Oferta {
    constructor(fecha, producto, valor) {
      this.fecha = fecha;
      this.producto = producto;
      this.valor = valor;
    }
  }
  
  
  const productos = [
    new Producto(1, "Teléfono", "2023-10-01", 200),
    new Producto(2, "Laptop", "2023-10-05", 800),
    new Producto(3, "Tablet", "2023-10-03", 300),
  ];
  
  
  function registrarOferta(productoId, fecha, valor) {
    const producto = productos.find((p) => p.id === productoId);
    if (producto) {
      const oferta = new Oferta(fecha, producto, valor);
      producto.agregarOferta(oferta);
      console.log(`Oferta registrada para el producto "${producto.nombre}" por $${valor}.`);
    } else {
      console.log(`Producto con ID ${productoId} no encontrado.`);
    }
  }
  
  
  function verListaProductos() {
    console.log("Lista de productos en subasta:");
    productos.forEach((producto) => {
      console.log(`ID: ${producto.id}, Nombre: ${producto.nombre}, Precio Inicial: $${producto.precioInicial}`);
    });
  }
  
 
  function verOfertasPorProducto(productoId) {
    const producto = productos.find((p) => p.id === productoId);
    if (producto) {
      console.log(`Ofertas para el producto "${producto.nombre}":`);
      producto.ofertas.forEach((oferta) => {
        console.log(`Fecha: ${oferta.fecha}, Valor: $${oferta.valor}`);
      });
    } else {
      console.log(`Producto con ID ${productoId} no encontrado.`);
    }
  }
  

  function seleccionarOfertaGanadora(productoId) {
    const producto = productos.find((p) => p.id === productoId);
    if (producto) {
      const ofertaGanadora = producto.obtenerOfertaGanadora();
      if (ofertaGanadora) {
        console.log(`La oferta ganadora para el producto "${producto.nombre}" es de $${ofertaGanadora.valor}.`);
      } else {
        console.log(`No hay ofertas para el producto "${producto.nombre}".`);
      }
    } else {
      console.log(`Producto con ID ${productoId} no encontrado.`);
    }
  }
  
  
  registrarOferta(1, "2023-10-02", 250);
  registrarOferta(1, "2023-10-03", 280);
  verListaProductos();
  verOfertasPorProducto(1);
  seleccionarOfertaGanadora(1);
  