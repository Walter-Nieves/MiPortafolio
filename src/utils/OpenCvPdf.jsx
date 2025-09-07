// Importamos la función "pdf" desde la librería @react-pdf/renderer
// Esta función nos permite renderizar un componente React (como CVDocument)
// en diferentes formatos: Blob, base64, archivo, etc.
import { pdf } from "@react-pdf/renderer";

// Importamos el componente que genera el contenido del PDF (CVDocument)
import CVDocument from "../components/CVDocument.jsx";

// 🚀 Función asíncrona que se encarga de generar y abrir el CV en PDF
// Recibe como parámetros:
// - contenido: todos los datos de la hoja de vida (persona, experiencia, etc.)
// - language: idioma seleccionado ("es" o "en")
export async function openCvPdf(contenido, language) {
  
  // 📄 Generamos un "Blob" (archivo en memoria) a partir del componente CVDocument
  // pdf(<Componente />) convierte el documento React en un PDF real
  // .toBlob() lo guarda en memoria como un objeto binario (Blob)
  const blob = await pdf(<CVDocument data={contenido} language={language} />).toBlob();
  
  // 🔗 Creamos una URL temporal que apunta al Blob generado
  // Esto nos permite abrir o descargar el archivo como si fuera un link normal
  const url = URL.createObjectURL(blob);

  // 🌐 Intentamos abrir el PDF en una nueva pestaña del navegador
  const win = window.open(url);

  // ❌ Si el navegador bloquea el popup o no se puede abrir en una pestaña:
  if (!win) {
    // Creamos un enlace <a> dinámicamente
    const a = document.createElement("a");
    // Le asignamos la URL temporal como "href"
    a.href = url;
    // Nombre del archivo cuando se descargue
    a.download = "Walter_Nieves_CV.pdf";
    // Insertamos el enlace en el DOM
    document.body.appendChild(a);
    // Simulamos un click para que inicie la descarga automáticamente
    a.click();
    // Eliminamos el enlace del DOM después de usarlo
    a.remove();
  }

  // 🧹 Limpiamos memoria eliminando la URL temporal después de 60 segundos
  // Esto evita fugas de memoria porque los Blob ocupan espacio en RAM
  setTimeout(() => URL.revokeObjectURL(url), 60_000);
}
