export const metadata = {
  title: "MňauŠtěkr",
  description: "Evidence péče o mazlíčky",
};

export default function RootLayout({ children }) {
  return (
    <html lang="cs">
      <body>{children}</body>
    </html>
  );
}