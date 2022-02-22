import Head from "next/head"
import Image from 'next/image'

export default function Team() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
        <div className="text-center pb-12">
            <h2 className="text-base font-bold text-indigo-600">
                Conestoga students with big ideas
            </h2>
            <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-gray-900">
                Meet the Team
            </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 content-center">
            <div className="w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center">
                <div>
                    <Image className="object-center object-cover h-auto w-full" src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" alt="photo" 
                        height={400}
                        width={400}
                    />
                </div>
                <div className="text-center py-8 sm:py-6">
                    <p className="text-xl text-gray-700 font-bold mb-2">Megan Bradshaw</p>
                    <p className="text-base text-gray-400 font-normal">Software Developer</p>
                </div>
            </div>
            <div className="w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center">
                <div>
                    <Image className="object-center object-cover h-auto w-full" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" alt="photo" 
                        height={400}
                        width={400}
                    />
                </div>
                <div className="text-center py-8 sm:py-6">
                    <p className="text-xl text-gray-700 font-bold mb-2">Nick Iden</p>
                    <p className="text-base text-gray-400 font-normal">Software Developer</p>
                </div>
            </div>
            <div className="w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center">
                <div>
                    <Image className="object-center object-cover h-auto w-full" src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1171&q=80" alt="photo" 
                        height={400}
                        width={400}
                    />
                </div>
                <div className="text-center py-8 sm:py-6">
                    <p className="text-xl text-gray-700 font-bold mb-2">David Inglis</p>
                    <p className="text-base text-gray-400 font-normal">Software Developer</p>
                </div>
            </div>
            <div className="w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center">
                <div>
                    <Image className="object-center object-cover h-auto w-full" src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" alt="photo" 
                        height={400}
                        width={400}
                    />
                </div>
                <div className="text-center py-8 sm:py-6">
                    <p className="text-xl text-gray-700 font-bold mb-2">Gabriel Gurgel</p>
                    <p className="text-base text-gray-400 font-normal">Software Developer</p>
                </div>
            </div>
            <div className="w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center">
                <div>
                    <Image className="object-center object-cover h-auto w-full" src="https://images.unsplash.com/photo-1580841129862-bc2a2d113c45?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" alt="photo" 
                        height={400}
                        width={400}
                    />
                </div>
                <div className="text-center py-8 sm:py-6">
                    <p className="text-xl text-gray-700 font-bold mb-2">Paul Smith</p>
                    <p className="text-base text-gray-400 font-normal">Software Developer</p>
                </div>
            </div>
        </div>
    </section>
  )
}