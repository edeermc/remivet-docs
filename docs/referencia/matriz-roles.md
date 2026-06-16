# Matriz de roles

Tabla de referencia rápida: qué secciones trae cada rol predefinido al instalar RemiVet.

| Sección | Admin | Gerente sucursal | Gerente regional | Consulta | Cajero | Veterinario | Recepción |
|---------|:-----:|:----------------:|:----------------:|:--------:|:------:|:-----------:|:---------:|
| `*` | ✓ | | | | | | |
| `config.users` | ✓ | | | | | | |
| `config.roles` | ✓ | | | | | | |
| `config.system` | ✓ | | | | | | |
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

> El administrador usa `*`, que incluye implícitamente todas las filas.

---

## Slugs de rol

| Slug | Nombre visible |
|------|----------------|
| `admin` | Administrador |
| `supervisor` | Gerente de sucursal |
| `gerente-regional` | Gerente regional |
| `consulta` | Consulta |
| `cajero` | Cajero (POS) |
| `veterinario` | Veterinario |
| `recepcion-clinica` | Recepción consultorio |

---

## Matriz menú → permiso

| Menú | Permiso(s) |
|------|------------|
| Inicio | *(autenticado)* |
| Punto de venta | `pos` |
| Tickets / recibos | `pos` |
| Movimientos | `inventory` |
| Citas y agenda | `clinic.reception` o `clinic.consultation` |
| Dueños / clientes | `clinic.clients` |
| Historial | `clinic.clients` |
| Especies y razas | `clinic.catalog` |
| Categorías … descuentos | `catalog` |
| Reportes (inventario … turnos POS) | `reports` |
| Citas atendidas | `clinic.reception` o `clinic.consultation` |
| Usuarios y roles | `config.users` o `config.roles` |
| Sistema / integración / horarios | `config.system` |
| Bitácoras | `audit.logins` o `audit.catalog` |
| Soporte (menú usuario) | `platform.support` |
| Mi perfil | *(autenticado)* |

[← Claves de sección](claves-de-seccion.md) · [Roles y permisos](../02-roles-y-permisos.md)
