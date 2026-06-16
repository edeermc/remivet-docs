# Configuración

Área de **administración del sistema**: usuarios, roles, marca visual, integración con RemiAppManager, agenda y bitácoras.

---

## Usuarios y roles

| | |
|---|---|
| **Ruta** | `/panel/configuracion/acceso` |
| **Permiso** | `config.users` **y/o** `config.roles` |

### Pestaña Usuarios (`config.users`)

| Acción | Descripción |
|--------|-------------|
| Listar usuarios | Todos los operadores del sistema |
| Crear / editar | Nombre, email, contraseña, rol |
| Asignar almacenes | Sucursales donde opera (salvo `warehouses.all`) |
| Vincular veterinario | Para usuarios médicos del consultorio |
| Desactivar acceso | Cambio de rol o eliminación según política |

### Pestaña Roles (`config.roles`)

| Acción | Descripción |
|--------|-------------|
| Ver roles | Incluidos los 8 predefinidos |
| Crear rol personalizado | Nombre, slug y casillas de sección |
| Editar secciones | Lista completa en [claves de sección](../referencia/claves-de-seccion.md) |
| Eliminar rol | No aplica al rol `admin` |

---

## Sistema (marca e identidad)

| | |
|---|---|
| **Ruta** | `/panel/configuracion/sistema` |
| **Permiso** | `config.system` |

| Acción | Descripción |
|--------|-------------|
| Nombre de empresa | Título en login y panel |
| Eslogan / tagline | Texto secundario |
| Logo | Imagen institucional |
| Colores | Barra lateral, texto, color primario y acento |
| Vista previa | Cambios visibles al guardar |

La pantalla de login consume estos datos vía API pública (`GET /api/system-settings`).

---

## Integración RemiAppManager

| | |
|---|---|
| **Ruta** | `/panel/configuracion/integracion-plataforma` |
| **Permiso** | `config.system` |

| Campo | Descripción |
|-------|-------------|
| URL de la plataforma | Base de RemiAppManager (sin `/api`) |
| Slug del cliente | Identificador del cliente en la plataforma |
| Secreto de API | Para verificación de licencia y webhooks |
| Probar conexión | Valida slug y secreto antes de operar |

**Efectos de la integración:**

- Validación de licencia en cada sesión
- Recepción de webhooks (`mensajes`, `tickets`, suspensiones)
- Sincronización con panel central

Variables de respaldo en servidor: `LICENSE_*` en `.env` del backend.

---

## Configuración de citas (horarios y precios)

| | |
|---|---|
| **Ruta** | `/panel/configuracion/horarios-citas` |
| **Permiso** | `config.system` |

| Acción | Descripción |
|--------|-------------|
| Duración de slots | Intervalos de agenda (consulta y estética) |
| Horario semanal | Días y franjas por tipo de servicio |
| Excepciones | Días cerrados o horarios especiales |
| Precios estética | Servicios de baño, corte, etc. |
| Extras y promociones | Complementos y ofertas en citas |

> La clave `clinic.scheduling` existe en roles pero **no se usa** en rutas; todo el scheduling administrativo va con `config.system`.

---

## Bitácoras y auditoría

| | |
|---|---|
| **Ruta** | `/panel/configuracion/bitacoras` |
| **Permiso** | `audit.logins` **y/o** `audit.catalog` |

### Pestaña Accesos (`audit.logins`)

Registro de inicios y cierres de sesión: usuario, IP, fecha, resultado.

### Pestaña Auditoría de catálogos (`audit.catalog`)

Historial de altas, cambios y bajas en categorías, productos, precios, etc.

---

## Resumen de permisos

| Pantalla | Permiso |
|----------|---------|
| Usuarios | `config.users` |
| Roles | `config.roles` |
| Sistema (marca) | `config.system` |
| Integración RemiAppManager | `config.system` |
| Horarios y precios de citas | `config.system` |
| Bitácora de accesos | `audit.logins` |
| Auditoría de catálogos | `audit.catalog` |

[← Reportes](reportes.md) · [Soporte plataforma →](soporte-plataforma.md)
