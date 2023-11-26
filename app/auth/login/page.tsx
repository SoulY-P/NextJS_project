import { LoginForm } from "./LoginForm";

export default function Login(){

  return (
    <section className="bg-gray-50 py-8 dark:bg-gray-900 dark:bg-gradient-to-bl  dark:from-slate-900 dark:via-purple-900 dark:to-slate-900 bg-gradient-to-bl from-rose-100 to-teal-100">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto min-h-[calc(100vh-4rem)] lg:py-0">
        <a
          href="#"
          className="flex items-center text-xl text-black mb-6 sm:text-2xl font-bold  dark:text-white"
        >
          Connexion
        </a>

        <LoginForm/>
      </div>
    </section>
  )
};