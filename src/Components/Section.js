import Price from "./Price";

function Section() {
    return <div>
        <div className="my-16">
            <h1 className="text-4xl font-bold">More than 25,000 teams use Collabs</h1>
            <img src='/Logo.png' className='w-full my-12' />
        </div>

        <div className="flex my-16">
            <div className="text-left grid">
                <h1 className="text-[50px] font-semibold">How we support our <br /> pratner all over the world</h1>

                <span className="text-[#A6A6A6]">SaaS become a common delivery model for many business application, including office software, messaging software, payroll processing software, DBMS software, management software</span>

                <div className="flex w-5/12	justify-between items-center">
                    <div>
                        <img src='/5rating.png' className="mb-4" />
                        <b>4.9</b> / 5 rating
                        <p className="text-[#A6A6A6] font-bold">Databricks</p>
                    </div>
                    <div>
                        <img src='/4rating.png' className="mb-4" />
                        <b>4.8</b> / 5 rating
                        <p className="text-[#A6A6A6] font-bold">Chainanalyis</p>
                    </div>

                </div>
            </div>

            <div className="grid flex-col text-left gap-6">
                <div className="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 w-[50px] h-[50px] shadow-lg p-[5px] text-[#A6A6A6] mr-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75" />
                    </svg>

                    <div>
                        <h2 className="text-3xl font-bold flex mb-4">Publishing</h2>
                        <p className="text-[#A6A6A6]">Plan, collaborate, and publishing your contetn that drivees meaningful engagement and growth for your barnd</p>
                    </div>
                </div>

                <div className="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 w-[50px] h-[50px] shadow-lg p-[5px] text-[#A6A6A6] mr-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                    </svg>

                    <div>
                        <h2 className="text-3xl font-bold flex  mb-4">Analytics</h2>
                        <p className="text-[#A6A6A6]">Analyze your performance and create goegeous <br /> report</p>
                    </div>
                </div>

                <div className="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 w-[50px] h-[50px] shadow-lg p-[5px] text-[#A6A6A6] mr-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a7.464 7.464 0 01-1.15 3.993m1.989 3.559A11.209 11.209 0 008.25 10.5a3.75 3.75 0 117.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 01-3.6 9.75m6.633-4.596a18.666 18.666 0 01-2.485 5.33" />
                    </svg>

                    <div>
                        <h2 className="text-3xl font-bold flex mb-4">Engagement</h2>

                        <p className="text-[#A6A6A6]">Quiuckly navigate you anda engage with your <br />adience</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="grid text-left items-center grid-cols-3 my-16 gap-20">
            <h1 className="text-[50px] font-semibold">Our Features you cab get</h1>

            <p className="text-[#A6A6A6]">We offer a variety of interesting features that you can help increase yor productivity at work and manage your projrct esaly</p>

            <button className="w-fit bg-[#54BD95] hover:bg-[#54BD95] text-white font-bold py-2 px-4 rounded-2xl shadow">Get Started</button>
        </div>

        <div className="grid grid-cols-3 text-left my-16">
            <div>
                <img src='/pic1.png' />
                <div>
                    <h1 className="text-3xl font-semibold my-4">Collaboration Teams</h1>
                    <p className="text-[#A6A6A6]">Here you can handle projects together with team virtually</p>
                </div>
            </div>
            <div>
                <img src='/pic2.png' />
                <div>
                    <h1 className="text-3xl font-semibold my-4">Cloud Storage</h1>
                    <p className="text-[#A6A6A6]">No nedd to worry about storage because we provide storage up to 2 TB</p>
                </div>
            </div>
            <div>
                <img src='/pic3.png' />
                <div>
                    <h1 className="text-3xl font-semibold my-4">Daily Analytics</h1>
                    <p className="text-[#A6A6A6]">We always provide useful informatin to make it easier for you every day</p>
                </div>
            </div>
        </div>

        <div className='flex mt-5 pt-[100px] justify-between my-16'>
            <div>
                <p className='text-7xl font-bold text-left mb-12'>What Benifit Will <br /> You Get</p>

                <ul className="text-left flex flex-col gap-5">
                    <li className="flex gap-x-2.5 items-center"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8 text-[#54BD95]">
                        <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
                    </svg>
                        Free Consulting With Experet Saving Money
                    </li>

                    <li className="flex gap-x-2.5 items-center"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8 text-[#54BD95]">
                        <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
                    </svg>
                        Online Banking
                    </li>

                    <li className="flex gap-x-2.5 items-center"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8 text-[#54BD95]">
                        <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
                    </svg>
                        Investment Report Every Month
                    </li>

                    <li className="flex gap-x-2.5 items-center"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8 text-[#54BD95]">
                        <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
                    </svg>
                        Saving Money For The Future
                    </li>

                    <li className="flex gap-x-2.5 items-center"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8 text-[#54BD95]">
                        <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
                    </svg>
                        Online Transection
                    </li>
                </ul>
            </div>

            <div className='relative'>
                <div className='h-[435px] rounded-lg'>

                    <img src='/gallery.png' className='absolute left-[-55px] top-[150px]' />

                    <img src='/saving.png' className='absolute left-[-150px] top-[0]' />

                    <img src='/money-transfully.png' className="absolute left-[-150px] bottom-[0]" />

                    <img src='/income.png' className="absolute right-[0px] top-[100px]" />

                    <img src='/laptop.png' className='rounded-lg w-4/5' />
                </div>
            </div>
        </div>

        <Price />
    </div>
}

export default Section;