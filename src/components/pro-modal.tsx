'use client'

import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import useClient from '@/hook/useClient'
import { userProModal } from '@/hook/user-pro-modal'
import { cn } from '@/lib/utils'
import {
  Check,
  Code,
  ImageIcon,
  Loader,
  MessageSquare,
  Music,
  VideoIcon,
  Zap,
} from 'lucide-react'
import { Button } from './ui/button'
import axios from 'axios'
import { useState } from 'react'

const tools = [
  {
    label: 'Conversation',
    icon: MessageSquare,
    color: 'text-violet-500',
    bgColor: 'bg-violet-500/10',
  },
  {
    label: 'Music Generation',
    icon: Music,
    color: 'text-emerald-500',
    bgColor: 'bg-emerald-500/10',
  },
  {
    label: 'Image Generation',
    icon: ImageIcon,
    color: 'text-pink-700',
    bgColor: 'bg-violet-700/10',
  },
  {
    label: 'Video Generation',
    icon: VideoIcon,
    color: 'text-orange-700',
    bgColor: 'bg-orange-700/10',
  },
  {
    label: 'Code Generation',
    icon: Code,
    color: 'text-green-700',
    bgColor: 'bg-green-700/10',
  },
]

const ProModal = () => {
  const { isMounted } = useClient()
  const { isOpen, onClose } = userProModal()
  const [loading, setLoading] = useState(false)

  if (!isMounted) return null

  const onSubscribe = async () => {
    setLoading(true)
    try {
      const response = await axios.get('/api/stripe')
      window.location.href = response.data.url
    } catch (error: any) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader className="flex justify-center items-center flex-col gap-y-4 pb-2">
          <DialogTitle>
            <div className="flex items-center gap-x-2 font-bold py-1">
              Upgrade to Genius
              <Badge className="uppercase text-sm py-1" variant="premium">
                pro
              </Badge>
            </div>
          </DialogTitle>

          <DialogDescription className="text-center pt-2 space-y-2 text-zinc-900 font-medium w-full">
            {tools.map(tool => (
              <Card
                key={tool.label}
                className="p-3 border-black/5 flex items-center justify-between"
              >
                <div className="flex items-center gap-x-4">
                  <div className={cn('p-2 w-fit rounded-md', tool.bgColor)}>
                    <tool.icon className={cn('w-6 h-6', tool.color)} />
                  </div>
                  <div className="font-semibold text-sm">{tool.label}</div>
                </div>
                <Check className="text-primary w-5 h-5" />
              </Card>
            ))}
          </DialogDescription>

          <DialogFooter className="w-full">
            <Button
              size="lg"
              variant="premium"
              className="w-full"
              onClick={onSubscribe}
              disabled={loading}
            >
              {loading ? (
                <Loader className="w-4 h-4 ml-2 fill-white animate-spin" />
              ) : (
                <>
                  Upgrade <Zap className="w-4 h-4 ml-2 fill-white" />
                </>
              )}
            </Button>
          </DialogFooter>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

export default ProModal
