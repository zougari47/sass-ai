import { LucideIcon } from 'lucide-react'
import { FC } from 'react'

interface IHeadingProps {
  title: string
  description: string
  icon: LucideIcon
  iconColor?: string
  bgColor?: string
}

export const Heading: FC<IHeadingProps> = ({
  description,
  icon,
  title,
  bgColor,
  iconColor,
}) => {
  return <div>Heading Component</div>
}

export default Heading
