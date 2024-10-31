import { SidebarNav } from "./components/side-nav";

const sidebarNavItems = [
    {
      title: "Profile",
      href: "/settings",
    },
    {
      title: "Organization",
      href: "/settings/organization",
    },
    {
      title: "User Management",
      href: "/settings/user",
    },
    {
      title: "Role & Permission",
      href: "/settings/permission",
    },
  ]

export default function SettingsLayout({ children }: {children: React.ReactNode}) {
    return (
      <>
        <div className="space-y-6 ">
          <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
            <aside className="min-w-[200px]">
              <SidebarNav items={sidebarNavItems} />
            </aside>
            <div className="flex-1 lg:max-w-2xl">{children}</div>
          </div>
        </div>
      </>
    )
  }