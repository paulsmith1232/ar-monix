import Link from "next/link"

export default function Description() {
  return (
    <div className="py-28 container relative mx-auto">
      <div className="items-center flex flex-wrap">
        <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
          <div className="">
            <h1 className="font-semibold text-5xl">
              More than just a music app
            </h1>
            <p className="mt-4 text-lg text-blueGray-200">
              AR-MONIX is an AR powered music teaching tool. Designed to be as unobtrusive as possible, it will use a device&apos;s camera to recognize a students guitar without input from the user. Through the power of AR, students can follow along with instructions on-screen to learn scales, chords and more. 
            </p>
            <p className="pt-2 mt-4 text-lg text-blueGray-200">
              You can view our prototype in action on your mobile device!
            </p>

          </div>
          <div className="pt-10"></div>
          <div className=" inline-flex items-center h-10 px-8 m-2 text-lg text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800">
            <Link className="" href='https://developer.cloud.unity3d.com/share/share.html?shareId=-J-H4uJKb_'>Play Here</Link>

          </div>
        </div>
      </div>
    </div>
  )  
}