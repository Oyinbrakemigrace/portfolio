"use client"
import React, { useState } from 'react'

function ContactMe() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const[loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true)

    fetch("https://formspree.io/f/xjkbbqww", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          alert('Email sent successfully!');
          setLoading(false)
          setFormData({ name: '', email: '', message: '' });
        } else {
          alert('Failed to send email. Please try again.');
        }
      })
      .catch((error) => {
        setLoading(false)
        console.error('Error:', error);
        alert('Failed to send email. Please try again.');
      });
  };

  return (
    <div className='container mx-auto p-5'>
      <h2 className='font-bold lg:text-5xl text-3xl my-5 text-center bg-clip-text text-transparent bg-gradient-to-tl from-[#AD7FAD] to-[#F1B2AA]'>
        Contact me
      </h2>
      <form onSubmit={handleSubmit} className='flex flex-col gap-6 justify-center items-center dark:text-white w-full max-w-lg mx-auto'>
        <div className='flex flex-col w-full'>
          <label htmlFor="name" className='mb-2 text-zinc-700 dark:text-zinc-400 font-medium'>Full Name</label>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            type="text"
            id="name"
            placeholder='enter your full name'
            className='w-full p-3 border dark:text-zinc-700 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#AD7FAD]'
          />
        </div>
        <div className='flex flex-col w-full'>
          <label htmlFor="email" className='mb-2 text-zinc-700 font-medium dark:text-zinc-400'>Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder='your@email.com'
            className='w-full p-3 border dark:text-zinc-700 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#AD7FAD]'
          />
        </div>
        <div className='flex flex-col w-full'>
          <label htmlFor="message" className='mb-2 text-zinc-700 font-medium dark:text-zinc-400'>Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder='enter your message here'
            id="message"
            cols="30"
            rows="10"
            className='w-full p-3 border dark:text-zinc-700 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#AD7FAD]'
          />
        </div>
        <button
          type="submit"
          className='mt-5 w-full px-6 py-3 bg-gradient-to-tl from-[#AD7FAD] to-[#F1B2AA] text-white font-bold rounded-md hover:from-[#F1B2AA] hover:to-[#AD7FAD] focus:outline-none focus:ring-2 focus:ring-[#AD7FAD]'
        >
          {loading ? 'Submitting...' : "Submit"}
        </button>
      </form>
    </div>
  )
}

export default ContactMe
