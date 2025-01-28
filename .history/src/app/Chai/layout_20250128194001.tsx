export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				<h1 className="text-1.4xl">Nav Item</h1>
        {children}
      </body>
    </html>
  );
}
