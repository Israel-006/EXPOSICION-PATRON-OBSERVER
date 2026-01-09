import { Editor } from "./editor";
import { EmailAlertsListener, LoggingListener } from "./listeners";

// Creamos el sujeto (quien dispara eventos) y los observadores (quienes escuchan).
const editor = new Editor();
const logger = new LoggingListener("/path/to/log.txt");
const emailAlerts = new EmailAlertsListener("admin@empresa.com");

// Aquí es donde "cableamos" la aplicación.
// Decidimos que el logger escuche cuando se abre un archivo ('open').
editor.events.subscribe("open", logger);

// Decidimos que las alertas de correo escuchen cuando se guarda ('save').
// Fíjate que el email NO escuchará el evento 'open', solo 'save'.
editor.events.subscribe("save", emailAlerts);

// Ejecucion
console.log("--- INICIO DEL PROGRAMA ---");

// El editor notificará 'open' -> Solo el 'logger' reaccionará.
editor.openFile("reporte_final.txt");

console.log("...");

// El editor notificará 'save' -> El 'emailAlerts' reaccionará.
editor.saveFile();

console.log("--- FIN DEL PROGRAMA ---");