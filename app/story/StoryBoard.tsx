import Image from 'next/image'

export const StoryBoard = ({ setAction }: any) => {
        return(
            <>
            <p className='mb-10'>
                <a href="/" className="w-full disabled:bg-purple-400 bg-purple-800 text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">&lt;-&nbsp;&nbsp;</span>go back</a>
            </p>
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div>
                    <h2 className="font-bold text-2xl flex items-center justify-center mt-7">__:: Hello World ::__</h2>
                    <h4 className="text-sm flex items-center justify-center mb-7">°°°:::: Hello Guys ::::°°°</h4>
                </div>
                <section className="flex justify-between items-between bg-gray-50 dark:bg-gray-900 dark:bg-gradient-to-bl  dark:from-slate-900 dark:via-purple-900 dark:to-slate-900 bg-gradient-to-bl from-rose-100 to-teal-100">
                    <div className="container">
                        <div className="row">
                            <div className="relative mt-2 left-0 flex flex-wrap h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
                                <div className='mb-4'>
                                <a className="flex group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30" target="_blank" rel="noreferrer" href="https://music.youtube.com/playlist?list=OLAK5uy_mioxbPmFCkX7wTm7X7BpLVkIsBfoZK2dE"><div className='font-bold flex items-center mr-4'>20</div><Image className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert" src="/revalite--By--SoulY-P.png" width="150" height="150" alt="album rêvalité" priority/><div className='font-xl font-bold flex items-center ml-4'>20</div></a>
                                </div>
                            </div>
                            <div className="relative mt-2 left-0 flex flex-wrap h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
                                <div className='mb-4'>
                                <a className="flex group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30" target="_blank" rel="noreferrer" href="https://music.youtube.com/playlist?list=OLAK5uy_kWLhwCFRWAKWKM2h5QvvVNzy0GZtMcSs4"><div className='font-bold flex items-center mr-4'>20</div><Image className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert" src="/PulsaR--By--SoulY-P.png" width="150" height="150" alt="album PulsaR" priority/><div className='font-bold flex items-center ml-4'>21</div></a>
                                </div>
                            </div>
                            <div className="relative mt-2 left-0 flex flex-wrap h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
                                <div className='mb-4'>
                                <a className="flex group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30" target="_blank" rel="noreferrer" href="https://music.youtube.com/playlist?list=OLAK5uy_lmTImxGxB3ZIN40u-5R7hus-vpHaXi724"><div className='font-bold flex items-center mr-4'>20</div><Image className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert" src="/CreScenDo--By--SoulY-P.png" width="150" height="150" alt="album CreScenDo" priority/><div className='font-bold flex items-center ml-4'>22</div></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
            </>
        )
}