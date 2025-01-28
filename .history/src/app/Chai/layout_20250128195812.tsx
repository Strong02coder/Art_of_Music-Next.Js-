export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <>
			  <h1 className="text-1.4xl">Innerer Nav Item</h1>
				{children}
			</>
  );
}
