# Soporte RemiAppManager

Comunicación con la **plataforma central** (RemiAppManager): notificaciones, mensajes urgentes y tickets de soporte.

**Permiso:** `platform.support`

**Roles con acceso por defecto:** Administrador, Gerente de sucursal.

---

## Dónde se accede

| Punto de entrada | Descripción |
|------------------|-------------|
| Campana (barra superior) | Notificaciones y mensajes de la plataforma |
| Menú de usuario → Soporte | Listado de tickets |
| Modal urgente | Mensajes prioritarios que bloquean hasta confirmar lectura |

No aparece en el menú lateral principal; depende del permiso `platform.support`.

---

## Notificaciones

| Función | Descripción |
|---------|-------------|
| Campana con contador | Avisos no leídos |
| Marcar como leída | Al abrir el detalle |
| Mensajes urgentes | Modal automático en login o durante la sesión |

Los mensajes los envía el equipo desde **RemiAppManager → Mensajes**.

---

## Tickets de soporte

| | |
|---|---|
| **Rutas** | `/panel/soporte/tickets`, `/nuevo`, `/[id]` |
| **Permiso** | `platform.support` |

### Qué puedes hacer

| Acción | Descripción |
|--------|-------------|
| Crear ticket | Asunto, descripción, prioridad |
| Seguimiento | Estados: abierto, en progreso, resuelto, cerrado |
| Comentarios | Conversación con soporte de plataforma |
| Adjuntos | Subir capturas o documentos en comentarios |
| Notificaciones | Avisos cuando hay respuesta nueva |

Los tickets se gestionan en paralelo en **RemiAppManager → Tickets** por el equipo de soporte.

---

## Requisitos

1. **Integración configurada** en Configuración → Integración RemiAppManager (`config.system`).
2. Cliente activo y licencia válida en RemiAppManager.
3. Usuario con sección `platform.support`.

Sin integración, la campana y los tickets no reciben datos de la plataforma.

---

## Restablecer contraseña

Si olvidaste tu contraseña de RemiVet:

1. En la pantalla de login, usa **Olvidé mi contraseña**.
2. Indica el correo de tu usuario en esta clínica.
3. Recibirás un enlace por correo (con la marca visual de tu clínica si está configurada en **Configuración → Sistema**).

El envío lo gestiona RemiAppManager; si no llega el correo, contacta a quien administra la plataforma o revisa la carpeta de spam.

---

## Resumen

| Función | Permiso |
|---------|---------|
| Campana y mensajes | `platform.support` |
| Tickets de soporte | `platform.support` |
| Configurar conexión con plataforma | `config.system` (otro módulo) |

[← Configuración](./configuracion) · [Inicio →](/)
