# Operación

Módulo de **punto de venta** e **inventario operativo** — ventas en mostrador y movimientos de stock.

---

## Punto de venta (POS)

| | |
|---|---|
| **Ruta** | `/panel/pos` |
| **Permiso** | `pos` |
| **Roles típicos** | Cajero, Gerente de sucursal, Gerente regional, Administrador |

### Qué puedes hacer

| Acción | Descripción |
|--------|-------------|
| Abrir turno | Inicia jornada de caja con fondo inicial |
| Buscar productos | Por nombre, código o escaneo de código de barras |
| Agregar al carrito | Cantidades, descuentos aplicables automáticamente |
| Cobrar | Registra la venta y descuenta inventario del almacén del turno |
| Cerrar turno | Cierra la caja y genera resumen del turno |
| Pantalla completa | Interfaz optimizada para mostrador |

### Requisitos previos

- Productos dados de alta en **Catálogo → Productos**
- Stock disponible (entradas en **Movimientos**)
- Usuario con almacén asignado (o rol con `warehouses.all`)
- Turno abierto antes de vender

### Notas

- El rol **Cajero** solo accede a esta pantalla y a su perfil.
- Las ventas quedan ligadas al turno y al almacén activo.

---

## Tickets / recibos

| | |
|---|---|
| **Ruta** | `/panel/recibos` |
| **Permiso** | `pos` |
| **Roles típicos** | Cajero, gerentes, Administrador |

### Qué puedes hacer

| Acción | Descripción |
|--------|-------------|
| Listar ventas | Historial de tickets emitidos |
| Ver detalle | Productos, totales, método de pago |
| Reimprimir | Ticket térmico o PDF |
| Filtrar | Por fecha, turno o búsqueda |

---

## Movimientos de inventario

| | |
|---|---|
| **Ruta** | `/panel/movimientos` |
| **Permiso** | `inventory` |
| **Roles típicos** | Gerente de sucursal, Gerente regional, Administrador |

### Qué puedes hacer

| Acción | Descripción |
|--------|-------------|
| Entrada de mercancía | Compras, devoluciones de proveedor |
| Salida | Mermas manuales, ajustes negativos |
| Ajuste de inventario | Corrección de existencias |
| Lotes y caducidad | Registro de lote y fecha de vencimiento cuando aplica |
| Consultar historial | Movimientos por producto y almacén |

### Alcance por almacén

- Sin `warehouses.all`: solo almacenes asignados al usuario.
- Con `warehouses.all`: todos los almacenes activos.

### Relación con otros módulos

- Las **ventas en POS** generan salidas automáticas de inventario.
- Los **reportes de compras** y **mermas** se alimentan de estos movimientos.

---

## Resumen de permisos

| Pantalla | Clave de sección |
|----------|------------------|
| Punto de venta | `pos` |
| Tickets / recibos | `pos` |
| Movimientos | `inventory` |

[← Inicio](/) · [Consultorio →](./consultorio)
