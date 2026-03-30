# Yo Lo Vendo 🛒

Plataforma de compra, venta e intercambio exclusiva para estudiantes del INTEP.

## Estructura del proyecto

```
yo-lo-vendo/
├── frontend/          ← Todas las páginas HTML + CSS
│   ├── index.html          Login y registro
│   ├── home.html           Pantalla principal
│   ├── search.html         Búsqueda y filtros
│   ├── product-detail.html Detalle de producto
│   ├── seller-profile.html Perfil del vendedor
│   ├── profile.html        Mi perfil
│   ├── chat.html           Mensajes
│   ├── notifications.html  Notificaciones
│   ├── my-listings.html    Mis publicaciones
│   ├── favorites.html      Favoritos
│   ├── register.html       Registro (versión separada)
│   ├── forgot-password.html  Recuperar contraseña
│   ├── onboarding.html     Tutorial inicial
│   ├── help.html           Centro de ayuda
│   ├── terms.html          Términos y condiciones
│   ├── success.html        Confirmación de registro
│   ├── 404.html            Página no encontrada
│   └── styles.css          Estilos globales
│
└── backend/           ← Configuración y lógica de servidor
    └── supabase.js         Cliente Supabase + helpers de auth

```

## Cómo importar supabase.js desde cualquier página

```html
<script type="module">
  import { supabase, requireAuth } from '../backend/supabase.js'
  
  // Verificar sesión
  const user = await requireAuth()
  
  // Leer datos
  const { data } = await supabase.from('products').select('*')
</script>
```

## Requisitos en Supabase antes de abrir la app

1. Tabla `users` — perfil de cada estudiante
2. Tabla `products` — publicaciones
3. Tabla `favorites` — favoritos por usuario
4. Tabla `messages` — chat entre usuarios
5. Storage bucket `product-images` (público) — fotos de productos

## Cómo correr el proyecto

Abre `frontend/index.html` en tu navegador.
Para desarrollo local se recomienda un servidor estático (Live Server en VS Code, o `npx serve .`).

## Stack

- **Frontend:** HTML, CSS, JavaScript vanilla
- **Backend / Base de datos:** Supabase (PostgreSQL)
- **Autenticación:** Supabase Auth
- **Almacenamiento de fotos:** Supabase Storage
- **Hosting recomendado:** Netlify (gratis)
