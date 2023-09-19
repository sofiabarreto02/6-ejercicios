// Ejercicio 4
// Se necesita simular en JavaScript la atención de clientes a través de la asignación de 
// turnos en un banco. Se debe usar arreglos o objetos dependiendo del algoritmo que 
// diseñe. Y tener en cuenta las siguientes restricciones y requisitos.
// • Hay tres tipos de clientes: cliente preferencial, cliente general y cliente que no 
// tiene cuenta en el banco
// • Hay dos tipos de atención: caja o asesoría.
// • Los de atención de caja se clasifican en depósitos y retiros.
// • El banco cuenta con 5 cajas, de las cuales la 1 y 2 están reservadas para retiros.
// • Aquellos clientes presenciales se atienden primero de los demás tipos.
// • La caja 5 es solo asesoría.
// • A medida que se atienden clientes se va liberando las cajas y distribuyendo entre 
// los usuarios de las colas.



const TIPO_CLIENTE = {
    PREFERENCIAL: "preferencial",
    GENERAL: "general",
    SIN_CUENTA: "sin cuenta",
  };
  
 
  const TIPO_ATENCION = {
    CAJA: "caja",
    ASESORIA: "asesoría",
  };
  
  
  const cajas = {
    caja1: { tipoAtencion: TIPO_ATENCION.CAJA, tipoOperacion: "retiro" },
    caja2: { tipoAtencion: TIPO_ATENCION.CAJA, tipoOperacion: "retiro" },
    caja3: { tipoAtencion: TIPO_ATENCION.CAJA, tipoOperacion: "depósito" },
    caja4: { tipoAtencion: TIPO_ATENCION.CAJA, tipoOperacion: "depósito" },
    caja5: { tipoAtencion: TIPO_ATENCION.ASESORIA },
  };
  
  
  const colas = {
    [TIPO_CLIENTE.PREFERENCIAL]: [],
    [TIPO_CLIENTE.GENERAL]: [],
    [TIPO_CLIENTE.SIN_CUENTA]: [],
  };
  
 
  function asignarTurno(tipoCliente, tipoAtencion) {
    colas[tipoCliente].push({ tipoAtencion });
  }
  
  
  function atenderCliente(caja) {
    for (const tipoCliente of Object.values(TIPO_CLIENTE)) {
      if (colas[tipoCliente].length > 0) {
        const cliente = colas[tipoCliente].shift();
        console.log(`Atendiendo a un cliente ${tipoCliente} en ${caja} (${cliente.tipoAtencion}).`);
        return;
      }
    }
    console.log(`No hay clientes en ${caja}.`);
  }
  
  
  asignarTurno(TIPO_CLIENTE.PREFERENCIAL, TIPO_ATENCION.CAJA);
  asignarTurno(TIPO_CLIENTE.GENERAL, TIPO_ATENCION.CAJA);
  asignarTurno(TIPO_CLIENTE.SIN_CUENTA, TIPO_ATENCION.CAJA);
  asignarTurno(TIPO_CLIENTE.GENERAL, TIPO_ATENCION.ASESORIA);
  
  atenderCliente("caja1");
  atenderCliente("caja2");
  atenderCliente("caja3");
  atenderCliente("caja4");
  atenderCliente("caja5");
  
