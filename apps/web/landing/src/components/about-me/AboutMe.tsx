export default function AboutMe() {
  return (
    <div className="lg:row-span-1 ring-1 dark:ring-white/10 ring-primary/5 dark:bg-secondary shadow-xl dark:shadow-thick rounded-3xl p-8">
      <div className="relative flex items-center gap-x-4">
        <div className="text-sm leading-6">
          <p className="font-semibold text-primary dark:text-white">
            <a href="#">
              <span className="absolute inset-0"></span>
              @Ferdi.ardiansa
            </a>
          </p>
          <p className="text-zinc-500 dark:text-zinc-400">
            Software Engineer Frontend
          </p>
        </div>
      </div>
      <p className="text-3xl mt-6 font-medium lg:text-4xl tracking-tight text-primary dark:text-white">
        Hey, welcome to my site!
      </p>
      <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-400 font-light lg:text-xl">
        I&apos;m a software engineer, developer based in Indonesia. I craft
        design into a webpage and dive into coding intricacies.
        {/* <br />
        <br />
        Beyond screens, I find solace and joy riding waves along Malibu&apos;s
        shores. My life blends tech and nature, coding sessions, and catching
        waves. */}
      </p>
    </div>
  )
}
