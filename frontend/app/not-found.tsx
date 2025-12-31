import { Button } from '@/components/ui/button'
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyTitle,
} from '@/components/ui/empty'
import { SearchIcon } from 'lucide-react'
import Link from 'next/link'

export default function NotFoundPage() {
  return (
    <section className="flex h-screen items-center justify-center">
      <Empty>
        <EmptyHeader>
          <EmptyTitle>404 - Not Found</EmptyTitle>
          <EmptyDescription>
            {`The page you're looking for doesn't exist.`}
            <br />
            {`You can find plenty of other things on our homepage.`}
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <Button className="w-xs" asChild>
            <Link href="/">
              <SearchIcon className="mr-2 size-4 " /> Go home
            </Link>
          </Button>
          <EmptyDescription>
            Need help? <Link href="/">Contact support</Link>
          </EmptyDescription>
        </EmptyContent>
      </Empty>
    </section>
  )
}
