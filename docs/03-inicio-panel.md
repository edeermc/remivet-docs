# Inicio del panel

La pantalla **Inicio** (`/panel`) es accesible para cualquier usuario autenticado. No exige una sección concreta, pero el contenido se adapta a los permisos de cada quien.

---

## Qué muestra el inicio

| Bloque | Visible si el usuario tiene |
|--------|----------------------------|
| Resumen de inventario (stock bajo, valor) | `catalog`, `inventory` o `reports` |
| Ventas recientes / tendencias | `pos` o `reports` |
| Citas del día / consultorio | `clinic.reception`, `clinic.consultation` o `clinic.clients` |
| Accesos rápidos | Según secciones disponibles |

Si un usuario solo tiene `pos` (cajero), el inicio es mínimo y la interfaz lo redirige preferentemente al POS.

---

## Perfil de usuario

**Ruta:** menú de usuario → **Mi perfil** (`/panel/perfil`)

**Permiso:** cualquier usuario autenticado

| Acción | Descripción |
|--------|-------------|
| Cambiar nombre y email | Datos de contacto |
| Cambiar contraseña | Requiere contraseña actual |
| Foto de perfil | Imagen en barra superior |
| Preferencias | Tema claro/oscuro, idioma del panel |

---

## Soporte RemiAppManager

**Ruta:** menú de usuario → **Soporte** / campana de notificaciones

**Permiso:** `platform.support`

| Función | Descripción |
|---------|-------------|
| Campana | Notificaciones y mensajes urgentes de la plataforma |
| Tickets | Crear y dar seguimiento a solicitudes de soporte |
| Adjuntos | Subir archivos en comentarios de ticket |

Ver [Soporte plataforma](modulos/soporte-plataforma.md).

---

## Restricciones especiales por rol

### Cajero (`cajero`)

- Solo puede abrir **Punto de venta** y **Mi perfil**.
- Cualquier otra URL del panel redirige al POS.
- Diseñado para terminales de caja sin distracciones.

### Licencia suspendida

- Si RemiAppManager suspende al cliente, la sesión se cierra.
- No es un permiso de rol: aplica a todos los usuarios.

### Almacén no asignado

- Un usuario sin `warehouses.all` y sin almacenes asignados verá listas vacías en inventario, POS y reportes.
- El administrador debe asignar almacenes en **Configuración → Usuarios**.

---

## Navegación y menú lateral

El menú se organiza en grupos colapsables:

1. **Operación** — POS, recibos, movimientos
2. **Consultorio** — citas, clientes, historial, especies
3. **Catálogo de productos** — maestros y productos
4. **Reportes** — exportaciones y consultas
5. **Configuración** — pie del menú (usuarios, sistema, bitácoras)

Solo aparecen los grupos que tienen al menos una entrada visible para el usuario.

---

## Pantallas fuera del menú principal

| Ruta | Permiso | Cómo se accede |
|------|---------|----------------|
| `/panel/consultorio/consulta` | `clinic.consultation` | Desde una cita → iniciar consulta (pantalla completa) |
| `/panel/soporte/tickets/*` | `platform.support` | Menú de usuario |

---

## Siguiente paso

Elige el módulo que vas a usar:

- [Operación](modulos/operacion.md)
- [Consultorio](modulos/consultorio.md)
- [Catálogo](modulos/catalogo.md)
- [Reportes](modulos/reportes.md)
- [Configuración](modulos/configuracion.md)
