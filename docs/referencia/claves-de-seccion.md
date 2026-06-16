# Claves de sección (referencia)

Listado completo de permisos que se asignan a cada rol. El valor `*` significa acceso total.

| Clave | Nombre en español | Tipo |
|-------|-------------------|------|
| `*` | Acceso total (administrador) | Especial |
| `config.users` | Usuarios del sistema | Configuración |
| `config.roles` | Roles y permisos | Configuración |
| `config.system` | Configuración del sistema | Configuración |
| `catalog` | Catálogos y productos | Catálogo |
| `inventory` | Movimientos de inventario | Operación |
| `reports` | Reportes y exportaciones | Reportes |
| `pos` | Punto de venta (POS) | Operación |
| `audit.logins` | Bitácora de inicios de sesión | Auditoría |
| `audit.catalog` | Auditoría de catálogos | Auditoría |
| `warehouses.all` | Todos los almacenes / sucursales | Transversal |
| `clinic.catalog` | Consultorio — catálogos (especies, razas, médicos) | Consultorio |
| `clinic.clients` | Consultorio — clientes y mascotas | Consultorio |
| `clinic.reception` | Consultorio — recepción y citas | Consultorio |
| `clinic.consultation` | Consultorio — consulta médica | Consultorio |
| `clinic.scheduling` | Consultorio — horarios *(obsoleto en rutas)* | Consultorio |
| `platform.support` | Soporte RemiAppManager | Plataforma |

---

## Notas técnicas

### `warehouses.all`

No aparece como ítem de menú. Al activarlo en un rol, el usuario ignora la lista de almacenes asignados y opera en todos los almacenes activos.

### `clinic.scheduling`

Sigue apareciendo en el formulario de roles por compatibilidad, pero **ninguna ruta API lo exige**. La configuración de horarios de citas usa `config.system`.

### Pantallas sin sección obligatoria

| Pantalla | Requisito |
|----------|-----------|
| Inicio (`/panel`) | Usuario autenticado |
| Mi perfil | Usuario autenticado |
| Login | Público |
| Ajustes de marca (solo lectura) | Público antes de login |

---

## Enlace a guías

| Clave | Guía |
|-------|------|
| `pos`, `inventory` | [Operación](../modulos/operacion.md) |
| `clinic.*` | [Consultorio](../modulos/consultorio.md) |
| `catalog` | [Catálogo](../modulos/catalogo.md) |
| `reports` | [Reportes](../modulos/reportes.md) |
| `config.*`, `audit.*` | [Configuración](../modulos/configuracion.md) |
| `platform.support` | [Soporte plataforma](../modulos/soporte-plataforma.md) |

[← Matriz de roles](matriz-roles.md)
