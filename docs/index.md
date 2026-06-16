# RemiVet — Wiki de usuario y administración

Documentación del sistema **RemiVet** (inventario veterinario + consultorio + punto de venta), orientada a administradores y usuarios finales.

## ¿Para quién es esta wiki?

| Audiencia | Empieza por |
|-----------|-------------|
| Administrador de la clínica | [Configuración inicial](./01-configuracion-inicial) |
| Quien define quién puede hacer qué | [Roles y permisos](./02-roles-y-permisos) |
| Usuario del panel día a día | [Inicio del panel](./03-inicio-panel) y [módulos](./modulos/operacion) |
| Referencia técnica de claves | [Claves de sección](./referencia/claves-de-seccion) · [Matriz de roles](./referencia/matriz-roles) |

## Estructura del sistema

RemiVet se compone de:

| Componente | Función |
|------------|---------|
| **Panel web** (`remivet-frontend`) | Interfaz operativa en el navegador |
| **API** (`remivet-backend`) | Lógica de negocio, permisos y base de datos |
| **RemiAppManager** (opcional) | Licencias, mensajes y tickets de soporte centralizados |

El acceso al panel se controla por **roles**. Cada rol tiene una lista de **secciones** (permisos granulares). Sin la sección adecuada, el menú no muestra la opción y la API rechaza la operación.

## Mapa del menú

```
Inicio
├── Operación
│   ├── Punto de venta (POS)
│   ├── Tickets / recibos
│   └── Movimientos de inventario
├── Consultorio
│   ├── Citas y agenda
│   ├── Dueños / clientes
│   ├── Historial de consultas
│   └── Especies y razas
├── Catálogo de productos
│   ├── Categorías, unidades, marcas
│   ├── Almacenes, proveedores, productos
│   └── Descuentos y ofertas
├── Reportes
│   ├── Inventario, ventas, compras, mermas
│   ├── Ventas por turno POS
│   └── Citas atendidas
└── Configuración
    ├── Usuarios y roles
    ├── Sistema (marca, logo, colores)
    ├── Integración RemiAppManager
    ├── Horarios y precios de citas
    └── Bitácoras y auditoría

Menú de usuario (esquina superior)
├── Mi perfil
└── Soporte RemiAppManager (tickets)
```

## Guías por módulo

| Módulo | Documento |
|--------|-----------|
| Operación (POS, inventario) | [Operación](./modulos/operacion) |
| Consultorio | [Consultorio](./modulos/consultorio) |
| Catálogo de productos | [Catálogo](./modulos/catalogo) |
| Reportes | [Reportes](./modulos/reportes) |
| Configuración | [Configuración](./modulos/configuracion) |
| Soporte plataforma | [Soporte plataforma](./modulos/soporte-plataforma) |

## Versiones

Esta documentación corresponde a **RemiVet v1.1.0** (integración RemiAppManager, webhooks, soporte plataforma).
