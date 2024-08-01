import React from "react";
import { useState } from "react";
import {
    Dialog,
    DialogPanel,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Popover,
    PopoverButton,
    PopoverPanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "../../assets/react.svg";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ChevronDownIcon, MinusIcon, PlusIcon } from "lucide-react";

import { categoryByProducts } from "../../constants/Constants";

function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navItems = categoryByProducts;

    const [openPopover, setOpenPopover] = useState(null);

    const handleMouseEnter = (id) => {
        setOpenPopover(id);
    };

    const handleMouseLeave = () => {
        setOpenPopover(null);
    };

    const { totalQuantity } = useSelector((state) => state.cart);

    return (
        <>
            <header className="bg-primary bg-opacity-30 border-2 border-gray-200 backdrop-blur-md backdrop-filter top-0 left-0 w-full z-50 sticky rounded-2xl shadow-sm">
                <nav
                    className="flex items-center justify-between p-4 lg:px-8"
                    aria-label="Global"
                >
                    <div className="flex lg:flex-1">
                        <Link href="/" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <img className="h-8 w-auto" src={logo} alt="Logo" />
                        </Link>
                    </div>
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-secondary"
                            onClick={() => setMobileMenuOpen(true)}
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="hidden lg:flex lg:gap-x-8">
                        {navItems.map((item, key) => (
                            <>
                                <Popover
                                    className="relative px-6 py-2"
                                    key={key}
                                >
                                    <PopoverButton
                                        className="inline-flex items-center gap-x-1 px-2 py-1 text-base font-semibold leading-6 text-quaternary hover:text-accent "
                                        onMouseEnter={() =>
                                            handleMouseEnter(item.id)
                                        }
                                        key={key}
                                    >
                                        <span>{item.category}</span>
                                        <ChevronDownIcon
                                            className="h-5 w-5"
                                            aria-hidden="true"
                                        />
                                    </PopoverButton>

                                    {openPopover === item.id && (
                                        <PopoverPanel
                                            transition
                                            className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
                                            onMouseLeave={handleMouseLeave}
                                            key={key}
                                        >
                                            <div className="w-screen max-w-sm flex-auto overflow-hidden rounded-3xl bg-primary text-sm leading-6 shadow-lg ring-1 ring-accent">
                                                <div className="p-4">
                                                    {item.products.map(
                                                        (product) => (
                                                            <div
                                                                key={
                                                                    product.name
                                                                }
                                                                className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-accent bg-blend-screen transition ease-linear "
                                                            >
                                                                <div>
                                                                    <Link
                                                                        to={`/products/${item.category.toLowerCase()}/${window.btoa(
                                                                            product.id
                                                                        )}`}
                                                                        className="font-semibold text-gray-900"
                                                                    >
                                                                        {
                                                                            product.name
                                                                        }
                                                                        <span className="absolute inset-0" />
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        )
                                                    )}
                                                </div>
                                            </div>
                                        </PopoverPanel>
                                    )}
                                </Popover>
                            </>
                        ))}
                    </div>
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-1">
                        <Link
                            to="/cart"
                            className="text-sm font-semibold leading-6 text-gray-900"
                        >
                            <div className="relative py-2">
                                <div className="t-0 absolute left-3">
                                    <p className="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-3 text-sm font-semibold text-primary">
                                        {totalQuantity}
                                    </p>
                                </div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="file: mt-4 h-6 w-6"
                                >
                                    <path
                                        strokeWidth="round"
                                        strokeLinejoin="round"
                                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                                    />
                                </svg>
                            </div>
                        </Link>
                    </div>
                </nav>
                <Dialog
                    className="lg:hidden"
                    open={mobileMenuOpen}
                    onClose={setMobileMenuOpen}
                >
                    <div className="fixed inset-0 z-50" />
                    <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-primary px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-between">
                            <Link to="/" className="-m-1.5 p-1.5">
                                <span className="sr-only">Your Company</span>
                                <img
                                    className="h-8 w-auto"
                                    src={logo}
                                    alt="logo"
                                />
                            </Link>
                            <button
                                type="button"
                                className="-m-2.5 rounded-md p-2.5 text-quaternary"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon
                                    className="h-6 w-6"
                                    aria-hidden="true"
                                />
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-quinary">
                                <div>
                                    {navItems.map((item) => (
                                        <Disclosure
                                            as="div"
                                            key={item.id}
                                            className="border-b border-senary py-6"
                                        >
                                            {({ open }) => (
                                                <>
                                                    <h3 className="-my-3 flow-root">
                                                        <DisclosureButton className="flex w-full items-center justify-between bg-primary py-3 text-sm text-quaternary hover:text-quinary">
                                                            <span className="font-medium text-quaternary">
                                                                {item.category}
                                                            </span>
                                                            <span className="ml-6 flex items-center">
                                                                {open ? (
                                                                    <MinusIcon
                                                                        className="h-5 w-5"
                                                                        aria-hidden="true"
                                                                    />
                                                                ) : (
                                                                    <PlusIcon
                                                                        className="h-5 w-5"
                                                                        aria-hidden="true"
                                                                    />
                                                                )}
                                                            </span>
                                                        </DisclosureButton>
                                                    </h3>
                                                    <DisclosurePanel className="pt-6">
                                                        <div className="space-y-4">
                                                            {item.products.map(
                                                                (
                                                                    product,
                                                                    productIdx
                                                                ) => (
                                                                    <div
                                                                        key={
                                                                            productIdx
                                                                        }
                                                                        className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-accent animate-slideIn"
                                                                        style={{
                                                                            animationDelay: `${
                                                                                productIdx *
                                                                                0.1
                                                                            }s`,
                                                                        }}
                                                                    >
                                                                        <div className="">
                                                                            <Link
                                                                                to={`/products/${item.category.toLowerCase()}/${window.btoa(
                                                                                    product.id
                                                                                )}`}
                                                                                className="font-medium text-quaternary"
                                                                                onClick={() =>
                                                                                    setMobileMenuOpen(
                                                                                        false
                                                                                    )
                                                                                }
                                                                            >
                                                                                {
                                                                                    product.name
                                                                                }
                                                                                <span className="absolute inset-0" />
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                )
                                                            )}
                                                        </div>
                                                    </DisclosurePanel>
                                                </>
                                            )}
                                        </Disclosure>
                                    ))}
                                </div>

                                <div className="py-6">
                                    <a href="/cart">
                                        <div className="relative py-2">
                                            <div className="t-0 absolute left-3">
                                                <p className="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-3 text-sm font-semibold text-primary">
                                                    {totalQuantity}
                                                </p>
                                            </div>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
                                                stroke="currentColor"
                                                className="file: mt-4 h-6 w-6"
                                            >
                                                <path
                                                    strokeWidth="round"
                                                    strokeLinejoin="round"
                                                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                                                />
                                            </svg>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </DialogPanel>
                </Dialog>
            </header>
        </>
    );
}

export default Header;
