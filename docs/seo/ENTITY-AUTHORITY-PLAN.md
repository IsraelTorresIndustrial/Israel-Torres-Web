# Plan de Autoridad Digital y Red de Entidades (Entity Authority Plan)
**Entidad Principal:** Israel Torres  
**Sitio Web:** [https://israel-torres-web.vercel.app/](https://israel-torres-web.vercel.app/)  
**Documento:** `docs/seo/ENTITY-AUTHORITY-PLAN.md`  
**Estado:** Activo / Rama `seo/growth-3.0`  
**Fecha:** Octubre 2026  

---

## 1. Fundamentos de Autoridad de Entidad (E-E-A-T)

Google evalúa la legitimidad de una persona y su sitio web mediante las señales de **Experiencia, Expertise, Autoridad y Confianza (E-E-A-T)**. Para una marca personal técnica, esto no se logra mediante enlaces artificiales o compra de dominios expirados, sino mediante la **red de correlación semántica**:

```
                       ┌─────────────────────────┐
                       │      Google Index &     │
                       │     Knowledge Graph     │
                       └────────────┬────────────┘
                                    │
           ┌────────────────────────┼────────────────────────┐
           ▼                        ▼                        ▼
┌─────────────────────┐  ┌─────────────────────┐  ┌─────────────────────┐
│    Sitio Web Oficial│  │  Perfiles Oficiales │  │  Ecosistema Externo │
│   israel-torres-web │  │    LinkedIn/GitHub  │  │  USS, Artefact, Acid│
│   (Nodo Primario)   │  │   (Nodos Canónicos) │  │  (Nodos de Respaldo)│
└──────────┬──────────┘  └──────────┬──────────┘  └──────────┬──────────┘
           │                        │                        │
           └────────────────────────┴────────────────────────┘
                       Consenso Factual Unificado
```

Cuando los motores constatan que las afirmaciones de la web oficial coinciden con registros independientes en LinkedIn, GitHub, repositorios de código y registros institucionales, la probabilidad de alucinación se reduce a cero y la autoridad de la entidad se consolida.

---

## 2. Red Canónica de Perfiles (Nodos Primarios `sameAs`)

La entidad `Person` en la web declara dos perfiles canónicos mediante la propiedad `sameAs`. La sincronización de estos perfiles debe ser bidireccional y exacta:

### 2.1 LinkedIn (`https://www.linkedin.com/in/israeltorresl`)

LinkedIn es el ancla de verificación corporativa más potente para Google en el mundo occidental. Cualquier divergencia entre la web y LinkedIn debilita la confianza algorítmica.

*Acciones de optimización recomendadas:*
1. **Titular Principal (Headline):**
   - *Texto sugerido:* `Ingeniero Civil Industrial | Data Consultant en Artefact | Próximo Senior Product Owner en Acid Labs (Nov 2026) | Estrategia, IA Aplicada & Medios de Pago`
   - *Objetivo:* Sincronización 1:1 con el `headline` y `positioning` del sitio web.
2. **Enlace en el Perfil de Contacto:**
   - Incorporar `https://israel-torres-web.vercel.app/` en el campo "Sitio web" (categoría Personal / Portafolio).
3. **Acerca de (Summary):**
   - Incorporar la tesis central: *«Estructuro problemas complejos y los convierto en propuestas que se pueden ver, probar e iterar»*.
   - Mencionar explícitamente los pilares: Medios de pago y banca (iniciativas regionales Visa), prototipado rápido con IA y coordinación cross-functional.
4. **Experiencia Laboral:**
   - **Artefact Spanish LATAM:** Data Consultant (Abril 2026 – Presente). Describir iniciativas de customer lifecycle y copilotos comerciales.
   - **Acid Labs:** Próxima incorporación planificada para Noviembre 2026 como Product Owner Senior (añadir como hito o anuncio profesional formal sin solapar como empleo simultáneo activo).
5. **Certificaciones:**
   - Agregar enlaces directos a las credenciales oficiales de Google Cloud (Gemini Enterprise Agent Development), Google Project Management y CertiProf SFPC.

### 2.2 GitHub (`https://github.com/IsraelTorresIndustrial`)

GitHub representa el ancla de competencia técnica, validando la faceta de **Vibecoding, ingeniería y prototipado asistido por IA**.

*Acciones de optimización recomendadas:*
1. **Bio del Perfil de GitHub:**
   - *Texto sugerido:* `Ingeniero Civil Industrial | Product Owner & Applied AI Builder. Santiago, Chile.`
   - *URL del sitio web en GitHub:* Configurar `https://israel-torres-web.vercel.app/` en el campo público de URL.
2. **README de Perfil (`IsraelTorresIndustrial/IsraelTorresIndustrial`):**
   - Crear un `README.md` de presentación destacando:
     - Enlace al sitio web oficial.
     - Áreas de interés: Architecturas RAG, automatización con LLMs, motores declarativos (Python-pptx), herramientas de gestión ágil.
     - Proyectos destacados con enlace a los casos de estudio de la web.
3. **Repositorios Públicos de Demostración:**
   - Mantener públicos repositorios demostrativos de herramientas no confidenciales (por ejemplo, utilitarios de formateo de datos, scripts de evaluación de prompts o herramientas de productividad abiertas).

---

## 3. Nodos Institucionales y Académicos de Respaldo

Los motores de búsqueda ponderan con especial fuerza los dominios de educación superior (`.edu`, `.cl`) y organizaciones formales:

### 3.1 Universidad San Sebastián (USS)
- **Registro Académico:** Título de Ingeniero Civil Industrial y Diplomado en Finanzas.
- **Correo Institucional Activo:** `itorresl@correo.uss.cl` (utilizado como punto de contacto formal en el schema y web).
- **Red de Exalumnos:** Participar en el directorio o perfil de egresados de la USS, vinculando el nombre con la web personal y la escuela de ingeniería.
- **Experiencia en Gestión Ágil USS:** Destacar la experiencia como Scrum Master liderando la plataforma de coordinación de más de 30 equipos simultáneos (2025–2026).

### 3.2 Artefact Spanish LATAM (ex-Brain Food)
- **Presencia Corporativa:** Figura en el equipo de consultoría analítica y de datos.
- **Contenidos de Industria:** Oportunidad de coautoría o mención en whitepapers, artículos de LinkedIn de Artefact o casos de éxito metodológicos en medios de pago y consultoría estratégica.

### 3.3 Acid Labs (Hito Noviembre 2026)
- **Ecosistema Tech:** Acid Labs cuenta con una fuerte comunidad de desarrollo, producto y diseño en Chile y Latinoamérica.
- **Oportunidades Futuras:** Participación en blogs técnicos de Acid Labs, webinars sobre Product Ownership y meetups de producto.

---

## 4. Ecosistema de Comunidades Técnicas y Divulgación (Digital PR Ético)

Para incrementar la autoridad de dominio de manera orgánica y sin recurrir a técnicas penalizables, se implementa una estrategia de relaciones públicas digitales basada en sustancia:

```mermaid
flowchart TD
    A["Israel Torres<br>(Sitio Web Central)"] --> B["Comunidades de Producto<br>(ProductTank, Agile Chile)"]
    A --> C["Comunidades de IA & Datos<br>(Gemini / Google Developers, AI Chile)"]
    A --> D["Publicaciones de Fondo<br>(Artículos de autoría propia en web)"]
    B --> E["Charlas & Meetups"]
    C --> F["Demos de Código & Prototipos"]
    D --> G["Citas Orgánicas & AI Overviews"]
```

### 4.1 Comunidades de Producto y Agilidad
- **ProductTank Santiago / Mind the Product:** Participación en discusiones sobre el rol del Product Owner en la era de los LLMs.
- **Temática Clave:** *"Cómo el prototipado con IA (Vibecoding) elimina la fricción entre el negocio y el equipo de ingeniería"*.

### 4.2 Comunidades de Inteligencia Artificial y Cloud
- **Google Developer Groups (GDG) Santiago / AI Chile:** Exponer sobre el desarrollo de agentes con Gemini Enterprise y arquitecturas RAG determinísticas para sectores regulados (banca).
- **Aporte Concreto:** Compartir lecciones aprendidas sobre cómo evitar alucinaciones en recomendaciones comerciales financieras.

---

## 5. Matriz de Enlaces Éticos (White-Hat Linking Policy)

Queda estrictamente prohibida cualquier práctica de manipulación de algoritmos (black-hat o grey-hat), tales como:
- Compra de enlaces en granjas de blogs o directorios automáticos.
- Redes privadas de blogs (PBNs).
- Comentarios masivos en foros o blogs ajenos con enlaces al sitio.

**La política oficial de enlaces de Israel Torres se rige por:**
1. **Enlaces de Atribución Genuina:** Enlaces generados cuando terceros citan los artículos editoriales de la web por su valor metodológico.
2. **Enlaces de Perfiles Verificados:** Plataformas profesionales de alta autoridad (LinkedIn, GitHub, USS, plataformas de certificación).
3. **Open Source & Recursos Gratuitos:** Repositorios de GitHub que solucionan un problema real y citan la web del creador en su documentación.
4. **Menciones en Eventos y Podcasts:** Enlaces en notas de episodios o diapositivas públicas de conferencias.

---

## 6. Lista de Verificación de Sincronización de Entidad (Checklist Operativo)

| Plataforma | Elemento a Sincronizar | Estado Requerido | Prioridad |
| :--- | :--- | :--- | :--- |
| **Sitio Web** | Metaetiquetas, Schema.org `Person`, Canonical URL | Desplegado y verificado en Release 1.0 | **Completado** |
| **LinkedIn** | URL oficial en datos de contacto | `https://israel-torres-web.vercel.app/` | **Alta (Acción Manual)** |
| **LinkedIn** | Titular y resumen sincronizado con la web | Mencionar Ing. Civil Industrial, Artefact y Acid Labs (Nov 2026) | **Alta (Acción Manual)** |
| **GitHub** | URL en perfil público | `https://israel-torres-web.vercel.app/` | **Alta (Acción Manual)** |
| **GitHub** | README de perfil destacando proyectos | Enlaces a `/proyectos/presentation-os` y `/proyectos/commercial-intelligence` | **Media (Acción Manual)** |
| **Google Cloud** | Perfil de credencial de Gemini Enterprise Agent | Asegurar visibilidad pública de la certificación | **Media (Acción Manual)** |
| **USS Alumni** | Registro de egresados actualizado | Titulado en Ing. Civil Industrial + Diplomado | **Baja (Informativo)** |
