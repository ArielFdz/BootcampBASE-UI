import { Disclosure, Menu, Transition } from "@headlessui/react";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { Fragment } from "react";

import Logo from "../assets/logo-min.png";
import { useLocation } from "react-router-dom";

const userNavigation = [
	{ name: "Tu perfil", href: "/profile" },
	{ name: "Cerrar sesión", href: "/logout" },
];

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(" ");
}

export const Navbar = () => {
	const { pathname } = useLocation();

	const user = {
		name: "Usuario",
		email: "usuario@bancobase.com",
		imageUrl: "https://avatars.githubusercontent.com/u/583231?v=4",
	};

	const navigation = [
		{ name: "Inicio", href: "/", current: pathname === "/" },
		{
			name: "Clientes",
			href: "/clients",
			current: pathname === "/clients",
		},
		{
			name: "Divisas",
			href: "/currencies",
			current: pathname === "/currencies",
		},
	];

	return (
		<Disclosure as="nav" className="bg-gray-800">
			{({ open }) => (
				<>
					<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
						<div className="flex h-16 items-center justify-between">
							<div className="flex items-center">
								<div className="flex-shrink-0">
									<img
										className="h-8 w-8"
										src={Logo}
										alt="Banco BASE"
									/>
								</div>
								<div className="hidden md:block">
									<div className="ml-10 flex items-baseline space-x-4">
										{navigation.map(
											({ current, href, name }) => (
												<a
													key={name}
													href={href}
													className={classNames(
														current
															? "bg-gray-900 text-white"
															: "text-gray-300 hover:bg-gray-700 hover:text-white",
														"rounded-md px-3 py-2 text-sm font-medium",
													)}
													aria-current={
														current
															? "page"
															: undefined
													}
												>
													{name}
												</a>
											),
										)}
									</div>
								</div>
							</div>

							{/* Desktop */}
							<div className="hidden md:block">
								<div className="ml-4 flex items-center md:ml-6">
									<Menu as="div" className="relative ml-3">
										<div>
											<Menu.Button className="flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
												<span className="sr-only">
													Abrir menú del usuario
												</span>
												<img
													className="h-8 w-8 rounded-full"
													src={user.imageUrl}
													alt="Imagen del usuario"
												/>
											</Menu.Button>
										</div>
										<Transition
											as={Fragment}
											enter="transition ease-out duration-100"
											enterFrom="transform opacity-0 scale-95"
											enterTo="transform opacity-100 scale-100"
											leave="transition ease-in duration-75"
											leaveFrom="transform opacity-100 scale-100"
											leaveTo="transform opacity-0 scale-95"
										>
											<Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
												{userNavigation.map(
													({ href, name }) => (
														<Menu.Item key={name}>
															{({ active }) => (
																<a
																	href={href}
																	className={classNames(
																		active
																			? "bg-gray-100"
																			: "",
																		"block px-4 py-2 text-sm text-gray-700",
																	)}
																>
																	{name}
																</a>
															)}
														</Menu.Item>
													),
												)}
											</Menu.Items>
										</Transition>
									</Menu>
								</div>
							</div>

							{/* Mobile */}
							<div className="-mr-2 flex md:hidden">
								<Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
									<span className="sr-only">
										Abrir menu principal
									</span>
									{open ? (
										<IconX className="block h-6 w-6" />
									) : (
										<IconMenu2 className="block h-6 w-6" />
									)}
								</Disclosure.Button>
							</div>
						</div>
					</div>

					<Disclosure.Panel className="md:hidden">
						<div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
							{navigation.map(({ current, href, name }) => (
								<Disclosure.Button
									key={name}
									as="a"
									href={href}
									className={classNames(
										current
											? "bg-gray-900 text-white"
											: "text-gray-300 hover:bg-gray-700 hover:text-white",
										"block rounded-md px-3 py-2 text-base font-medium",
									)}
									aria-current={current ? "page" : undefined}
								>
									{name}
								</Disclosure.Button>
							))}
						</div>
						<div className="border-t border-gray-700 pb-3 pt-4">
							<div className="flex items-center px-5">
								<div className="flex-shrink-0">
									<img
										className="h-10 w-10 rounded-full"
										src={user.imageUrl}
										alt=""
									/>
								</div>
								<div className="ml-3">
									<div className="text-base font-medium leading-none text-white">
										{user.name}
									</div>
									<div className="text-sm font-medium leading-none text-gray-400">
										{user.email}
									</div>
								</div>
							</div>
							<div className="mt-3 space-y-1 px-2">
								{userNavigation.map(({ href, name }) => (
									<Disclosure.Button
										as="a"
										className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
										href={href}
										key={name}
									>
										{name}
									</Disclosure.Button>
								))}
							</div>
						</div>
					</Disclosure.Panel>
				</>
			)}
		</Disclosure>
	);
};
