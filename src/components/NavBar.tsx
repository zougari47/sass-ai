import { UserButton } from '@clerk/nextjs'
import MobileSideBar from '@/components/MobileSideBar'
import { getApiLimitCount } from '@/lib/api-limit'

const NavBar = async () => {
  const apiLimitCount = await getApiLimitCount()

  return (
    <div className="flex items-center p-4">
      <MobileSideBar apiLimitCount={apiLimitCount} />

      <div className="flex w-full justify-end">
        <UserButton />
      </div>
    </div>
  )
}

export default NavBar
