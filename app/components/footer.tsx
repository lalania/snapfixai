import { Button } from './ui/button'
import { Facebook, Twitter, Instagram } from 'lucide-react'

export function Footer() {
  return (
    <footer className="w-full py-12 md:py-24 lg:py-32 bg-gray-900 text-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to Perfect Your Photos?</h2>
            <p className="text-zinc-400 md:text-xl dark:text-zinc-500">
              Download SnapFix now and never worry about photo mishaps again.
            </p>
          </div>
          <div className="w-full max-w-sm space-y-2">
            <Button className="w-full" size="lg">
              Download Now
            </Button>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-zinc-400 hover:text-white">
              <Facebook className="h-6 w-6" />
              <span className="sr-only">Facebook</span>
            </a>
            <a href="#" className="text-zinc-400 hover:text-white">
              <Twitter className="h-6 w-6" />
              <span className="sr-only">Twitter</span>
            </a>
            <a href="#" className="text-zinc-400 hover:text-white">
              <Instagram className="h-6 w-6" />
              <span className="sr-only">Instagram</span>
            </a>
          </div>
          <div className="text-zinc-400">
            <p>© 2024 SnapFix. All rights reserved.</p>
            <a href="#" className="underline">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

