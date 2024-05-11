import { Dialog, Popover, Transition } from '@headlessui/react'
import { Bars3Icon, MagnifyingGlassIcon, ShoppingBagIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Avatar, Button, Menu, MenuItem } from '@mui/material'
import { deepPurple } from '@mui/material/colors'
import axios from 'axios'
import { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import AuthModal from '../../auth/AuthModal'
import { getUser, logout } from '../../state/authorization/Action'
import './Navigation.css'
import { navigation } from './NavigationData'
export default function Navigation() {
  const [open, setOpen] = useState(false)
  const [countItems, setCountItems] = useState(0);
  const navigate = useNavigate();
  const [openAuthModal, setOpenAuthModal] = useState(false)
  const [anchorEl, setAnchorEl] = useState(null)
  const openUserMenu = Boolean(anchorEl)
  const jwt = localStorage.getItem("jwt")
  const { auth } = useSelector(store => store)
  const dispatch = useDispatch();
  const handleUserClick = (e) => {
    setAnchorEl(e.currentTarget);
  }
  const handleCloseUserMenu = (e) => {
    setAnchorEl(null);
  }
  const handleOpen = () => {
    setOpenAuthModal(true);
  }
  const handleClose = () => {
    setOpenAuthModal(false);
  }

  useEffect(() => {
    if (jwt) {
      dispatch(getUser(jwt))
    }
  }, [jwt, auth.jwt, dispatch])

  useEffect(() => {
    if (auth.user) {
      getCountItems();
      handleClose();
    }
  }, [auth.user])

  const handleLogout = () => {
    dispatch(logout());
    handleCloseUserMenu();
  }

  const getCountItems = async () => {
    try {
      const token = localStorage.getItem("jwt");
      const response = await axios.get('http://localhost:8080/api/cart/count', {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      });
      setCountItems(response.data);
    } catch (error) {
      console.error('Error fetching color:', error);
    }
  };

  return (
    <div className="bg-white">
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
              <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                <div className="flex px-4 pb-2 pt-5">
                  <button
                    type="button"
                    className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Links */}
                {/* <Tab.Group as="div" className="mt-2">
                  <div className="border-b border-gray-200">
                    <Tab.List className="-mb-px flex space-x-8 px-4">
                      {navigation.categories.map((category) => (
                        <Tab
                          key={category.name}
                          className={({ selected }) =>
                            classNames(
                              selected ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-gray-900',
                              'flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium'
                            )
                          }
                        >
                          {category.name}
                        </Tab>
                      ))}
                    </Tab.List>
                  </div>
                  <Tab.Panels as={Fragment}>
                    {navigation.categories.map((category) => (
                      <Tab.Panel key={category.name} className="space-y-10 px-4 pb-8 pt-10">
                        <div className="grid grid-cols-2 gap-x-4">
                          {category.featured.map((item) => (
                            <div key={item.name} className="group relative text-sm">
                              <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                <img src={item.imageSrc} alt={item.imageAlt} className="object-cover object-center" />
                              </div>
                              <a href={item.href} className="mt-6 block font-medium text-gray-900">
                                <span className="absolute inset-0 z-10" aria-hidden="true" />
                                {item.name}
                              </a>
                              <p aria-hidden="true" className="mt-1">
                                Shop now
                              </p>
                            </div>
                          ))}
                        </div>
                        {category.sections.map((section) => (
                          <div key={section.name}>
                            <p id={`${category.id}-${section.id}-heading-mobile`} className="font-medium text-gray-900">
                              {section.name}
                            </p>
                            <ul
                              role="list"
                              aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                              className="mt-6 flex flex-col space-y-6"
                            >
                              {section.items.map((item) => (
                                <li key={item.name} className="flow-root">
                                  <a href={item.href} className="-m-2 block p-2 text-gray-500">
                                    {item.name}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </Tab.Panel>
                    ))}
                  </Tab.Panels>
                </Tab.Group> */}


                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  <div className="flow-root">
                    <a href="/" className="-m-2 block p-2 font-medium text-gray-900">
                      Sign in
                    </a>
                  </div>
                  <div className="flow-root">
                    <a href="/" className="-m-2 block p-2 font-medium text-gray-900">
                      Create account
                    </a>
                  </div>
                </div>

                <div className="border-t border-gray-200 px-4 py-6">
                  <a href="#" className="-m-2 flex items-center p-2">
                    <img
                      src="https://tailwindui.com/img/flags/flag-canada.svg"
                      alt=""
                      className="block h-auto w-5 flex-shrink-0"
                    />
                    <span className="ml-3 block text-base font-medium text-gray-900">CAD</span>
                    <span className="sr-only">, change currency</span>
                  </a>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <header className="relative bg-white">
        <nav aria-label="Top" className="mx-auto">
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center px-11">
              <button
                type="button"
                className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
                onClick={() => setOpen(true)}
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>

              {/* Logo */}
              <Link to="/">
                <div className="ml-4 flex lg:ml-0">
                  <img
                    className="h-14 w-40 mr-2"
                    src="https://designercomvn.s3.ap-southeast-1.amazonaws.com/wp-content/uploads/2018/12/06090514/logo-shop-qu%E1%BA%A7n-%C3%A1o-7.jpg"
                    alt=""
                  />
                </div>
              </Link>

              {/* Flyout menus */}
              <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch z-10">
                <div className="flex h-full space-x-8">
                  {navigation.pages.map((page) => (
                    (page.childrens === null)
                      ? (
                        <a
                          key={page.key}
                          href={page.href}
                          className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800 cursor-pointer"
                        >
                          {page.key}
                        </a>
                      )
                      : (
                        <div className='shop-dropdown'>
                          <span className="mt-[22px] flex items-center text-sm font-medium text-gray-700 hover:text-gray-800 cursor-pointer ">
                            {page.key}
                          </span>
                          <div className='absolute flex-col bg-white text-start top-16 left-72 m-0 rounded-md shop-list'>
                            {page.childrens.map((children) => (
                              <a className='hover:bg-[#64CB9A] hover:text-white block px-10 py-[15px] h-full m-0 hover:rounded-md border-b-2 border-[#64CB9A]' href={children.href} >{children.label}</a>
                            ))}
                          </div>
                        </div>
                      )
                  ))}
                </div>
              </Popover.Group>

              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  {
                    auth.user?.firstName ? (
                      <div>
                        <Avatar
                          className='text-white'
                          onClick={handleUserClick}
                          aria-controls={open ? "basic-menu" : undefined}
                          aia-haspopup="true"
                          aria-expanded={open ? "true" : undefined}
                          sx={{
                            bgcolor: deepPurple[500],
                            color: "white",
                            cursor: "pointer"
                          }}>{auth.user?.firstName[0].toUpperCase()}</Avatar>
                        <Menu
                          id='basic-menu'
                          anchorEl={anchorEl}
                          open={openUserMenu}
                          onClose={handleCloseUserMenu}
                          MenuListProps={{
                            "aria-labelledby": "basic-button"
                          }}
                        >
                          <MenuItem onClick={handleCloseUserMenu}>
                            Profile
                          </MenuItem>
                          <MenuItem onClick={() => navigate("/account/order")}>
                            My Order
                          </MenuItem>
                          <MenuItem onClick={handleLogout}>
                            Logout
                          </MenuItem>
                        </Menu>
                      </div>
                    ) : (
                      <Button
                        onClick={handleOpen}
                        className="text-sm font-medium text-gray-700 hover:text-gray-800"
                      >
                        Signin
                      </Button>
                    )
                  }
                </div>
                {/* Search */}
                <div className="flex lg:ml-6">
                  <p className="p-2 text-gray-400 hover:text-gray-500 cursor-pointer">
                    <span className="sr-only">Search</span>
                    <MagnifyingGlassIcon className="h-6 w-6" aria-hidden="true" />
                  </p>
                </div>

                {/* Cart */}
                <div className="flow-root lg:ml-6">
                  <Link to="/cart">
                    <Button className="group -m-2 flex items-center p-2">
                      <ShoppingBagIcon
                        className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                        aria-hidden="true"
                      />
                      <span className="ml-2 text-xs font-medium text-red-500 group-hover:bg-red-500 group-hover:text-white px-[4px] rounded-full border-[1px] border-red-500 absolute right-3 -top-1">{countItems}</span>
                      <span className="sr-only ">items in cart, view bag</span>
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <AuthModal handleClose={handleClose} open={openAuthModal} />
    </div>
  )
}
