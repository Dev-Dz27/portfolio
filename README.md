
 {/* Book a call */}
      <Card customClasses="mx-4 mt-8">
        <Link
          href="https://cal.com/aulianza/schedule"
          target="_blank"
          data-aos-duration="1000"
		  className="p-4  relative flex flex-col items-center duration-700 group md:gap-5 md:py-24  lg:pb-48  md:p-16 "
		  >
          <div className="flex  gap-5 items-start justify-between md:gap-20   z-10">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-base md:text-lg font-medium duration-150 lg:text-2xl text-zinc-200 group-hover:text-white font-display md:text-[18px] sm:text-[15px]">
                <span>1 on 1 Chit-chat Session</span>
                <Image
                  src="/dot_new_animated.svg"
                  width={40}
                  height={40}
                  alt="new"
                />
              </div>
              <p className="text-neutral-400 text-sm md:text-base">
                Let’s find some time to talk about anything!{" "}
              </p>
            </div>
            <div className="p-3 border-2 border-neutral-500 text-neutral-300 rounded-full">
              <Calendar size={22} />
            </div>
          </div>
          <div className="flex gap-5 text-neutral-200 text-sm">
            <div className="flex items-center gap-2">
              <Clock size={18} />
              <span>30 Minutes</span>
            </div>
            <div className="flex items-center gap-2">
              <Video size={18} />
              <span>Google Meet</span>
            </div>
          </div>
        </Link>
      </Card>


