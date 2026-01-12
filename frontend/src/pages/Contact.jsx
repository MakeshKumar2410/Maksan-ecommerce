import React, { useState } from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
      to_email: 'makeshmk2004@gmail.com'
    }

    emailjs.send(
      'service_f2m15lq', 
      'template_lnf1oyp', 
      templateParams,
      'nznpcVvM-4NaxUMAY' 
    ).then((result) => {
      console.log(result.text)
      alert('Message sent successfully!')
      setName('')
      setEmail('')
      setMessage('')
    }, (error) => {
      console.log(error.text)
      alert('Failed to send message, please try again.')
    })
  }

  return (
    <div>
      
      <div className='text-center text-2xl pt-10 border-t'>
          <Title text1={'CONTACT'} text2={'US'} />
      </div>

      <div className='my-5 md:my-10 flex flex-col justify-center md:flex-row gap-10 mb-5 md:mb-20'>
        <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-gray-600'>Our Store</p>
          <p className=' text-gray-500'> 169 East Street, <br /> Nh45 Main road Starting, Neyveli</p>
          <p className=' text-gray-500'>Phone: +91 123456789 <br /> Email: contact@maksanecommerce.com</p>
          <p className='font-semibold text-xl text-gray-600'>Careers at Forever</p>
          <p className=' text-gray-500'>Explore exciting career opportunities and grow with our team.</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
        </div>
      </div>

      <div className='mt-2 md:mt-5 mb-5 md:mb-10 flex flex-col justify-center md:flex-row gap-10'>
        <div className='flex flex-col justify-center items-start gap-6 w-full md:max-w-[480px]'>
          <p className='font-semibold text-xl text-gray-600'>Get in Touch</p>
          <form onSubmit={handleSubmit} className='flex flex-col gap-4 w-full'>
            <input 
              type='text' 
              placeholder='Your Name' 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              className='border border-gray-300 px-4 py-2' 
              required 
            />
            <input 
              type='email' 
              placeholder='Your Email' 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              className='border border-gray-300 px-4 py-2' 
              required 
            />
            <textarea 
              placeholder='Your Message' 
              value={message} 
              onChange={(e) => setMessage(e.target.value)} 
              className='border border-gray-300 px-4 py-2 h-32' 
              required 
            />
            <button type='submit' className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Send Message</button>
          </form>
        </div>
        <div className='flex flex-col justify-center items-start gap-6'>
          <NewsletterBox/>
        </div>
      </div>

    </div>
  )
}

export default Contact
