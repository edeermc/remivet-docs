# Catálogo de productos

Maestros de inventario y **productos** que alimentan movimientos, POS y recetas del consultorio.

**Permiso base del módulo:** `catalog`

**Roles típicos:** Gerente de sucursal, Gerente regional, Consulta (solo lectura en muchas pantallas), Administrador.

---

## Pantallas del catálogo

### Categorías

| | |
|---|---|
| **Ruta** | `/panel/categorias` |
| **Permiso** | `catalog` |

Árbol de categorías (medicamentos, insumos, alimentos, etc.). Soporta subcategorías. Importación y exportación Excel.

### Unidades de medida

| | |
|---|---|
| **Ruta** | `/panel/unidades` |
| **Permiso** | `catalog` |

Pieza, caja, ml, frasco, kg, litro, etc. Requeridas al crear productos.

### Marcas

| | |
|---|---|
| **Ruta** | `/panel/marcas` |
| **Permiso** | `catalog` |

Fabricantes o líneas de producto.

### Almacenes

| | |
|---|---|
| **Ruta** | `/panel/almacenes` |
| **Permiso** | `catalog` |

Sucursales o bodegas. Código único (ej. `MAIN`). Los usuarios se asignan a uno o más almacenes.

### Proveedores

| | |
|---|---|
| **Ruta** | `/panel/proveedores` |
| **Permiso** | `catalog` |

Datos de contacto y condiciones de proveedores.

### Productos

| | |
|---|---|
| **Ruta** | `/panel/productos` |
| **Permiso** | `catalog` |

| Acción | Descripción |
|--------|-------------|
| Alta / edición | SKU, nombre, categoría, marca, unidad, precios |
| Campos farmacia | Controlado, receta, lote, caducidad |
| Stock por almacén | Existencias después de movimientos |
| Ajuste masivo de precios | Herramienta de incremento por porcentaje o monto |
| Excel | Importar y exportar catálogo completo |

### Descuentos y ofertas

| | |
|---|---|
| **Ruta** | `/panel/descuentos` |
| **Permiso** | `catalog` |

Reglas de descuento por producto, categoría o condiciones. El POS los aplica automáticamente.

---

## Permisos relacionados (no son del menú Catálogo)

| Función | Permiso | Notas |
|---------|---------|-------|
| Ver auditoría de cambios en catálogos | `audit.catalog` | Configuración → Bitácoras |
| Movimientos de stock | `inventory` | Operación → Movimientos |
| Vender en POS | `pos` | Requiere productos con stock |

---

## Rol «Consulta»

El rol **Consulta** tiene `catalog` y puede ver y exportar catálogos, pero **no** tiene `inventory` ni `pos` — no registra movimientos ni vende.

---

## Orden recomendado de carga

1. Unidades de medida
2. Categorías
3. Marcas y proveedores
4. Almacenes
5. Productos
6. Descuentos (opcional)
7. Entradas de inventario en **Movimientos**

[← Consultorio](consultorio.md) · [Reportes →](reportes.md)
