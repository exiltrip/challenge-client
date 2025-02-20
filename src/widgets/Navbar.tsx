"use client";
import Link from "next/link";
import {Disclosure} from "@headlessui/react";
import {ProtectedComponent} from "@features/ProtectedComponent";
import {ProtectedComponentReverse} from "@features/ProtectedComponentReverse";
import {Logout} from "@features/Logout";

export const Navbar = () => {
    const navigation = [
        {"title": "Главная", "route": "/", "protected": true},
        {"title": "🔥Челлендж дня", "route": "/daily-challenge", "protected": true},
        {"title": "Личные челленджи", "route": "/personal-challenges", "protected": true},
    ];

    return (
        <div className="w-full">
            <nav
                className="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-8">
                <Link href="/">
          <span className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 ">
            <span>Challenger</span>
          </span>
                </Link>

                <div className="gap-3 nav__item mr-2 lg:flex ml-auto lg:ml-0 lg:order-2">
                    <div className="hidden mr-3 lg:flex nav__item">
                        <ProtectedComponentReverse>
                            <Link href="/auth/login" className="px-6 py-2 text-white bg-indigo-600 rounded-md md:ml-5">Войти</Link>
                        </ProtectedComponentReverse>
                        <ProtectedComponent>
                            <button onClick={Logout} className="px-6 py-2 text-white bg-indigo-600 rounded-md md:ml-5">Выйти</button>
                        </ProtectedComponent>
                    </div>
                </div>

                <Disclosure>
                    {({open}) => (
                        <>
                            <Disclosure.Button
                                aria-label="Toggle Menu"
                                className="px-2 py-1 text-gray-500 rounded-md lg:hidden hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none ">
                                <svg
                                    className="w-6 h-6 fill-current"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24">
                                    {open && (
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                                        />
                                    )}
                                    {!open && (
                                        <path
                                            fillRule="evenodd"
                                            d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                                        />
                                    )}
                                </svg>
                            </Disclosure.Button>

                            <Disclosure.Panel className="flex flex-wrap w-full my-5 lg:hidden">
                                <>
                                    {navigation.map((item, index) => (
                                        <ProtectedComponent key={index}>
                                            <Link href={item.route} className="w-full px-4 py-2 -ml-4 text-gray-500 rounded-md hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none">
                                                {item.title}
                                            </Link>
                                        </ProtectedComponent>
                                    ))}
                                    <ProtectedComponentReverse>
                                        <Link href="/" className="w-full px-6 py-2 mt-3 text-center text-white bg-indigo-600 rounded-md lg:ml-5">
                                            Войти
                                        </Link>
                                    </ProtectedComponentReverse>
                                </>
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>

                <div className="hidden text-center lg:flex lg:items-center">
                    <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
                        {navigation.map((item, index) => (
                                <ProtectedComponent key={index}>
                                    <li className="mr-3 nav__item">
                                        <Link href={item.route}
                                              className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none ">
                                            {item.title}
                                        </Link>
                                    </li>
                                </ProtectedComponent>
                            )
                        )}
                    </ul>
                </div>

            </nav>
        </div>
    );
}

