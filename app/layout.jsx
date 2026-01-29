export const metadata = {
  title: "OpsLink Servers",
  description: "Curated, verified Discord server directory"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        {children}
      </body>
    </html>
  );
}
