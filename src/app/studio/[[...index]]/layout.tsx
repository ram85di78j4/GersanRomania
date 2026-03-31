export const metadata = {
  title: 'Gersan Romania - Sanity Studio',
  description: 'Content management for Gersan Romania website',
}

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ro">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  )
}
