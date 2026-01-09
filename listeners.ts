import { EventListener } from "./event-listener.interface";

// Implementa la interfaz EventListener para asegurar compatibilidad.
export class EmailAlertsListener implements EventListener { //El actor del observer
    private email: string;

    constructor(email: string) {
        this.email = email;
    }

    // Implementación específica de la reacción: Enviar un correo.
    update(filename: string): void {
        console.log(`   >> [Email a ${this.email}]: ALERTA - El archivo '${filename}' ha sido modificado.`);
    }
}

// Reacciona de forma diferente al mismo evento .
export class LoggingListener implements EventListener { //El actor del observer
    private logFilename: string;

    constructor(logFilename: string) {
        this.logFilename = logFilename;
    }

    // Implementación específica de la reacción: Guardar registro.
    update(filename: string): void {
        console.log(`   >> [Log en ${this.logFilename}]: REGISTRO - Se ha realizado una operación sobre '${filename}'.`);
    }
}