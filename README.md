# Decisiones Técnicas y Convenciones Clave de Mi Proyecto Frontend

Este documento resume las decisiones técnicas y convenciones de desarrollo que implementé para la arquitectura frontend de este proyecto, buscando siempre la escalabilidad, mantenibilidad, rendimiento y consistencia.

## Mi Arquitectura Principal

Elegí React 19 y Next.js 15 (con Node.js) por su eficiencia en la construcción de interfaces complejas y por las ventajas del Server-Side Rendering (SSR). Esto es vital para mejorar el rendimiento inicial de la aplicación y para optimizar el SEO, algo crucial en el contexto del e-commerce de Mercado Libre.

## Calidad y Optimización de Mi Desarrollo

Para asegurar código de alta calidad y eficiencia en mi desarrollo:

- **Jest**: Lo usé para pruebas unitarias y de integración, garantizando la funcionalidad correcta.
- **Husky**: Lo configuré para automatizar pruebas, formato (Prettier) y análisis (ESLint) antes de cada commit, lo que me permitió mantener el código consistente y libre de errores.
- **ESLint y Prettier**: Estas herramientas fueron esenciales para mantener mi código limpio, sin errores y con un estilo uniforme.
- **Optimización con Cursor**: Integré Cursor en mi flujo de trabajo. Su IA para generación y refactorización me permitió optimizar y acelerar el desarrollo de componentes y lógica compleja, reduciendo mi tiempo de implementación y mejorando la calidad inicial del código.

## Mis Convenciones y Estructura

- **Convención de Nombres**: Adopté camelCase por su legibilidad y estandarización.
- **Estructura de Directorios (Modular)**: Organicé el proyecto priorizando la modularidad y separación de responsabilidades:

```text
src/
│
├── app/                   # Rutas y páginas principales (Next.js 13+)
│   ├── layout.tsx         # Layout global de la app
│   ├── page.tsx           # Página principal
│   ├── globals.css        # Estilos globales
│   └── detail/            # Ruta de detalle de producto
│       └── [id_product]/  # Página dinámica de producto
│           ├── page.tsx
│           ├── page.module.css
│           └── components/
│               ├── purchaseBox/
│               ├── productInfo/
│               ├── imagesView/
│               ├── sellerBox/
│               ├── relatedLinksSection/
│               ├── productSpecsBox/
│               ├── paymentMethodsBox/
│               ├── otherOptionsBox/
│               └── productDescriptionBox/
│
├── components/            # Componentes globales y reutilizables
│   ├── ui/                # Componentes de UI (Button, Carousel, Divider, etc.)
│   └── commons/           # Componentes comunes de negocio (Price, TitleDetail, etc.)
│
├── lib/                   # Lógica compartida, utilidades, hooks, stores, API
│
└── types/                 # Tipos y modelos TypeScript globales
```

- `app/`: El entrypoint y las rutas principales.
- `app/detail/[id_product]/components/`: Componentes específicos de cada página, con su lógica y estilos encapsulados.
- `components/ui/`: Componentes de interfaz genéricos y reutilizables (ej. Button).
- `components/commons/`: Componentes de negocio comunes (ej. PriceDisplay).
- `lib/`: Lógica compartida, utilidades, hooks y la capa de API.
- `types/`: Definiciones TypeScript globales para un tipado fuerte y mayor robustez.

## ¿Por qué Tomé estas decisiones?

Mis decisiones se basaron en los siguientes pilares:

- **Escalabilidad**: Permite que el proyecto crezca sin romper lo existente.
- **Mantenibilidad**: Facilita la localización de bugs y las actualizaciones.
- **Reutilización**: Los componentes de UI y negocio pueden usarse en diferentes contextos.
- **Consistencia**: El tipado fuerte y las convenciones aseguran un estándar de calidad.
- **Performance y Buenas Prácticas**: Aprovechó las ventajas de Next.js 15 y React 19 para un rendimiento óptimo.

## Mis Desafíos Principales y Soluciones

Durante el desarrollo, enfrenté desafíos críticos y los abordé estratégicamente:

- **Adaptación de la UI al Estilo de Mercado Libre**: El reto inicial fue replicar fielmente el diseño y la experiencia de usuario de Mercado Libre, lo que implicó una maquetación meticulosa y responsive para asegurar una adaptación fluida entre desktop y mobile.
- **Asegurar Cobertura y Atención al Mínimo Detalle**: En un entorno de e-commerce, cada pequeño detalle impacta al usuario. Mi reto fue garantizar que cada aspecto de la aplicación, desde la accesibilidad hasta la interacción más sutil, cumpliera con los estándares más altos.
- **Mi Solución**: Para abordar estos retos, utilicé Cursor para refinar meticulosamente la implementación. Esta herramienta de IA me permitió optimizar el código y el diseño de los componentes, asegurando la fidelidad visual y funcional en todos los dispositivos. Con su ayuda, pude atacar el mínimo detalle, garantizando que cada elemento cumpliera con los altos estándares de calidad y accesibilidad esperados en un entorno de e-commerce, logrando una mayor cobertura y cumplimiento de los requisitos.

## Coverage testing

```bash
   npm run test:coverage
```

### Resumen General

- **Statements**: 61.83%
- **Branches**: 47.76%
- **Functions**: 67.92%
- **Lines**: 62.17%

### Componentes con 100% de Cobertura

- **Mocks**: 100% en todos los aspectos
- **Componentes de Detalle de Producto**:

  - `DetailPage` (index.tsx)
  - `ImagesView`
  - `OtherOptionsBox`
  - `PaymentMethodsBox`
  - `ProductDescriptionBox`
  - `ProductInfo`
  - `ProductSpecsBox`
  - `RelatedLinksSection`
  - `SellerBox`

- **Componentes Comunes**:

  - `ButtonColor`
  - `DetailProduct`
  - `Price`
  - `TitleDetail`

- **Componentes UI**:
  - `Divider`

### Componentes con Cobertura Parcial

- **PurchaseBox**: 66.66% (Statements), 50% (Functions)
- **BestSellerTag**: 85.71% (Statements)
- **Button**: 83.33% (Statements)
- **Carousel**: 37.89% (Statements), 30.23% (Branches), 42.85% (Functions)

### Estado Actual de las Pruebas

- **Test Suites**: 18 passed, 18 total
- **Tests**: 23 passed, 23 total
- **Snapshots**: 0 total
- **Tiempo de Ejecución**: 3.816s
