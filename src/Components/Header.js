import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
    ArrowPathIcon,
    Bars3Icon,
    ChartPieIcon,
    CursorArrowRaysIcon,
    FingerPrintIcon,
    SquaresPlusIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'

const products = [
    { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
    { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
    { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
    { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
    { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
]
const callsToAction = [
    { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
    { name: 'Contact sales', href: '#', icon: PhoneIcon },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Example() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className="bg-white">
            <nav className="flex items-center justify-between" aria-label="Global">
                <div className="flex lg:flex-1">
                    <a href="#" className="-m-1.5 p-1.5">
                        <span className='text-[#54BD95] text-5xl font-semibold'>Biccas</span>
                    </a>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <Popover.Group className="hidden lg:flex lg:gap-x-12">
                    <a href="#" className="text-sm font-semibold leading-6 text-[#A6A6A6] hover:text-[#000] ">
                        Home
                    </a>
                    <a href="#" className="text-sm font-semibold leading-6 text-[#A6A6A6] hover:text-[#000]">
                        Product
                    </a>
                    <a href="#" className="text-sm font-semibold leading-6 text-[#A6A6A6] hover:text-[#000]">
                        FAQ
                    </a>
                    <a href="#" className="text-sm font-semibold leading-6 text-[#A6A6A6] hover:text-[#000]">
                        About Us
                    </a>
                </Popover.Group>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center">
                    <a href="#" className="text-sm font-semibold leading-6 text-[#A6A6A6] mr-2.5 hover:text-black">
                        Login
                    </a>
                    <a href="#" className="bg-[#54BD95] hover:bg-[#54BD95] text-white font-bold py-2 px-4 rounded-md shadow">
                        Sign Up
                    </a>
                </div>
            </nav>

            {/* For Mobile Phones */}
            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-10" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className='text-[#54BD95] text-5xl font-semibold'>Biccas</span>
                        </a>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Home
                                </a>
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Product
                                </a>
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    FAQ
                                </a>
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    About Us
                                </a>
                            </div>
                            <div className="py-6">
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Log in
                                </a>
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Sign Up
                                </a>
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
            {/* For Mobile Phones */}

            <div className='flex mt-5 pt-[100px]'>
                <div>
                    <p className='text-7xl font-bold text-left'>We’re here <br />to Increase your <br /> Productivity</p>

                    <img src='/liner.png' className='my-[40px]' />

                    <p className='w-2/4 text-left'>Let's make your work more organize and easily using the Taskio Dashboard with many of the latest featuresin managing work every day.</p><br /><br />

                    <div className='text-left flex items-center'>
                        <a href="#" className="bg-[#54BD95] hover:bg-[#54BD95] text-white p-4 rounded-3xl shadow mr-5">
                            Try free trial
                        </a>

                        <a href='#' className='flex'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
                        </svg>
                            View Demo</a>
                    </div>
                </div>
                <div className='relative'>
                    <div className='bg-[#52BD94] h-[435px] rounded-lg'>
                        <div className='w-[262px] rounded-lg bg-white flex items-center h-[78px] text-left p-2 relative right-[170px] top-[20px] justify-between'>
                            <div className='flex flex-col'>
                                <input type='text' className='w-24' placeholder='Enter Amount' />
                                <span>$450..00</span>
                            </div>
                            <button className='rounded-2xl text-white bg-[#54BD95] py-2 px-5'>Send</button>
                        </div>

                        <img src='/square.png' className='absolute left-[-50px] top-[150px]' />
                        <img src='/chat.png' className='absolute right-[35px] top-[415px] z-10' />
                        <img src='/db.png' className='absolute right-[-25px] top-[16px] z-10' />
                        <img src='/credit-card.png' className='absolute right-[-65px] top-[190px] z-10' />

                        <div className='w-[138px] rounded-lg bg-white flex items-center h-[78px] text-left p-2 relative right-[85px] top-[250px] justify-between z-10'>
                            <div className='flex flex-col'>
                                <input type='text' className='w-24' placeholder='Total Income' />
                                <span>$245..00</span>
                            </div>
                        </div>

                        <img src='/background-bg1.png' />
                        {/* <img src='/background-bg.png' /> */}
                        <img src='/person.png' className='absolute top-[45px] rounded-lg' />
                    </div>
                </div>
            </div>
        </header>
    )
}
