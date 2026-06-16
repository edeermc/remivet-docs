# Consultorio

Módulo clínico: **clientes y mascotas**, **agenda**, **consulta médica** y catálogos del consultorio.

---

## Citas y agenda

| | |
|---|---|
| **Ruta** | `/panel/consultorio/citas` |
| **Permiso** | `clinic.reception` **o** `clinic.consultation` |
| **Roles típicos** | Recepción, Veterinario, Administrador |

### Qué puedes hacer

| Acción | Quién suele hacerlo | Permiso |
|--------|---------------------|---------|
| Ver calendario y lista de citas | Todos con acceso | recepción o consulta |
| Agendar cita nueva | Recepción | `clinic.reception` |
| Reagendar / cancelar | Recepción | `clinic.reception` |
| Completar servicio de estética | Recepción | `clinic.reception` |
| Iniciar consulta médica | Veterinario | `clinic.consultation` |
| Imprimir ticket de cita | Recepción / consulta | recepción o consulta |
| Cotizar disponibilidad y precio | Recepción | `clinic.reception` |

### Configuración relacionada

Los horarios, intervalos y precios de citas se configuran en **Configuración → Horarios de citas** (`config.system`).

### Pantalla de consulta médica

| | |
|---|---|
| **Ruta** | `/panel/consultorio/consulta` (pantalla completa) |
| **Permiso** | `clinic.consultation` |

Flujo: motivo, exploración (SOAP), diagnóstico, recetas con productos del inventario, adjuntos, finalizar consulta y programar seguimiento.

---

## Dueños / clientes

| | |
|---|---|
| **Ruta** | `/panel/consultorio/clientes` |
| **Permiso** | `clinic.clients` |
| **Roles típicos** | Recepción, Veterinario, Administrador |

### Qué puedes hacer

| Acción | Descripción |
|--------|-------------|
| Alta de dueños | Nombre, contacto, preferencias |
| Registrar mascotas | Por dueño: especie, raza, datos clínicos básicos |
| Fotos de mascota | Imagen en expediente |
| Editar / buscar | Filtros por nombre, teléfono, mascota |

---

## Historial de consultas

| | |
|---|---|
| **Ruta** | `/panel/consultorio/historial` |
| **Permiso** | `clinic.clients` |
| **Roles típicos** | Recepción, Veterinario, Administrador |

### Qué puedes hacer

| Acción | Descripción |
|--------|-------------|
| Ver historial por mascota | Consultas previas, diagnósticos, recetas |
| Exportar / imprimir | Reporte PDF del historial |
| Adjuntos médicos | Archivos vinculados a consultas |

### Alcance veterinario

Si el usuario está vinculado a un médico y **no** tiene `clinic.reception` ni `*`, solo ve historial de sus propias consultas.

---

## Especies y razas

| | |
|---|---|
| **Ruta** | `/panel/consultorio/especies` |
| **Permiso** | `clinic.catalog` |
| **Roles típicos** | Recepción, Administrador |

### Qué puedes hacer

| Acción | Descripción |
|--------|-------------|
| Gestionar especies | Perro, gato, ave, etc. |
| Gestionar razas | Por especie |
| Alta de veterinarios | Roster de médicos del consultorio |
| Importar / exportar Excel | Catálogo clínico masivo |

> Los veterinarios del roster se vinculan a usuarios del sistema en **Configuración → Usuarios**.

---

## Reporte: citas atendidas

| | |
|---|---|
| **Ruta** | `/panel/reporte/citas-atendidas` |
| **Permiso** | `clinic.reception` **o** `clinic.consultation` |

Listado y exportación de citas atendidas en un periodo (médicas y estética).

---

## Resumen de permisos

| Pantalla / función | Clave(s) de sección |
|--------------------|---------------------|
| Citas y agenda | `clinic.reception` y/o `clinic.consultation` |
| Agendar / estética | `clinic.reception` |
| Consulta médica | `clinic.consultation` |
| Clientes y mascotas | `clinic.clients` |
| Historial | `clinic.clients` |
| Especies, razas, médicos | `clinic.catalog` |
| Horarios y precios de citas | `config.system` (en Configuración) |
| Reporte citas atendidas | `clinic.reception` y/o `clinic.consultation` |

[← Operación](operacion.md) · [Catálogo →](catalogo.md)
