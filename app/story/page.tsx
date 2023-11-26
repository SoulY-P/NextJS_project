import { StoryBoard } from "./StoryBoard"

export default function Story() {
    return (
        <section className="bg-gray-50 dark:bg-gray-900 dark:bg-gradient-to-bl  dark:from-slate-900 dark:via-purple-900 dark:to-slate-900 bg-gradient-to-bl from-rose-100 to-teal-100">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto min-h-[calc(100vh-4rem)] lg:py-0">
                <div>
                    <h1 className="font-bold text-2xl mb-20 flex items-center justify-center">What's up on Earth..?</h1>
                </div>
                <StoryBoard />
            </div>
        </section>
    )

};