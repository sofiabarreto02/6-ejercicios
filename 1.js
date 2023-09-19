// Ejercicio 1:
// Construya un algoritmo con JavaScript” para las estadísticas de atención de una 
// universidad teniendo en cuenta los siguientes requisitos: 
// 1. Hay dos módulos de atención: terminal para llamada telefónica y oficina.
// 2. El sistema brinda las estadísticas de todo el proceso de atención: 
// • Cantidad de usuarios atendidos.
// • Atendidos por día y especificación por segmento (Estudiante – docente) en 
// cada uno de los módulos de atención.
// • Se permite trasferir de módulo de atención y se debe generar estadística de 
// esta trasferencia

// Definimos dos módulos de atención
const moduloTelefono = {
    nombre: "Terminal para llamada telefónica",
    usuariosAtendidos: 0,
    usuariosPorSegmento: {
      Estudiante: 0,
      Docente: 0,
    },
    transferencias: 0,
  };
  
  const moduloOficina = {
    nombre: "Oficina",
    usuariosAtendidos: 0,
    usuariosPorSegmento: {
      Estudiante: 0,
      Docente: 0,
    },
    transferencias: 0,
  };
  
  
  function atenderUsuario(modulo, segmento) {
    modulo.usuariosAtendidos++;
    modulo.usuariosPorSegmento[segmento]++;
  }
  
  
  function transferirUsuario(origen, destino, segmento) {
    origen.usuariosAtendidos--;
    origen.usuariosPorSegmento[segmento]--;
    origen.transferencias++;
    
    destino.usuariosAtendidos++;
    destino.usuariosPorSegmento[segmento]++;
    destino.transferencias++;
  }
  
 
  atenderUsuario(moduloTelefono, "Estudiante");
  atenderUsuario(moduloOficina, "Docente");
  atenderUsuario(moduloOficina, "Estudiante");
  
  console.log("Estadísticas del módulo de llamada telefónica:");
  console.log("Usuarios atendidos:", moduloTelefono.usuariosAtendidos);
  console.log("Usuarios por segmento:", moduloTelefono.usuariosPorSegmento);
  console.log("Transferencias:", moduloTelefono.transferencias);
  
  console.log("\nEstadísticas del módulo de oficina:");
  console.log("Usuarios atendidos:", moduloOficina.usuariosAtendidos);
  console.log("Usuarios por segmento:", moduloOficina.usuariosPorSegmento);
  console.log("Transferencias:", moduloOficina.transferencias);
  