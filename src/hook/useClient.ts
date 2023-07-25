'use client'

import { useEffect, useState } from 'react'

const useClient = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => setIsMounted(true), [])

  return { isMounted }
}

export default useClient
