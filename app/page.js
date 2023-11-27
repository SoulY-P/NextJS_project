{/* import Image from 'next/image' */}
{/*import { YouTubeApi } from "../app/youtube" */}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
          <a href="/"><code className="font-mono font-bold">.: Next Project :.</code></a>
        </div>
        <div className="fixed top-0 left-0 flex w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <div className='font-bold'>
             <a className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30" href="/">Home</a>
             <a className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30" href="story">Story</a>
             <a className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30" href="videos">Mov-Eyes</a>
          </div>
        </div>
        <div className="fixed bottom-0 left-0 flex w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <div className='font-bold'>
             <a className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30" href="auth/login">Login</a>
             <a className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30" href="auth/signup">Sign up</a>
          </div>
        </div>
      </div>
      <div className="w-full mt-4">
      <div className="w-full relative flex justify-center place-items-center">
      {/*  <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/playa.jpg"
          alt=".: Next Project :."
          width={745}
          height={419}
          priority
          />   */}
        {/* <YouTubeApi /> */}
        <iframe className="rounded-full hover:rounded-lg ease-in-out duration-[2000ms] hover:h-[100vh]" title="météo d'ici et d'ailleurs en temps réel" sandbox="allow-same-origin allow-scripts allow-forms allow-popups" width="480" height="480" allow="autoplay" src="https://meteo.souly-p.com"></iframe>
        {/* <iframe title="Universe Lighthouse from SoulY P." sandbox="allow-same-origin allow-scripts allow-forms allow-popups" width="480" height="480" allow="autoplay;muted" src="https://www.youtube.com/embed/o-HpYxf3O1o?si=7agYhDA48bG1Z8Ea"></iframe> */}
      </div>
      </div>
      <div className="mb-32 mt-20 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://www.youtube.com/@soulyp-electromusic"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            YouTube{' '}
            <span className="inline-block transition-transform group-hover:translate-x-4 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Official Artist Channel
          </p>
        </a>

        <a
          href="https://open.spotify.com/artist/0rKgOix7d2CKBeIwLoZM9l"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Spotify{' '}
            <span className="inline-block transition-transform group-hover:translate-x-4 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          Official Artist Page
          </p>
        </a>

        <a
          href="https://music.apple.com/fr/artist/souly-p/1529090256"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
          Apple{' '}
            <span className="inline-block transition-transform group-hover:translate-x-4 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          Official Artist Page
          </p>
        </a>

        <a
          href="https://music.amazon.com/artists/B08GL1JJQG/souly-p"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
          Amazon{' '}
            <span className="inline-block transition-transform group-hover:translate-x-4 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          Official Artist Page
          </p>
        </a>
      </div>
    </main>
  )
}
