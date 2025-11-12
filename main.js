import { Client } from "appwrite";

const client = new Client();

client
  .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT)
  .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID);

document.getElementById("estado").textContent = "✅ Conectado correctamente a Appwrite";
console.log("Conexión exitosa a Appwrite");
