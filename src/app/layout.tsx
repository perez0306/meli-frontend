import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Mercado Libre | Detalle de producto',
  description:
    'Descubre y compra productos en Mercado Libre. Encuentra las mejores ofertas, información detallada, métodos de pago y envío rápido en nuestra plataforma de e-commerce.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <header>{/* Aquí podrías poner un logo o navegación global */}</header>
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <footer>{/* Aquí podrías poner información de contacto, links, etc. */}</footer>
      </body>
    </html>
  );
}
