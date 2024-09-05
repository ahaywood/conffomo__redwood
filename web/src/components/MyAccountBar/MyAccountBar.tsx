import { Link, routes } from '@redwoodjs/router'
import Avatar from '../Avatar/Avatar'
import Icon from '../Icon/Icon'
import PopupMenu from '../PopupMenu/PopupMenu'
import { useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useEscapeKey } from 'src/hooks/useEscapeKey'
import { useClickOutside } from 'src/hooks/useClickOutside'

const MyAccountBar = () => {
  const [ isMenuOpen, setIsMenuOpen ] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  const closeMenu = () => setIsMenuOpen(false)

  useEscapeKey(closeMenu)
  useClickOutside(closeMenu, menuRef)


  return (
    <div className="flex items-center justify-between">
      <Link to={routes.profile({ username: 'test' })} className="flex items-center gap-3">
        <Avatar alt="test" />
        <div>
          <p className="font-bold font-base ">Test User</p>
          <p className="text-base text-black">@testuser</p>
        </div>
      </Link>
      <div className="relative" ref={menuRef}>
        <AnimatePresence>
        {isMenuOpen && (
          <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1,  y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
          className="absolute top-[-220px] right-[-15px]">
            <PopupMenu
              position="topRight"
              menuItems={[
                {
              icon: 'account',
              label: 'My Account',
              href: '#',
            },
            {
              icon: 'profile',
              label: 'Edit My Profile',
              href: '#',
            },
            {
              icon: 'qrCode',
              label: 'QR Code',
              href: '#',
            },
            {
              icon: 'hide',
              label: 'Privacy & Settings',
              href: '#',
            },
            {
              icon: 'logout',
              label: 'Log Out',
              onClick: () => {},
              },
            ]}
            />
          </motion.div>
        )}
        </AnimatePresence>
        <button className={`icon-button hover:bg-casper hover:text-white
          ${isMenuOpen ? 'bg-casper text-white' : 'text-black'}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <Icon id="threeDots" />
        </button>
      </div>
    </div>
  )
}

export default MyAccountBar
