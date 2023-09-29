import React from 'react'
import { FaGithubSquare as Github, FaTwitterSquare as Twitter, FaLinkedin as Linkedin,} from 'react-icons/fa'
import { MdMail as Mail} from 'react-icons/md'
import {motion} from 'framer-motion'

const Home = () => {
  return (
    <motion.div 
    className="overflow-hidden App flex flex-col justify-center items-start md:items-center mt-24 p-5"
    initial={{ opacity: 0}}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.2 }}>
        <section 
        className='grid grid-cols-1 items-start md:grid-cols-2 md:items-center md:w-[60%]'>
            <picture>
                <img src="https://avatars.githubusercontent.com/u/91481732?v=4" alt='my profile' className='mb-4 w-32 h-32 rounded-full object-cover md:h-48 md:w-48 md:mb-0'></img>
            </picture>

            <article>

                <h1 className='mb-2 text-xl font-bold font-sans md:text-4xl'>Madishetti Tharun</h1>
                <h3 className='font-normal  md:text-xl'>
                  Full Stack Developer
                  <br></br>
                  Currently looking for new roles.
                </h3>
                <br></br>
                <p className='text-sm md:text-base'>
                  Building with ReactJS, ExpressJS, MongoDB, NodeJS and TailwindCSS ⚡️
                </p>
            
            </article>
        </section>
        <section className='w-3/5 md:w-2/5 flex flex-row items-start justify-between md:justify-evenly mt-12 md:mt-24 md:space-x-7'>
            <a href='https://github.com/TharunMadishetti/' target='_blank.' className='text-center text-3xl md:text-4xl transition-colors ease-in hover:bg-purple-600 rounded'>
                <Github/>
            </a>
            <a href='https://twitter.com/TharunMadisheti' target='_blank.' className='text-center text-3xl md:text-4xl transition-colors ease-in hover:bg-purple-600 rounded'>
                <Twitter/>
            </a>
            <a href='https://linkedin.com/in/tharunmadishetti1/' target='_blank.' className='text-center text-3xl md:text-4xl transition-colors ease-in hover:bg-purple-600 rounded'>
                <Linkedin className='object-cover'/>
            </a>
            <a href='mailto:tharunmadishetti1@gmail.com' target='_blank.' className='text-center text-3xl md:text-4xl transition-colors ease-in hover:bg-purple-600 rounded'>
                <Mail className='object-cover'/>
            </a>
        
            </section>
        <section className='w-3/5 md:w-2/5 flex flex-row items-start justify-between md:justify-evenly mt-12  md:space-x-7'>
        
            <a href='https://www.codechef.com/users/iam_tharun' target='_blank.' className='text-center text-3xl md:text-4xl transition-colors ease-in hover:bg-purple-600 rounded'>
                <img src={'../images/codechef.jpg'} className='object-cover w-8' alt="codechef icon"/>
            </a>
            <a href='https://leetcode.com/tharunmadishetti1/' target='_blank.' className='text-center text-3xl md:text-4xl transition-colors ease-in hover:bg-purple-600 rounded'>
                <img src={'../images/leetcode.png'} className='object-cover w-8' alt="codechef icon"/>
            </a>
            <a href='https://codeforces.com/profile/tharunmadishetti1' target='_blank.' className='text-center text-3xl md:text-4xl transition-colors ease-in hover:bg-purple-600 rounded'>
                <img src={'../images/codeforces.png'} className='object-cover w-8' alt="codechef icon"/>
            </a>
            <a href='https://auth.geeksforgeeks.org/user/tharunmadishetti1' target='_blank.' className='text-center text-3xl md:text-4xl transition-colors ease-in hover:bg-purple-600 rounded'>
                <img src={'../images/geeksforgeeks.svg'} className='object-cover w-8' alt="codechef icon"/>
            </a>
        </section>
    </motion.div>
  )
}

export default Home