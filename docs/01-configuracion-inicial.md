# Configuración inicial del sistema

Guía para el **administrador de la clínica**: pasos de configuración en el panel antes de que el equipo empiece a operar.

---

## 1. Checklist del administrador (orden recomendado)

### Paso 1 — Acceder como administrador

1. Abre el panel web con la URL que te proporcionaron.
2. Inicia sesión con tu usuario y contraseña de administrador.
3. El rol **Administrador** tiene acceso total al sistema.

### Paso 2 — Identidad visual (Configuración → Sistema)

**Sección requerida:** `config.system`

| Acción | Dónde |
|--------|-------|
| Nombre de la clínica / empresa | Configuración → Sistema |
| Logo | Subir imagen (aparece en login y barra lateral) |
| Colores del panel | Color primario, barra lateral, acentos |

Esos mismos datos de marca se usan en los **correos transaccionales** de tu instalación (p. ej. restablecer contraseña), si la plataforma de licencias tiene mensajería habilitada.

Los cambios se ven de inmediato para todos los usuarios.

### Paso 3 — Usuarios y roles (Configuración → Usuarios y roles)

**Secciones:** `config.users` y/o `config.roles`

1. Revisa los **roles** predefinidos y ajústalos si hace falta.
2. Crea **usuarios** para cada persona del equipo.
3. Asigna a cada usuario:
   - Un **rol** (define qué secciones puede ver)
   - Los **almacenes** donde opera (salvo roles con acceso a todos los almacenes)

> **Tip:** El rol `cajero` solo puede entrar al POS y a su perfil. El rol `veterinario` solo ve consultorio (clientes y consulta médica).

### Paso 4 — Almacenes y catálogo

**Sección requerida:** `catalog`

Orden sugerido:

1. **Almacenes** — confirma o crea sucursales (existe `MAIN` por defecto).
2. **Categorías, unidades, marcas** — revisa los catálogos base del sistema.
3. **Proveedores** — registra tus distribuidores.
4. **Productos** — alta manual o importación Excel desde cada catálogo.
5. **Descuentos** — reglas de oferta si aplican.

### Paso 5 — Inventario inicial

**Sección requerida:** `inventory`

En **Movimientos**, registra entradas de stock (compras iniciales) por almacén y producto. Sin stock, el POS no podrá vender esos artículos.

### Paso 6 — Consultorio (si usas el módulo clínico)

| Tarea | Sección | Quién suele hacerlo |
|-------|---------|---------------------|
| Especies y razas | `clinic.catalog` | Recepción / admin |
| Médicos veterinarios | `clinic.catalog` | Admin |
| Horarios y precios de citas | `config.system` | Admin |
| Clientes y mascotas | `clinic.clients` | Recepción |

### Paso 7 — Integración con la plataforma de licencias (si aplica)

**Sección requerida:** `config.system`

Si tu instalación está enlazada a la plataforma central de licencias:

1. Ve a **Configuración → Integración RemiAppManager**.
2. Indica URL de la plataforma, **identificador del cliente (slug)** y **secreto de API** (te los proporciona quien administra la plataforma).
3. Usa **Probar conexión** antes de guardar.

### Paso 8 — Punto de venta

**Sección requerida:** `pos`

1. Asigna usuarios con rol **Cajero** o roles que incluyan `pos`.
2. Cada cajero abre un **turno** en el POS antes de vender.
3. Al cerrar turno, revisa el reporte de ventas por turno.

---

## 2. Licencia suspendida

Si la plataforma de licencias marca a tu organización como suspendida:

- Los usuarios activos pierden acceso.
- El login muestra un error de licencia.

Contacta a quien administra tu licencia para reactivar el servicio.

---

## 3. Siguiente lectura

- [Roles y permisos](./02-roles-y-permisos) — qué puede hacer cada rol
- [Inicio del panel](./03-inicio-panel) — pantalla principal y restricciones especiales
- [Módulos](./modulos/) — detalle por área del menú
