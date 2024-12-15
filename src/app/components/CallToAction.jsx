import { Button } from 'flowbite-react';
export default function CallToAction() {
  return (
    <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
        <div className="flex-1 justify-center flex flex-col">
            <h2 className='text-2xl'>
                Get your own Website!
            </h2>
            <p className='text-gray-500 my-2'>
                Checkout these skills if you want to build your own website.
            </p>
            <Button gradientDuoTone='purpleToPink' className='rounded-tl-xl rounded-bl-none'>
                <a href="https://www.linkedin.com/in/raoalihassan-webdeveloper-jamstack-react/" target='_blank' rel='noopener noreferrer'>
                    Contact us
                </a>
            </Button>
        </div>
        <div className="p-7 flex-1">
            <img src={"https://res.cloudinary.com/dufs6ssos/image/upload/v1734256771/NextJs-Tailwindcss_f8z7bv.png"}/>
        </div>
    </div>
  )
}