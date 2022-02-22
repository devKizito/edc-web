import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import logo from '../../assets/images/logo.png'

console.log( logo ? 'logo' : 'no logo')
const navigation = [
  { name: 'Single Payment', href: '#', current: true },
  { name: 'Bulk Payment', href: '#', current: false },
  { name: 'Contact US', href: '#', current: false },
  { name: 'About Us', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Navigation = () => {
  return (
    <div>
       <Disclosure as="nav" className="bg-gray-100 sm:bg-white shadow-sm border-b-2 border-green-600">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0  left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-green-400 hover:text-white hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start relative">
                <div className="flex-shrink-0 flex items-center">
                  <img
                    className="block lg:hidden h-12 min-w-12 w-auto cursor-pointer"
                    src={logo}
                    alt="logo"
                    onClick={() => {
                     window.location = '/';
                     }}
                  />
                  <img
                    className="hidden lg:block h-12 min-w-12 w-auto cursor-pointer"
                    src={logo}
                    alt="logo"
                    onClick={() => {
                     window.location = '/';
                     }}
                  />
                </div>
                <div className="hidden sm:block sm:ml-6 absolute right-0">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'text-black hover:text-green-500' : 'text-gray-800 hover:text-green-500',
                          'text-2xl font-semibold px-5 py-2 text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'text-green-500' : 'text-black hover:bg-white hover:text-green-500',
                    'block px-5 py-3 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
    </div>
  )
}

export default Navigation
