import React from 'react'
import {motion} from 'framer-motion'

const About = () => {
  return (
    <motion.div className='mt-24 p-10 pt-12 h-auto flex flex-col justify-evenly items-start md:items-center'
    initial={{ opacity: 0}}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.3 }}>
        <article className='grid grid-cols-1 md:items-center md:w-2/5 md:p-2'>
            <h1 className='font-bold text-lg mb-8'>About me</h1>
            <p className='text-sm'>
                <span className='underline decoration-purple-600 decoration-4'>Curious, Creative & Enthusiastic</span>; that's how I would describe myself.
            </p>
            <br></br>
            <p className='text-sm'>
            I'm passionate about machine learning and problem-solving. I love meeting new people, exchanging ideas, and spreading knowledge and positivity. Feel free to discuss emerging tech, web, and machine learning with me. Let's connect and explore tech together!
            </p>
            <br></br>
            <p className='text-sm'>
                I'm a CSE undergrad('24) and I'm looking for <span className='underline decoration-purple-600 decoration-4'>full time web developer roles.</span>
            </p>
            <br></br>
            <p className='text-sm'>Hit me up on <a href='https://twitter.com/TharunMadisheti' target='_blank.' className='underline decoration-green-500 decoration-2 hover:decoration-purple-600'>Twitter</a> or <a href='https://linkedin.com/in/tharunmadishetti1/' target='_blank.' className='underline decoration-green-500 decoration-2 hover:decoration-purple-600'>Linkedin</a>.</p>
            <p className='text-sm'>Or send a <a href='mailto: tharunmadishetti1@gmail.com' target='_blank.' className='underline decoration-green-500 decoration-2 hover:decoration-purple-600'>mail</a>.</p>
            <br></br>
            <p className='text-sm'>{"Thanks for reading :)"}</p>
        </article>
    </motion.div>
  )
}

export default About