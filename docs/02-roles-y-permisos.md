# Roles y permisos

RemiVet controla el acceso con **roles**. Cada rol tiene un conjunto de **secciones** (claves técnicas como `catalog` o `clinic.reception`). Un usuario hereda las secciones de su rol.

---

## Conceptos clave

| Concepto | Descripción |
|----------|-------------|
| **Rol** | Plantilla de permisos (ej. Cajero, Veterinario) |
| **Sección** | Permiso para un área funcional del sistema |
| `*` | Acceso total — solo el rol Administrador |
| **Almacenes asignados** | Limita en qué sucursales opera el usuario |
| `warehouses.all` | Ve y opera en **todos** los almacenes activos |

### Cómo se aplica

1. **Menú lateral** — solo aparecen las entradas para las que el usuario tiene sección.
2. **API** — cada grupo de rutas exige la sección correspondiente; sin ella, responde 403.
3. **Almacenes** — inventario, POS y reportes filtran por almacén según asignación del usuario.
4. **Cajero** — además del rol, la interfaz restringe al POS y al perfil personal.
5. **Veterinario vinculado** — si el usuario está ligado a un registro de médico, puede ver solo sus propias citas/consultas (salvo que tenga recepción o sea admin).

---

## Roles predefinidos

Estos roles se crean en el primer despliegue (`RoleSeeder`). Puedes editarlos o crear roles nuevos en **Configuración → Usuarios y roles → Roles**.

### Administrador (`admin`)

- **Secciones:** `*` (todo)
- **Uso:** configuración global, usuarios, integración, todos los módulos
- **Nota:** no se puede eliminar ni cambiar el slug desde el panel

### Gerente de sucursal (`supervisor`)

- **Secciones:** `catalog`, `inventory`, `reports`, `pos`, `audit.logins`, `audit.catalog`, `platform.support`
- **Uso:** operación diaria de una sucursal, reportes, bitácoras, soporte plataforma
- **Almacenes:** solo los asignados al usuario (no tiene `warehouses.all`)

### Gerente regional (`gerente-regional`)

- **Secciones:** `catalog`, `inventory`, `reports`, `pos`, `audit.logins`, `audit.catalog`, `warehouses.all`
- **Uso:** supervisión multi-sucursal
- **Almacenes:** todos los activos del sistema

### Consulta (`consulta`)

- **Secciones:** `catalog`, `reports`, `audit.catalog`
- **Uso:** solo lectura/consulta de catálogos, reportes y auditoría de catálogos
- **No puede:** movimientos, POS, clínica ni configuración

### Cajero POS (`cajero`)

- **Secciones:** `pos`
- **Uso:** punto de venta y consulta de recibos
- **Restricción UI:** solo puede navegar a `/panel/pos` y `/panel/perfil`

### Veterinario (`veterinario`)

- **Secciones:** `clinic.clients`, `clinic.consultation`
- **Uso:** expedientes, historial, consulta médica
- **Puede ver citas** si entra desde la agenda vinculada a su usuario médico
- **No puede:** recepción (agendar citas para otros), catálogo clínico ni POS

### Recepción consultorio (`recepcion-clinica`)

- **Secciones:** `clinic.catalog`, `clinic.clients`, `clinic.reception`
- **Uso:** agenda, alta de clientes/mascotas, especies, citas y estética
- **No puede:** consulta médica completa ni inventario

---

## Tabla resumen: rol → secciones

| Sección | Admin | Gerente sucursal | Gerente regional | Consulta | Cajero | Veterinario | Recepción |
|---------|:-----:|:----------------:|:----------------:|:--------:|:------:|:-----------:|:---------:|
| Acceso total `*` | ✓ | | | | | | |
| `config.users` / `config.roles` / `config.system` | ✓ | | | | | | |
| `catalog` | ✓ | ✓ | ✓ | ✓ | | | |
| `inventory` | ✓ | ✓ | ✓ | | | | |
| `reports` | ✓ | ✓ | ✓ | ✓ | | | |
| `pos` | ✓ | ✓ | ✓ | | ✓ | | |
| `audit.logins` | ✓ | ✓ | ✓ | | | | |
| `audit.catalog` | ✓ | ✓ | ✓ | ✓ | | | |
| `warehouses.all` | ✓ | | ✓ | | | | |
| `platform.support` | ✓ | ✓ | | | | | |
| `clinic.catalog` | ✓ | | | | | | ✓ |
| `clinic.clients` | ✓ | | | | | ✓ | ✓ |
| `clinic.reception` | ✓ | | | | | | ✓ |
| `clinic.consultation` | ✓ | | | | | ✓ | |

---

## Crear roles personalizados

**Sección requerida:** `config.roles`

1. Configuración → Usuarios y roles → pestaña **Roles**.
2. **Nuevo rol** — nombre visible y slug (solo minúsculas, números y guiones).
3. Marca las **secciones** que necesites (lista completa en [claves de sección](referencia/claves-de-seccion.md)).
4. Asigna el rol a los usuarios en la pestaña **Usuarios**.

> El slug `admin` está reservado y no puede reutilizarse.

---

## Asignar almacenes a un usuario

**Sección requerida:** `config.users`

Al editar un usuario (sin rol que tenga `warehouses.all`):

- Selecciona uno o más **almacenes** donde puede operar.
- Afecta: movimientos de inventario, stock visible en POS, reportes filtrados.

Los roles con `warehouses.all` (admin y gerente regional) ignoran esta limitación.

---

## Vincular usuario con veterinario

**Sección requerida:** `config.users`

Si el usuario es médico:

1. Asígnale el rol **Veterinario** (o uno con `clinic.consultation`).
2. En el mismo formulario, vincúlalo al registro de **médico veterinario** del consultorio.
3. Sin `clinic.reception` ni `*`, solo verá sus propias citas y consultas.

---

## Referencia

- [Claves de sección](referencia/claves-de-seccion.md) — listado completo con descripción
- [Matriz de roles](referencia/matriz-roles.md) — tabla ampliada
- [Guías por módulo](modulos/) — qué hace cada pantalla y qué permiso pide
