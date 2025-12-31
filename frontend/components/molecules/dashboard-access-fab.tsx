//  dashboard-access-fab (Floating Action Button)

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

import { cookies } from 'next/headers'
import { Button } from '../ui/button'
import { Home } from 'lucide-react'
import { DropdownMenuGroup } from '@radix-ui/react-dropdown-menu'
import { DASHBOARD_OPTIONS } from '@/lib/constants'
import Link from 'next/link'

export const DashboardAccessFab = async () => {
  const cookieStore = await cookies()
  const hasJwt = cookieStore.get('jwt')?.value

  if (!hasJwt) return null

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon-lg">
            <Home className="size-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="end">
          <DropdownMenuLabel>Manage</DropdownMenuLabel>
          <DropdownMenuGroup>
            <DropdownMenuItem asChild>
              <Link href={'/dashboard'}>Dashboard</Link>
            </DropdownMenuItem>
            {DASHBOARD_OPTIONS.map(option => (
              <DropdownMenuItem key={option.name} asChild>
                <Link href={option.url} className="ml-2">
                  {option.name}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>Sign out</DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
