
import Image from 'next/image'

import ParticlesContainer from '../components/ParticlesContainer';
import ProjectsBtn from '../components/ProjectsBtn'
import Avatar from '../components/Avatar'

import {motion} from 'framer-motion'

import {fadeIn} from '../variants'

const Home = () => {
  return (
  <div className='bg-primary/60 h-full'>
    <div className='w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10'>
      <div className='text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto'>
        <motion.h1 variants={fadeIn('down',0.2)} initial='hidden' animate='show' exit='hidden' className='h1'>Transforming Ideas<br></br>Into <span className='text-accent'>Digital Reality</span></motion.h1>
        <motion.p variants={fadeIn('down',0.3)} initial='hidden' animate='show' exit='hidden' className='max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16'>
          As a software engineer who specializes in data-driven development, I built this site using NextJS, a server-side render framework that excels in data loading to optimize the user experience.</motion.p>

        <div className='flex justify-center xl:hidden relative'>
          <ProjectsBtn></ProjectsBtn>
        </div>
        <motion.div variants={fadeIn('down',0.4)} initial='hidden' animate='show' exit='hidden' className='hidden xl:flex'>
          <ProjectsBtn></ProjectsBtn>
        </motion.div>
      </div>
      <div>
        {/*image*/}

      </div>
      <div className='w-[1200px] h-full absolute right-0 botton-0' >
          {/*bg-image*/}  
          <Image width='1000' height='1000' src={'/astronaut.jpg'} alt='bg-image'></Image>    
          
          <div className = 'bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0'></div>  
          <div className='w-full h-full max-w-[737px] max-h-[678px] absolute -botton-32'>
            Particles
          </div>
          <div>
            <Avatar></Avatar>
          </div>
      </div>
    </div>
  </div>
  )
};

export default Home;
