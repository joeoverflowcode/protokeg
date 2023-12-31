import React from 'react'

function Contact() {
  return (


    <div className='sm:m-auto sm:max-w-[1040px] p-4 '>
{/* <h1 className='py-4 text-4xl font-bold text-center text-[#001b5e]'>Contact</h1> */}
<h1 className='pt-8 text-center text-4xl font-bold m-1 text-[#001b5e] tracking-tighter'><span className='pl-1 pr-1 border-[#001b5e] border '>C</span>ontact</h1>
<form action='https://getform.io/f/ce200de9-c4ba-40ce-bf07-723f4335cf36' method='POST' encType='multipart/form-data' className='text-[#001b5e]'>
    <div className='grid sm:grid-cols-2 gap-4 w-full py-2'>
        <div className='flex flex-col'>
            <label className='uppercase text-sm py-2'>Name</label>
            <input className='border-2 rounded-lg p-3 flex border-gray-300' type='text' name='name'/>
        </div>
        <div className='flex flex-col'>
            <label className='uppercase text-sm py-2'>Phone</label>
            <input className='border-2 rounded-lg p-3 flex border-gray-300' type='text' name='phone'/>
        </div>
    </div>
        <div className='flex flex-col py-2'>
            <label className='uppercase text-sm py-2'>Email</label>
            <input className='border-2 rounded-lg p-3 flex border-gray-300' type='email' name='email'/>
        </div>
        <div className='flex flex-col py-2'>
            <label className='uppercase text-sm py-2'>Subject</label>
            <input className='border-2 rounded-lg p-3 flex border-gray-300' type='text' name='subject'/>
        </div>
        <div className='flex flex-col py-2'>
            <label className='uppercase text-sm py-2'>Message</label>
            <textarea className='border-2 rounded-lg p-3 flex border-gray-300' rows='10' name='message'/>
        </div>
        {/* <button className='bg-[#001b5e] text-gray-100 mt-4 w-full p-4 rounded-lg'>
        Send Message
        </button> */}
        <button className="w-full p-4 bg-gradient-to-b from-blue-900 to-gray-800 shadow-md
                        text-white rounded-lg shadow-gray-800 cursor-pointer hover:scale-110 ease-in duration-300 md:text-xl lg:text-xl
                        " type='Submit'>Send Message</button>
</form>

    </div>    

  )
}

export default Contact