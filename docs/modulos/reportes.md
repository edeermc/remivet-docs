# Reportes

Consultas y exportaciones de **inventario**, **ventas**, **compras**, **mermas** y **operación de caja**.

**Permiso base:** `reports` (salvo el reporte de citas, que usa permisos de consultorio).

---

## Inventario (stock)

| | |
|---|---|
| **Ruta** | `/panel/reporte` |
| **Permiso** | `reports` |

| Salida | Contenido |
|--------|-----------|
| Pantalla | Existencias por producto y almacén, valorización |
| PDF / Excel | Exportación del mismo corte |

Filtra por almacén según asignación del usuario (`warehouses.all` ve todos).

---

## Ventas y ganancias

| | |
|---|---|
| **Ruta** | `/panel/reporte/ventas` |
| **Permiso** | `reports` |

Ventas en periodo, utilidad estimada, desglose por producto o categoría. Exportable PDF/Excel.

---

## Compras

| | |
|---|---|
| **Ruta** | `/panel/reporte/compras` |
| **Permiso** | `reports` |

Entradas de mercancía registradas como compras en movimientos de inventario.

---

## Mermas y caducidad

| | |
|---|---|
| **Ruta** | `/panel/reporte/mermas` |
| **Permiso** | `reports` |

Productos dados de baja por merma, vencimiento o ajuste negativo.

---

## Ventas por turno POS

| | |
|---|---|
| **Ruta** | `/panel/reporte/turnos-pos` |
| **Permiso** | `reports` |

Resumen por turno de caja: fondo inicial, ventas, cierre, diferencias.

---

## Citas atendidas

| | |
|---|---|
| **Ruta** | `/panel/reporte/citas-atendidas` |
| **Permiso** | `clinic.reception` **o** `clinic.consultation` |

> Este reporte está en el grupo Reportes del menú, pero usa permisos de **consultorio**, no `reports`.

Citas médicas y de estética completadas en el periodo seleccionado.

---

## Quién suele usar reportes

| Rol | Reportes disponibles |
|-----|----------------------|
| Administrador | Todos + citas |
| Gerente de sucursal | Inventario, ventas, compras, mermas, turnos POS |
| Gerente regional | Igual, en todos los almacenes (`warehouses.all`) |
| Consulta | Inventario y exportaciones de catálogo vía `catalog` + `reports`; auditoría vía `audit.catalog` |
| Recepción / Veterinario | Solo **Citas atendidas** (si tienen el permiso clínico) |

---

## Resumen de permisos

| Reporte | Permiso requerido |
|---------|-------------------|
| Inventario | `reports` |
| Ventas y ganancias | `reports` |
| Compras | `reports` |
| Mermas y caducidad | `reports` |
| Ventas por turno POS | `reports` |
| Citas atendidas | `clinic.reception` o `clinic.consultation` |

[← Catálogo](catalogo.md) · [Configuración →](configuracion.md)
