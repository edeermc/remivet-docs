# Configuración inicial del sistema

Guía para el **primer despliegue** de RemiVet en producción y los pasos de configuración que debe completar el administrador antes de que el equipo empiece a operar.

---

## 1. Requisitos previos

| Recurso | Descripción |
|---------|-------------|
| Base de datos PostgreSQL | Ej. Neon, RDS o Postgres propio |
| API desplegada | `remivet-backend` (Render, Docker, etc.) |
| Panel desplegado | `remivet-frontend` (Vercel, nginx, etc.) |
| RemiAppManager (opcional) | Si usas licencias centralizadas y soporte |

Variables mínimas del backend en producción:

```env
APP_ENV=production
APP_DEBUG=false
APP_KEY=base64:...
APP_URL=https://tu-dominio-inventario.com

DB_CONNECTION=pgsql
DB_HOST=...                    # host directo, sin -pooler (Neon)
DB_DATABASE=inventario
DB_USERNAME=...
DB_PASSWORD=...
DB_SSLMODE=require

SESSION_DRIVER=database
CACHE_STORE=database
```

---

## 2. Primer arranque: migraciones y datos base

Al iniciar el contenedor (o manualmente), el sistema ejecuta:

1. **Migraciones** — crea todas las tablas (usuarios, catálogos, POS, clínica, etc.)
2. **Seed inicial** — solo en el primer despliegue

### Producción: `InitialDeploySeeder`

En el primer deploy define:

```env
RUN_DB_SEED=1
SEED_CLASS=InitialDeploySeeder
INITIAL_ADMIN_EMAIL=admin@tu-empresa.com
INITIAL_ADMIN_PASSWORD=<contraseña-fuerte>
INITIAL_ADMIN_NAME=Administrador
```

**Qué crea automáticamente:**

| Paso | Contenido |
|------|-----------|
| Roles | 8 roles predefinidos (admin, cajero, veterinario, etc.) |
| Administrador | Usuario con el email y contraseña que indicaste |
| Ajustes de sistema | Nombre de empresa por defecto: «RemiVet» |
| Catálogos base | Unidades de medida, categorías veterinarias, marca «Genérico», almacén `MAIN` |
| Clínica base | Especies y razas comunes (perro, gato, etc.) |
| Agenda base | Intervalos horarios y precios por defecto de citas |

**Qué NO crea** (debes cargarlo tú o en fases posteriores):

- Productos de inventario
- Clientes y mascotas de demo
- Citas, ventas ni datos de farmacia de prueba

Tras el primer deploy exitoso, cambia:

```env
RUN_DB_SEED=0
```

para que no se vuelva a sembrar en cada reinicio.

### Desarrollo local

El entorno de desarrollo usa `DatabaseSeeder` con usuario demo `admin@remivet.local` / `password` y datos clínicos de ejemplo.

---

## 3. Checklist del administrador (orden recomendado)

### Paso 1 — Acceder como administrador

1. Abre el panel web (URL de Vercel o tu dominio).
2. Inicia sesión con `INITIAL_ADMIN_EMAIL` y la contraseña definida.
3. El rol **Administrador** tiene acceso total (`*`).

### Paso 2 — Identidad visual (Configuración → Sistema)

**Sección requerida:** `config.system`

| Acción | Dónde |
|--------|-------|
| Nombre de la clínica / empresa | Configuración → Sistema |
| Logo | Subir imagen (aparece en login y barra lateral) |
| Colores del panel | Color primario, barra lateral, acentos |

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
2. **Categorías, unidades, marcas** — revisa los catálogos sembrados.
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

### Paso 7 — Integración RemiAppManager (opcional)

**Sección requerida:** `config.system`

Si tu licencia se valida contra RemiAppManager:

1. Ve a **Configuración → Integración RemiAppManager**.
2. Indica URL de la plataforma, **slug del cliente** y **secreto de API**.
3. Usa **Probar conexión** antes de guardar.
4. En RemiAppManager, configura el webhook entrante hacia tu API.

Variables de respaldo en el servidor (si no usas el panel):

```env
LICENSE_CHECK_ENABLED=true
LICENSE_PLATFORM_URL=https://api-plataforma.tu-dominio.com
LICENSE_CLIENT_SLUG=clinica-principal
LICENSE_CLIENT_SECRET=<secreto>
```

### Paso 8 — Punto de venta

**Sección requerida:** `pos`

1. Asigna usuarios con rol **Cajero** o roles que incluyan `pos`.
2. Cada cajero abre un **turno** en el POS antes de vender.
3. Al cerrar turno, revisa el reporte de ventas por turno.

---

## 4. Almacenamiento de archivos

En despliegues PaaS (Render, etc.) configura un **disco persistente** montado en `storage/` del backend. Sin él, logos, fotos de mascotas y adjuntos se pierden en cada redeploy.

---

## 5. Licencia suspendida

Si RemiAppManager marca al cliente como suspendido:

- Los usuarios activos pierden acceso (token invalidado).
- El login muestra error de licencia.

Reactiva el cliente en RemiAppManager o desactiva temporalmente la verificación solo para diagnóstico (`LICENSE_CHECK_ENABLED=false`).

---

## 6. Siguiente lectura

- [Roles y permisos](02-roles-y-permisos.md) — qué puede hacer cada rol
- [Inicio del panel](03-inicio-panel.md) — pantalla principal y restricciones especiales
- [Módulos](./modulos/) — detalle por área del menú
