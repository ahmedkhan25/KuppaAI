import React from 'react'
import Link from 'next/link'
import { SiAboutdotme, SiDiscord, SiGithub, SiLinkedin, SiTwitter } from 'react-icons/si'
import { Button } from './ui/button'

const Footer: React.FC = () => {
  return (
    <footer className="w-fit p-1 md:p-2 fixed bottom-0 right-0">
      <div className="flex justify-end">
        <Button
          variant={'ghost'}
          size={'icon'}
          className="text-muted-foreground/50"
        >
          <Link href="https://github.com/ahmedkhan25" target="_blank">
            <SiGithub size={18} />
          </Link>
        </Button>
        <Button
          variant={'ghost'}
          size={'icon'}
          className="text-muted-foreground/50"
        >
          <Link href="https://www.linkedin.com/in/ahmedkhan25/" target="_blank">
            <SiLinkedin size={18} />
          </Link>
        </Button>
        <Button
          variant={'ghost'}
          size={'icon'}
          className="text-muted-foreground/50"
        >
          <Link href="https://ahmedkhan25.carbonmade.com/" target="_blank">
            <SiAboutdotme size={18} />
          </Link>
        </Button>
      </div>
    </footer>
  )
}

export default Footer
