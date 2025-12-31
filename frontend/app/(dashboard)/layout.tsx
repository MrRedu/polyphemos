interface DashboardLayoutProps {
  children: React.ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <section className="flex flex-col my-24 p-4 md:px-16 md:py-6">
      {children}
    </section>
  )
}
