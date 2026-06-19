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

Los datos de **marca** (nombre, logo, color primario y acento) también se aplican a los **correos transaccionales** de tu clínica (por ejemplo, restablecer contraseña), enviados de forma centralizada por RemiAppManager cuando la integración está activa.

Los cambios se ven de inmediato para todos los usuarios, incluida la pantalla de inicio de sesión.

---

## Integración RemiAppManager

| | |
|---|---|
| **Ruta** | `/panel/configuracion/integracion-plataforma` |
| **Permiso** | `config.system` |

| Campo | Descripción |
|-------|-------------|
| URL de la plataforma | Dirección web de RemiAppManager que te indicó soporte |
| Identificador del cliente | Código de tu organización en la plataforma |
| Secreto de API | Clave para validar la licencia (te la proporciona quien administra la plataforma) |
| Probar conexión | Comprueba que los datos sean correctos antes de guardar |

**Efectos de la integración:**

- Validación de licencia al iniciar sesión
- Recepción de mensajes y avisos desde la plataforma
- Sincronización con el panel central de soporte

> La conexión entre sistemas la configura tu equipo de soporte o plataforma. En el panel solo necesitas pegar los datos que te entreguen y usar **Probar conexión**.

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

> La opción `clinic.scheduling` en roles es heredada y no se usa por separado; los horarios de citas se administran con permiso `config.system`.

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
