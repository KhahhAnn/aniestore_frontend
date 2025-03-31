import { Dialog, Popover, Transition } from '@headlessui/react';
import { Bars3Icon, ShoppingBagIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { Avatar, Button, Menu, MenuItem, Skeleton } from '@mui/material';
import { deepPurple } from '@mui/material/colors';
import { message } from 'antd';
import axios from 'axios';
import { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import AuthModal from '../../auth/AuthModal';
import logo from "../../logoAnie.png";
import { getMyToken, getUser, logout } from '../../state/authorization/Action';
import './Navigation.css';
import { navigation } from './NavigationData';
import { API_BASE_URL } from '../../config/ApiConfig';


export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [countItems, setCountItems] = useState(0);
  const navigate = useNavigate();
  const [openAuthModal, setOpenAuthModal] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const openUserMenu = Boolean(anchorEl);
  const jwt = localStorage.getItem("jwt");
  const accessToken = localStorage.getItem("accessToken");

  const { auth } = useSelector(store => store);
  
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  const handleUserClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorEl(null);
  };

  const handleOpen = () => {
    setOpenAuthModal(true);
  };

  const handleClose = () => {
    setOpenAuthModal(false);
  };

  useEffect(() => {
    if (jwt) {
      dispatch(getUser(jwt));
    }
    setIsLoading(false);
  }, [jwt, dispatch]);

  useEffect(() => {
    if (accessToken) {
      dispatch(getMyToken(accessToken));
    }
    setIsLoading(false);
  }, [accessToken, dispatch]);

  useEffect(() => {
    if (auth.user) {
      getCountItems();
      handleClose();
    }
    setIsLoading(false);
  }, [auth.user, countItems]);

  const handleLogout = async () => {
    const refreshToken = localStorage.getItem("refreshToken");
    if (refreshToken) {
      try {
        await axios.post(`${API_BASE_URL}/auth/logout`, { refresh_token: refreshToken });
      } catch (error) {
        console.error("Logout failed", error);
      }
    }
    dispatch(logout());
    setCountItems(0);
    handleCloseUserMenu();
    navigate("/");
  };

  const moveToCart = () => {
    if (jwt == null) {
      message.error("Vui lòng đăng nhập để mua hàng");
      return;
    }
    navigate("/cart")
  }

  const getCountItems = async () => {
    const token = localStorage.getItem("jwt");
    if (token) {
      try {
        const response = await axios.get('http://localhost:8080/api/cart/count', {
          headers: {
            "Authorization": `Bearer ${token}`
          }
        });
        setCountItems(response.data);
      } catch (error) {
        console.error('Error fetching item count:', error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  if (isLoading) {
    return <Skeleton active={'true'} />;
  }

  return (
    <div className="bg-white">
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
                  <a href="/" className="-m-2 flex items-center p-2">
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
                    className="h-14 w-14 mr-2 rounded-full"
                    src={logo}
                    alt="Logo"
                  />
                </div>
              </Link>

              {/* Flyout menus */}
              <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch z-10">
                <div className="flex h-full space-x-8">
                  {navigation.pages.map((page) => (
                    page.childrens === null ? (
                      <a
                        key={page.key}
                        href={page.href}
                        className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800 cursor-pointer"
                      >
                        {page.key}
                      </a>
                    ) : (
                      <div className='shop-dropdown' key={page.key}>
                        <a className="mt-[22px] flex items-center text-sm font-medium text-gray-700 hover:text-gray-800 cursor-pointer " href={page.href}>
                          {page.key}
                        </a>
                        <div className='absolute flex-col bg-white text-start top-16 left-[13rem] m-0 rounded-md shop-list'>
                          {page.childrens.map((children) => (
                            <a className='hover:bg-[#64CB9A] hover:text-white block px-10 py-[15px] h-full m-0 hover:rounded-md border-b-2 border-[#64CB9A]' href={children.href} key={children.href}>{children.label}</a>
                          ))}
                        </div>
                      </div>
                    )
                  ))}
                </div>
              </Popover.Group>

              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  {auth.user?.firstName || auth?.jwt?.family_name ? (
                    <div>
                      <Avatar
                        className='text-white'
                        onClick={handleUserClick}
                        aria-controls={openUserMenu ? "basic-menu" : undefined}
                        aria-haspopup="true"
                        aria-expanded={openUserMenu ? "true" : undefined}
                        sx={{
                          bgcolor: deepPurple[500],
                          color: "white",
                          cursor: "pointer"
                        }}
                      >
                        {auth.user?.imageSrc ? <img src={auth.user?.imageSrc} alt='User' /> : <Avatar />}
                      </Avatar>
                      <Menu
                        id='basic-menu'
                        anchorEl={anchorEl}
                        open={openUserMenu}
                        onClose={handleCloseUserMenu}
                        MenuListProps={{
                          "aria-labelledby": "basic-button"
                        }}
                      >
                        <MenuItem onClick={() => navigate("/profile")}>
                          Trang cá nhân
                        </MenuItem>
                        <MenuItem onClick={() => navigate("/account/order")}>
                          Đơn hàng
                        </MenuItem>
                        <MenuItem onClick={handleLogout}>
                          Đang xuất
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
                  )}
                </div>
                {/* Cart */}
                <div className="flow-root lg:ml-6">
                  <div>
                    <Button onClick={moveToCart} className="group -m-2 flex items-center p-2">
                      <ShoppingBagIcon
                        className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                        aria-hidden="true"
                      />
                      <span className="ml-2 text-xs font-medium text-red-500 group-hover:bg-red-500 group-hover:text-white px-[4px] rounded-full border-[1px] border-red-500 absolute right-3 -top-1">{countItems}</span>
                      <span className="sr-only">items in cart, view bag</span>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <AuthModal handleClose={handleClose} open={openAuthModal} />
    </div>
  );
}
