function Footer() {
    return (
        <div className='bg-[#161C28] text-white mt-16 max-w-[1440px] w-full m-auto'>
            <div className='pt-24 px-24'>
                <div className='grid grid-cols-2 text-left'>
                    <div>
                        <p className='text-[50px] font-semibold'>People are Saying <br /> About DoWhith</p>

                        <p className='w-[380px] text-[#A6A6A6] font-medium'>Everything you need to accept to payment and grow your money of manage anywhere on planet</p><br /><br />

                        <img src='/quote.png' /> <br /><br />

                        <p className='w-[380px] text-[#A6A6A6] font-medium'>I am very helped by this E-wallet application , my days are very easy to use this application and its very helpful in my life , even I can pay a short time 😍</p> <br /><br />

                        <p className='text-[#A6A6A6] font-medium'>_ Aria Zinanrio</p>

                        <div className='flex gap-4 mt-8'>
                            <img src='/client1.png' />
                            <img src='/client2.png' />
                            <img src='/client3.png' />
                            <img src='/client4.png' />
                            <img src='/play.png' />
                        </div>

                    </div>

                    <div className='text-white px-20 py-12 bg-[#222938] rounded-lg'>
                        <img src='/data.png' className='m-auto' />
                        <h1 className='text-3xl text-center my-4'>Get Started</h1>

                        <div class="mb-4">
                            <label class="block text-lg font-bold my-2" for="username">
                                Email
                            </label>
                            <input class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id="username" type="text" placeholder="Enter your Email" />
                        </div>

                        <div>
                            <label for="message" class="block my-2 text-lg font-bold ">Message</label>

                            <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
                        </div>

                        <button className='w-full p-4 mt-4 bg-[#54BD95] hover:bg-[#54BD95] text-white font-bold rounded-md shadow'>Request Demo</button>
                        <p className='text-right'><span className='text-[#A6A6A6]'>or</span> Start Free Trail</p>

                    </div>
                </div>

                <div className='grid grid-cols-2 mt-16 text-left'>
                    <div>
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className='text-[#54BD95] text-5xl font-semibold'>Biccas</span>
                        </a>
                        <p className='my-5'>Get started now try our product</p>

                        <div class="mb-5 relative">
                            <input type="text" id="default-input" placeholder='Enter your email here' class="bg-transparent border border-[#A6A6A6] border-2 text-gray-900 text-sm rounded-3xl focus:ring-blue-500 focus:border-blue-500 block p-3.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-9/12" />

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-11 h-11 absolute top-[0px] right-[0px] translate-y-1 -translate-x-36 mr-1 text-[#A6A6A6]">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>

                        </div>
                    </div>

                    <div className='grid grid-cols-3'>
                        <div className='flex flex-col gap-6'>
                            <h1 className='text-lg'>Support</h1>

                            <ul>
                                <li className='text-[#A6A6A6] font-medium mb-3 text-lg'>Help Centre</li>
                                <li className='text-[#A6A6A6] font-medium mb-3 text-lg'>Account Information</li>
                                <li className='text-[#A6A6A6] font-medium mb-3 text-lg'>About</li>
                                <li className='text-[#A6A6A6] font-medium mb-3 text-lg'>Contact</li>
                            </ul>
                        </div>

                        <div className='flex flex-col gap-6'>
                            <h1 className='text-lg'>Help and Solution</h1>

                            <ul>
                                <li className='text-[#A6A6A6] font-medium mb-3 text-lg'>Talk to Support</li>
                                <li className='text-[#A6A6A6] font-medium mb-3 text-lg'>Supoort docs</li>
                                <li className='text-[#A6A6A6] font-medium mb-3 text-lg'>System status</li>
                                <li className='text-[#A6A6A6] font-medium mb-3 text-lg'>Covid responses</li>
                            </ul>
                        </div>

                        <div className='flex flex-col gap-6'>
                            <h1 className='text-lg'>Product</h1>

                            <ul>
                                <li className='text-[#A6A6A6] font-medium mb-3 text-lg'>Update</li>
                                <li className='text-[#A6A6A6] font-medium mb-3 text-lg'>Security </li>
                                <li className='text-[#A6A6A6] font-medium mb-3 text-lg'>Beta Test</li>
                                <li className='text-[#A6A6A6] font-medium mb-3 text-lg'>Pricing product</li>
                            </ul>
                        </div>

                    </div>
                </div>

                <div className='flex justify-between py-6'>
                    <p>© 2023 Biccas Inc. Copyright and rights reserved</p>
                    <p>Terms and Condtions . Privacy Policy</p>
                </div>

            </div>
        </div>
    );
}


export default Footer;