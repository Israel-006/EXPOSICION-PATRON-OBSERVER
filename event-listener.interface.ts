// Define una interfaz común para todos los suscriptores.
// Esto es crucial para el desacoplamiento: El Editor no necesita saber
// si el suscriptor es un Email, un Log o una Base de Datos.
// Solo necesita saber que tiene un método "update".
export interface EventListener { //La identidad del observer
    // Método que será invocado por el notificador cuando ocurra un evento.
    update(filename: string): void;
}