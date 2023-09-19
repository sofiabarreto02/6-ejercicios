// Ejercicio 2:
// El software que se desarrollará controlará un cajero automático (ATM) a través de una 
// simulación usando el lenguaje de programación JavaScript.
// • El cajero automático atenderá a un cliente a la vez. Se le pedirá al cliente 
// que inserte su documento de identidad y su pin de 4 dígitos, los cuales se 
// enviarán al banco para su validación como parte de cada transacción. El 
// cliente podrá entonces realizar una o más transacciones. El menú se 
// mostrará en la consola hasta que el cliente indique que no desea realizar 
// más transacciones.
// • El cajero automático debe ser capaz de proporcionar los siguientes servicios 
// al cliente:
// • Un cliente debe poder realizar un retiro de efectivo de cualquier cuenta 
// adecuada vinculada al documento de identidad, en múltiplos de $50000. Se 
// debe obtener la aprobación del banco antes de entregar efectivo.
// • Un cliente debe poder realizar un depósito en cualquier cuenta vinculada al 
// documento de identidad, consistente en efectivo y/o cheques. El cliente 
// ingresará el monto del depósito en el cajero automático e indicar si es 
// efectivo o cheque.
// • Un cliente debe poder realizar una transferencia de dinero entre dos 
// cuentas cualesquiera vinculadas a al documento de identidad. 
// • Un cliente debe poder realizar una consulta de saldo de cualquier cuenta 
// vinculada al documento de identidad.
// • El cajero automático comunicará al cliente los resultados de cada 
// transacción dependiendo de su tipo. Ejemplo “retiro exitoso, puede tomar x 
// dinero de la bandeja principal”
// • Si el banco determina que el PIN del cliente no es válido, se le pedirá al 
// cliente que vuelva a ingresar el PIN antes de que se pueda continuar con la 
// transacción. Si el cliente no puede ingresar correctamente el PIN después 
// de tres intentos saldrá de la aplicación. 
// • El cajero automático tendrá un panel de operador con un interruptor que 
// permitirá apagar o encender el cajero. 

// Datos de prueba para cuentas y PINs (debes usar una base de datos en un entorno real)
const cuentas = [
    { documento: "123456789", pin: "1234", saldo: 1000000 },
    { documento: "987654321", pin: "5678", saldo: 500000 },
  ];
  
  // Variable para controlar el estado del cajero automático
  let cajeroEncendido = true;
  
  // Función para validar el PIN del cliente
  function validarPIN(documento, pin) {
    const cuenta = cuentas.find((cuenta) => cuenta.documento === documento && cuenta.pin === pin);
    return cuenta;
  }
  
  // Función para realizar un retiro de efectivo
  function realizarRetiro(documento, monto) {
    const cuenta = cuentas.find((cuenta) => cuenta.documento === documento);
    if (!cuenta) {
      return "Cuenta no encontrada";
    }
  
    if (monto % 50000 !== 0) {
      return "El monto debe ser un múltiplo de $50000";
    }
  
    if (monto > cuenta.saldo) {
      return "Saldo insuficiente";
    }
  
    cuenta.saldo -= monto;
    return `Retiro exitoso. Puede tomar $${monto} de la bandeja principal.`;
  }
  
  // Función para realizar un depósito
  function realizarDeposito(documento, monto, tipo) {
    const cuenta = cuentas.find((cuenta) => cuenta.documento === documento);
    if (!cuenta) {
      return "Cuenta no encontrada";
    }
  
    if (tipo === "efectivo") {
      cuenta.saldo += monto;
    } else if (tipo === "cheque") {
      // Lógica para procesar cheques
    } else {
      return "Tipo de depósito no válido";
    }
  
    return "Depósito exitoso";
  }
  
  // Función para realizar una transferencia
  function realizarTransferencia(documento, destino, monto) {
    const cuentaOrigen = cuentas.find((cuenta) => cuenta.documento === documento);
    const cuentaDestino = cuentas.find((cuenta) => cuenta.documento === destino);
  
    if (!cuentaOrigen || !cuentaDestino) {
      return "Cuentas no encontradas";
    }
  
    if (monto > cuentaOrigen.saldo) {
      return "Saldo insuficiente";
    }
  
    cuentaOrigen.saldo -= monto;
    cuentaDestino.saldo += monto;
    return "Transferencia exitosa";
  }
  
  // Función para consultar saldo
  function consultarSaldo(documento) {
    const cuenta = cuentas.find((cuenta) => cuenta.documento === documento);
    if (!cuenta) {
      return "Cuenta no encontrada";
    }
  
    return `Saldo disponible: $${cuenta.saldo}`;
  }
  
  // Función principal para manejar las transacciones del cliente
  function manejarTransacciones() {
    const documento = prompt("Ingrese su documento de identidad:");
    const pin = prompt("Ingrese su PIN:");
  
    const cuenta = validarPIN(documento, pin);
  
    if (!cuenta) {
      return "PIN no válido. La aplicación se cerrará.";
    }
  
    while (cajeroEncendido) {
      const opcion = prompt(
        "Seleccione una opción:\n1. Retiro de efectivo\n2. Depósito\n3. Transferencia\n4. Consultar saldo\n5. Salir"
      );
  
      switch (opcion) {
        case "1":
          const montoRetiro = parseInt(prompt("Ingrese el monto a retirar:"));
          const resultadoRetiro = realizarRetiro(documento, montoRetiro);
          alert(resultadoRetiro);
          break;
        case "2":
          const montoDeposito = parseInt(prompt("Ingrese el monto a depositar:"));
          const tipoDeposito = prompt("Ingrese el tipo de depósito (efectivo/cheque):");
          const resultadoDeposito = realizarDeposito(documento, montoDeposito, tipoDeposito);
          alert(resultadoDeposito);
          break;
        case "3":
          const destinoTransferencia = prompt("Ingrese el documento de identidad del destinatario:");
          const montoTransferencia = parseInt(prompt("Ingrese el monto a transferir:"));
          const resultadoTransferencia = realizarTransferencia(documento, destinoTransferencia, montoTransferencia);
          alert(resultadoTransferencia);
          break;
        case "4":
          const saldo = consultarSaldo(documento);
          alert(saldo);
          break;
        case "5":
          return "Gracias por utilizar nuestros servicios. La aplicación se cerrará.";
        default:
          alert("Opción no válida");
      }
    }
  
    return "El cajero automático está apagado. La aplicación se cerrará.";
  }
  
  // Función para encender o apagar el cajero automático
  function cambiarEstadoCajero() {
    cajeroEncendido = !cajeroEncendido;
    const estado = cajeroEncendido ? "encendido" : "apagado";
    alert(`El cajero automático está ${estado}.`);
  }
  
  // Ejecutar la aplicación
  while (true) {
    const opcionOperador = prompt("Panel de operador:\n1. Encender cajero automático\n2. Apagar cajero automático\n3. Salir");
    if (opcionOperador === "1") {
      cambiarEstadoCajero();
      alert(manejarTransacciones());
    } else if (opcionOperador === "2") {
      cambiarEstadoCajero();
    } else if (opcionOperador === "3") {
      break;
    } else {
      alert("Opción no válida");
    }
  }
  