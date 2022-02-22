import Image from 'next/image'

export default function Hero() {
  return (
    <div className="mx-auto container py-2 ">
            <div className="w-full flex justify-center">
                <div className="w-full bg-gradient-to-r from-indigo-700 to-indigo-400 md:py-8 md:px-8 px-5 py-4 xl:px-12 xl:py-16">
                    <div>
                        <div className="flex flex-wrap items-center md:flex-row flex-col-reverse">
                            <div className="md:w-2/3 w-full pb-6 md:pb-0 md:pr-6 flex-col md:block flex items-center justify-center md:pt-0 pt-4">
                              <h2 className="text-4xl font-bold mb-2 text-white">
                                Helping students and music teachers alike
                              </h2>
                              <h3 className="text-2xl mb-8 text-gray-200">
                                Learn how to play the guitar with an augmented reality teaching assistant.
                              </h3>
                            </div>
                            <div className="md:w-1/3 w-2/3">
                              <Image 
                                src="/images/logo.png"
                                height={400}
                                width={400}
                                alt="App Logo"
                              />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )  
}