import { BellIcon, MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { useEffect, useState } from 'react'

function Header() {
	const [isScrolled, setIsScrolled] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
		  if (window.scrollY > 0) {
			setIsScrolled(true)
		  } else {
			setIsScrolled(false)
		  }
		}

		window.addEventListener('scroll', handleScroll)

		return () => {
		  window.removeEventListener('scroll', handleScroll)
		}
	  }, [])

  return (
  	<header className={`${isScrolled && 'bg-[#141414]'}`}>
	  <div className="flex items-center space-x-2 md:space-x-10">
		<img 
		  src="https://rb.gy/7c5qiz"
		  width={100}
		  height={100}
		  className="cursor-pointer object-contain"
		/>

		<ul className="hidden space-x-4 md:flex">
		  <li className="headerLink">Home</li>
		  <li className="headerLink">TV Shows</li>
		  <li className="headerLink">Movies</li>
		  <li className="headerLink">New & Popular</li>
		  <li className="headerLink"></li>
		</ul>
	  </div>

	  <div className="flex items-center space-x-4 text-sm font-light">
	    <MagnifyingGlassIcon className="sm hidden h-6 w-6 sm:inline" />
		<BellIcon className="h-6 w-6" />
		
	  </div>
  </header>
  )
}

export default Header