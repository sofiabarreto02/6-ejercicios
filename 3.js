// Ejercicio 3:
// • Desarrollar en JavaScript un programa para la gestión reservas de un hotel, 
// el cual, debe tener las siguientes características y consideraciones:
// • Un cliente puede reservar cualquier tipo de habitación: individual, doble y 
// familiar.
// • Las habitaciones pueden ser para fumadores o no fumadores.
// • Las mascotas solo se aceptan en habitaciones familiares.
// • El hotel cuenta con 3 habitaciones de cada tipo.
// • No se puede exceder el número de personas por habitación: individual 2 
// personas, 4 personas para doble y 6 personas para familiar.
// • El hotel necesita una estadística de las reservas: nombre de quien reserva, 
// país de origen, número de personas, el periodo de la estadía, número de 
// personas que están ocupando el hotel y si el huésped trajo mascota.

const habitaciones = {
    individual: {
      disponibles: 3,
      capacidadMaxima: 2,
      fumadores: false,
    },
    doble: {
      disponibles: 3,
      capacidadMaxima: 4,
      fumadores: false,
    },
    familiar: {
      disponibles: 3,
      capacidadMaxima: 6,
      fumadores: false,
    },
  };
  
 
  const estadisticas = {
    reservas: [],
    personasOcupadas: 0,
  };
  
 
  function realizarReserva(tipo, fumador, numeroPersonas, periodoEstadia, nombre, pais, traeMascota) {
    if (!habitaciones[tipo]) {
      return "Tipo de habitación no válido";
    }
  
    if (numeroPersonas > habitaciones[tipo].capacidadMaxima) {
      return "Número de personas excede la capacidad máxima de la habitación";
    }
  
    if (tipo === "familiar" && !traeMascota) {
      return "Las mascotas son obligatorias en habitaciones familiares";
    }
  
    if (habitaciones[tipo].disponibles === 0) {
      return "Lo sentimos, no hay habitaciones disponibles de este tipo";
    }
  
    
    const reserva = {
      tipo,
      fumador,
      numeroPersonas,
      periodoEstadia,
      nombre,
      pais,
      traeMascota,
    };
  
    estadisticas.reservas.push(reserva);
    estadisticas.personasOcupadas += numeroPersonas;
    habitaciones[tipo].disponibles--;
  
    return "Reserva realizada con éxito";
  }
  
 
  const resultado = realizarReserva("individual", false, 2, "del 1 al 5 de octubre", "Juan Perez", "España", false);
  console.log(resultado);
  
 
  console.log("Estadísticas del hotel:");
  console.log("Habitaciones disponibles:");
  console.log(habitaciones);
  console.log("Reservas realizadas:");
  console.log(estadisticas.reservas);
  console.log("Personas ocupadas:", estadisticas.personasOcupadas);