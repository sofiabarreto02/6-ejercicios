// Ejercicio 5
// Desarrollar en JavaScript los siguientes algoritmos que den solución a la problemática 
// planteada.
// Implementar una clase en JavaScript, la cual tenga los siguientes atributos y métodos.
// Atributos:
// ● Código.
// ● Descripción.
// ● Precio de compra.
// ● Precio de venta.
// ● Cantidad en bodega.
// ● Cantidad mínima requerida en bodega.
// ● Cantidad máxima de inventario permitida.
// ● Porcentaje de Descuento.
// Métodos:
// ● Solicitar pedido: devuelva true si debe solicitar el producto al proveedor y false en 
// caso contrario.
// ● Calcular total a pagar: devuelva la cantidad total a pagar al proveedor dado una 
// cantidad de unidades de compra.
// Adicionalmente se desea dos subclases para los siguientes tipos de productos:
// ● Prendas de vestir (como lo son blusas, jeans, camisas, etc.) el cual debe tener los 
// siguientes parámetros adicionales:
// ○ Talla: S, M, L, etc.
// ○ Permite planchado: verdadero o falso.
// ● Calzado (como lo son tenis, calzado formal, sandalias, etc.) el cual debe tener el 
// siguiente parámetro adicional:
// ○ Talla: 35, 36, 37, etc.
// Diseñar un programa que:
// ● Consulte el número de productos de tipo de prendas de vestir a manejar.
// ● Consulte el número de productos de tipo calzado a manejar.
// ● Cree en una estructura de datos (arrays, map, set), los productos de prendas de 
// vestir en el cual se guardarán las instancias de cada uno de ellos.
// ● Cree una estructura de datos (arrays, map, set) de productos de calzado en el cual 
// se guardarán las instancias de cada uno de ellos.

// Clase base Producto
class Producto {
    constructor(codigo, descripcion, precioCompra, precioVenta, cantidadBodega, cantidadMinima, cantidadMaxima, porcentajeDescuento) {
      this.codigo = codigo;
      this.descripcion = descripcion;
      this.precioCompra = precioCompra;
      this.precioVenta = precioVenta;
      this.cantidadBodega = cantidadBodega;
      this.cantidadMinima = cantidadMinima;
      this.cantidadMaxima = cantidadMaxima;
      this.porcentajeDescuento = porcentajeDescuento;
    }
  
    solicitarPedido() {
      return this.cantidadBodega < this.cantidadMinima;
    }
  
    calcularTotalAPagar(cantidadUnidadesCompra) {
      return cantidadUnidadesCompra * this.precioCompra;
    }
  }
  
  // Subclase PrendaVestir
  class PrendaVestir extends Producto {
    constructor(codigo, descripcion, precioCompra, precioVenta, cantidadBodega, cantidadMinima, cantidadMaxima, porcentajeDescuento, talla, permitePlanchado) {
      super(codigo, descripcion, precioCompra, precioVenta, cantidadBodega, cantidadMinima, cantidadMaxima, porcentajeDescuento);
      this.talla = talla;
      this.permitePlanchado = permitePlanchado;
    }
  }
  
  // Subclase Calzado
  class Calzado extends Producto {
    constructor(codigo, descripcion, precioCompra, precioVenta, cantidadBodega, cantidadMinima, cantidadMaxima, porcentajeDescuento, talla) {
      super(codigo, descripcion, precioCompra, precioVenta, cantidadBodega, cantidadMinima, cantidadMaxima, porcentajeDescuento);
      this.talla = talla;
    }
  }
  
  // Ejemplo de uso
  const productosPrendaVestir = [
    new PrendaVestir("PV001", "Blusa", 20, 35, 10, 5, 20, 0, "M", true),
    new PrendaVestir("PV002", "Jeans", 30, 50, 15, 6, 25, 0, "L", false),
  ];
  
  const productosCalzado = [
    new Calzado("C001", "Tenis", 40, 60, 8, 4, 15, 0, "38"),
    new Calzado("C002", "Zapatos Formales", 50, 80, 12, 6, 18, 0, "41"),
  ];

  console.log(`Número de productos de Prenda de Vestir: ${productosPrendaVestir.length}`);
console.log(`Número de productos de Calzado: ${productosCalzado.length}`);