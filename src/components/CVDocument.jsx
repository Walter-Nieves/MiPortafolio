// Importamos los componentes necesarios de la librería @react-pdf/renderer
// - Document: representa el PDF completo
// - Page: cada página del documento
// - Text: para mostrar texto
// - View: contenedor similar a un <div>
// - StyleSheet: para definir estilos como en CSS
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

// =============================
// 🎨 Estilos del PDF
// =============================
// Definimos estilos reutilizables para dar formato al documento.
// Estos estilos funcionan parecido a CSS pero están adaptados a react-pdf.
const styles = StyleSheet.create({
  page: { padding: 32, fontSize: 11, fontFamily: "Helvetica" }, // Estilo general de la página

  headerName: { fontSize: 16, marginBottom: 8, fontWeight: 700 }, // Nombre grande con espacio debajo
  subtitle: { fontSize: 11, marginBottom: 8 }, // Subtítulo debajo del nombre
  small: { fontSize: 10, color: "#444", marginBottom: 6 }, // Texto pequeño con color gris

  sectionTitle: {
    fontSize: 12,              // Tamaño de letra para los títulos de sección
    marginTop: 14,             // Espacio arriba
    marginBottom: 6,           // Espacio abajo
    fontWeight: 700,           // Negrita
    borderBottom: "1px solid #000", // Línea inferior
    paddingBottom: 2,          // Espacio entre texto y la línea
  },

  listItem: { marginBottom: 4, lineHeight: 1.4 }, // Estilo de ítems de lista (• texto)
  muted: { color: "#333", marginBottom: 6 },      // Texto atenuado (ejemplo: fechas)
});

// =============================
// 🌐 Traducciones de los títulos
// =============================
// Creamos un objeto con las etiquetas en español (es) e inglés (en).
// Dependiendo del idioma, se seleccionará la versión correcta.
const labels = {
  es: {
    profile: "Perfil Profesional",
    experience: "Experiencia Laboral",
    education: "Formación Académica",
    training: "Formación complementaria actual",
    projects: "Proyectos personales y en formación",
  },
  en: {
    profile: "Professional Profile",
    experience: "Work Experience",
    education: "Education",
    training: "Ongoing Complementary Training",
    projects: "Personal and Training Projects",
  },
};

// =============================
// 📄 Componente CVDocument
// =============================
// Este componente recibe:
// - data: la información de la hoja de vida (persona, experiencia, etc.)
// - language: el idioma actual ("es" o "en")
// Y genera un PDF con toda la estructura.
export default function CVDocument({ data, language }) {
  // Extraemos del objeto "data.cv" las diferentes secciones
  const { persona, perfil, experiencia, educacion, formacionActual, proyectos } = data.cv;

  // Seleccionamos las etiquetas correctas dependiendo del idioma
  const t = labels[language] || labels.es;

  // Retornamos el documento PDF
  return (
    // Documento principal, con el título que aparecerá en las propiedades del PDF
    <Document title={`${persona.nombre} - CV`}>
      {/* Definimos una página en formato A4 */}
      <Page size="A4" style={styles.page}>
        
        {/* ====== ENCABEZADO ====== */}
        <View>
          <Text style={styles.headerName}>{persona.nombre}</Text> {/* Nombre en grande */}
          <Text style={styles.subtitle}>{persona.titulo}</Text>   {/* Título profesional */}
          <Text style={styles.small}>
            {persona.telefono} • {persona.email}                  {/* Teléfono y correo */}
          </Text>
          <Text style={styles.small}>{persona.documento}</Text>   {/* Documento de identidad */}
        </View>

        {/* ====== PERFIL ====== */}
        <Text style={styles.sectionTitle}>{t.profile}</Text> {/* Título de la sección */}
        <View>
          {perfil.map((p, idx) => (
            // Cada punto de perfil se representa como una lista con un "•"
            <Text key={idx} style={styles.listItem}>
              • {p}
            </Text>
          ))}
        </View>

        {/* ====== EXPERIENCIA ====== */}
        <Text style={styles.sectionTitle}>{t.experience}</Text>
        <View>
          {experiencia.map((exp, i) => (
            <View key={i} style={{ marginBottom: 10 }}>
              {/* Empresa y cargo en negrita */}
              <Text style={{ fontWeight: 700, marginBottom: 4 }}>
                {exp.empresa} — {exp.cargo}
              </Text>

              {/* Fechas (si existen) */}
              {(exp.desde || exp.hasta) && (
                <Text style={styles.muted}>
                  {[exp.desde, exp.hasta].filter(Boolean).join(" – ")}
                </Text>
              )}

              {/* Lista de tareas realizadas */}
              {exp.tareas?.map((tarea, j) => (
                <Text key={j} style={styles.listItem}>
                  • {tarea}
                </Text>
              ))}
            </View>
          ))}
        </View>

        {/* ====== EDUCACIÓN ====== */}
        <Text style={styles.sectionTitle}>{t.education}</Text>
        <View>
          {educacion.map((e, idx) => (
            <View key={idx} style={{ marginBottom: 6 }}>
              <Text style={{ fontWeight: 700 }}>{e.institucion}</Text> {/* Institución */}
              <Text style={styles.muted}>
                {e.nivel} — {e.titulo} {/* Nivel académico y título */}
              </Text>
            </View>
          ))}
        </View>

        {/* ====== FORMACIÓN COMPLEMENTARIA ====== */}
        <Text style={styles.sectionTitle}>{t.training}</Text>
        <View>
          {formacionActual.map((f, idx) => (
            <Text key={idx} style={styles.listItem}>
              • {f}
            </Text>
          ))}
        </View>

        {/* ====== PROYECTOS ====== */}
        <Text style={styles.sectionTitle}>{t.projects}</Text>
        <View>
          {proyectos.map((p, idx) => (
            <Text key={idx} style={styles.listItem}>
              • {p}
            </Text>
          ))}
        </View>
      </Page>
    </Document>
  );
}
