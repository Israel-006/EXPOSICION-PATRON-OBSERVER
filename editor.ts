import { EventManager } from "./event-manager";

export class Editor {
    // Propiedad pública que da acceso al gestor de eventos.
    // Los clientes usarán 'editor.events.subscribe(...)' para escuchar.
    public events: EventManager;
    private file: string = "";

    constructor() {
        // Al nacer, el editor crea su propio gestor de eventos.
        this.events = new EventManager();
    }

    openFile(path: string): void {
        this.file = path;
        console.log(`[Editor] Abriendo archivo: ${this.file}`);
        
        // Notificacion:
        // En lugar de llamar a una clase específica (como Logger),
        // el editor simplemente avisa a su gestor: "Ocurrió 'open'".
        // El editor NO sabe quién recibirá este mensaje.
        this.events.notify("open", this.file);
    }

    // Lógica de negocio: Guardar un archivo.
    saveFile(): void {
        if (this.file) {
            console.log(`[Editor] Guardando archivo: ${this.file}`);
            
            // Notificacion:
            // Avisamos que ocurrió el evento 'save'.
            this.events.notify("save", this.file);
        }
    }
}