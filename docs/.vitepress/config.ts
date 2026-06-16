import { defineConfig } from "vitepress";

export default defineConfig({
  title: "RemiVet",
  description: "Wiki de usuario y administración — inventario veterinario, consultorio y POS",
  lang: "es-ES",
  themeConfig: {
    nav: [
      { text: "Inicio", link: "/" },
      { text: "Configuración inicial", link: "/01-configuracion-inicial" },
      { text: "Roles y permisos", link: "/02-roles-y-permisos" },
    ],
    sidebar: [
      {
        text: "Primeros pasos",
        collapsed: false,
        items: [
          { text: "Configuración inicial", link: "/01-configuracion-inicial" },
          { text: "Roles y permisos", link: "/02-roles-y-permisos" },
          { text: "Inicio del panel", link: "/03-inicio-panel" },
        ],
      },
      {
        text: "Módulos",
        collapsed: false,
        items: [
          { text: "Operación", link: "/modulos/operacion" },
          { text: "Consultorio", link: "/modulos/consultorio" },
          { text: "Catálogo", link: "/modulos/catalogo" },
          { text: "Reportes", link: "/modulos/reportes" },
          { text: "Configuración", link: "/modulos/configuracion" },
          { text: "Soporte plataforma", link: "/modulos/soporte-plataforma" },
        ],
      },
      {
        text: "Referencia",
        collapsed: false,
        items: [
          { text: "Claves de sección", link: "/referencia/claves-de-seccion" },
          { text: "Matriz de roles", link: "/referencia/matriz-roles" },
        ],
      },
    ],
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/edeermc/remivet-docs",
      },
    ],
    footer: {
      message: "RemiVet v1.1.0",
      copyright: "Documentación de usuario y administración",
    },
  },
});
