'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { Menu } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import SideBar from './SideBar'
import useClient from '@/hook/useClient'

interface IMobileSideBarProps {
  apiLimitCount: number
  isPro: boolean
}

const MobileSideBar = ({
  apiLimitCount,
  isPro = false,
}: IMobileSideBarProps) => {
  const { isMounted } = useClient()

  if (!isMounted) return null

  return (
    <Sheet>
      <SheetTrigger>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu />
        </Button>
      </SheetTrigger>

      <SheetContent side="left" className="p-0">
        <SideBar isPro={isPro} apiLimitCount={apiLimitCount} />
      </SheetContent>
    </Sheet>
  )
}

export default MobileSideBar
