import { Fragment, useContext, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Link } from 'react-router-dom'
import { BsFillCloudSunFill } from 'react-icons/bs'
import { FiSun } from 'react-icons/fi'
import myContext from '../../context/myContext'
import { RxCross2 } from 'react-icons/rx'
import { useSelector } from 'react-redux'


export default function Navbar() {
  const [open, setOpen] = useState(false)

  const context = useContext(myContext)
  const { toggleMode, mode } = context

  const user = JSON.parse(localStorage.getItem('user'))

  const logout = () => {
    localStorage.clear('user');
    window.location.href = "/login";
  }
  const cartItems = useSelector((state) => state.cart)

  return (
    <div className="bg-white sticky top-0 z-50  "  >
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl" style={{ backgroundColor: mode === 'dark' ? 'rgb(40, 44, 52)' : '', color: mode === 'dark' ? 'white' : '', }}>
                <div className="flex px-4 pb-2 pt-28">
                  <button
                    type="button"
                    className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <RxCross2 />
                  </button>
                </div>
                <div className="space-y-6 border-t border-gray-200 px-4 py-6">

                  <Link to={'/allproducts'} className="text-sm font-medium text-gray-900 " style={{ color: mode === 'dark' ? 'white' : '', }}>
                    All Products
                  </Link>
                 { user ?  <div className="flow-root">
                    <Link to={'/order'} style={{ color: mode === 'dark' ? 'white' : '', }} className="-m-2 block p-2 font-medium text-gray-900">
                      Order
                    </Link>
                  </div> : ""}

                  { user?.user?.email === 'thisisahmer000@gmail.com' ? <div className="flow-root">
                    <Link to={'/dashboard'} className="-m-2 block p-2 font-medium text-gray-900" style={{ color: mode === 'dark' ? 'white' : '', }}>
                      Admin
                    </Link>
                  </div> : ""}

                  {user ? <div className="flow-root">
                    <a onClick={logout} className="-m-2 block p-2 font-medium text-gray-900 cursor-pointer" style={{ color: mode === 'dark' ? 'white' : '', }}>
                      Logout
                    </a>
                  </div> : ""}
                  <div className="flow-root">
                    <Link to={'/'} className="-m-2 block p-2 font-medium text-gray-900 cursor-pointer">
                      <img
                        className="inline-block w-10 h-10 rounded-full"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToa2Vm0xjgb5ngIXfjq7yDvcrxiE7Pp0ZYe23GoIrwwQ&s"
                        alt="Dan_Abromov" />                                        </Link>
                  </div>
                </div>

                <div className="border-t border-gray-200 px-4 py-6">
                  <a href="#" className="-m-2 flex items-center p-2">
                    <img
                      src="data:image/jpeg;base64,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"
                      alt=""
                      className="block h-auto w-5 flex-shrink-0"
                    />
                    <span className="ml-3 block text-base font-medium text-gray-900" style={{ color: mode === 'dark' ? 'white' : '', }}>Pakistan</span>
                    <span className="sr-only">, change currency</span>
                  </a>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      {/* desktop  */}
      <header className="relative bg-white">
        <p className="flex h-10 items-center justify-center bg-pink-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8" style={{ backgroundColor: mode === 'dark' ? 'rgb(62 64 66)' : '', color: mode === 'dark' ? 'white' : '', }}>
          Get free delivery on orders over Rs.1000
        </p>

        <nav aria-label="Top" className="bg-gray-100 px-4 sm:px-6 lg:px-8 shadow-xl " style={{ backgroundColor: mode === 'dark' ? '#282c34' : '', color: mode === 'dark' ? 'white' : '', }}>
          <div className="">
            <div className="flex h-16 items-center">
              <button
                type="button"
                className="rounded-md bg-white p-2 text-gray-400 lg:hidden"
                onClick={() => setOpen(true)} style={{ backgroundColor: mode === 'dark' ? 'rgb(80 82 87)' : '', color: mode === 'dark' ? 'white' : '', }}
              >
                <span className="sr-only">Open menu</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>

              </button>

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <Link to={'/'} className='flex'>
                  <div className="flex ">
                    <h1 className=' text-2xl font-bold text-black  px-2 py-1 rounded' style={{ color: mode === 'dark' ? 'white' : '', }}>E-Mall</h1>
                  </div>
                </Link>
              </div>

              <div className="ml-auto flex items-center">
                <div className="sm:hidden lg:block lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">

                  <Link to={'/allproducts'} className="text-sm font-medium text-gray-700 " style={{ color: mode === 'dark' ? 'white' : '', }}>
                    All Products
                  </Link>
                 {user ?  <Link to={'/order'} className="text-sm font-medium text-gray-700 " style={{ color: mode === 'dark' ? 'white' : '', }}>
                    Order
                  </Link> : ""}

                  {user?.user?.email === 'thisisahmer000@gmail.com'?
                   <Link to={'/dashboard'} className="text-sm font-medium text-gray-700 " style={{ color: mode === 'dark' ? 'white' : '', }}>
                    Admin
                  </Link> : ""
                }
                 

                  {user ? <a onClick={logout} className="text-sm font-medium text-gray-700 cursor-pointer  " style={{ color: mode === 'dark' ? 'white' : '', }}>
                    Logout
                  </a> : <Link to={'/signup'} className="text-sm font-medium text-gray-700 cursor-pointer  " style={{ color: mode === 'dark' ? 'white' : '', }}>
                    Signup
                  </Link>}

                </div>

                <div className="hidden lg:ml-8 lg:flex">
                  <a href="#" className="flex items-center text-gray-700 ">
                    <img
                      src="data:image/jpeg;base64,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"
                      alt=""
                      className="block h-auto w-5 flex-shrink-0"
                    />
                    <span className="ml-3 block text-sm font-medium" style={{ color: mode === 'dark' ? 'white' : '', }}>Pakistan</span>
                  </a>
                </div>
                <div className="hidden lg:ml-8 lg:flex">
                  <a href="#" className="flex items-center text-gray-700 ">
                    <img
                      className="inline-block w-10 h-10 rounded-full"
                      src="https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg"
                      alt="Dan_Abromov" />
                  </a>
                </div>

                {/* Search */}
                <div className="flex lg:ml-6">
                  <button className='' onClick={toggleMode}>
                    {/* <MdDarkMode size={35} style={{ color: mode === 'dark' ? 'white' : '' }} /> */}
                    {mode === 'light' ?
                      (<FiSun className='' size={30} />
                      ) : 'dark' ?
                        (<BsFillCloudSunFill size={30} />
                        ) : ''}
                  </button>
                </div>

                {/* Cart */}
                <div className="ml-4 flow-root lg:ml-6">
                  <Link to={'/cart'} className="group -m-2 flex items-center p-2" style={{ color: mode === 'dark' ? 'white' : '', }}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                    </svg>
                    <span className="ml-2 text-sm font-medium text-gray-700 group-" style={{ color: mode === 'dark' ? 'white' : '', }}>{cartItems.length}</span>
                    <span className="sr-only">items in cart, view bag</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}