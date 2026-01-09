import { EventListener } from "./event-listener.interface";

export class EventManager {
    //Almacena los suscriptores.
    private listeners: Map<string, EventListener[]> = new Map();

    constructor() {
        //Inicializamos las listas vacías para los tipos de eventos soportados.
        this.listeners.set("open", []);
        this.listeners.set("save", []);
    }

    //Método para agregar un nuevo suscriptor a un tipo de evento específico.
    subscribe(eventType: string, listener: EventListener): void {
        const users = this.listeners.get(eventType);
        if (users) {
            users.push(listener);
        }
    }

    // Método para eliminar un suscriptor de la lista.
    unsubscribe(eventType: string, listener: EventListener): void {
        const users = this.listeners.get(eventType);
        if (users) {
            const index = users.indexOf(listener);
            if (index !== -1) {
                users.splice(index, 1);
            }
        }
    }

    // Recorre la lista de suscriptores del evento dado y ejecuta su método 'update'.
    notify(eventType: string, data: string): void {
        const users = this.listeners.get(eventType);
        if (users) {
            users.forEach(listener => listener.update(data));
        }
    }
}