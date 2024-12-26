import React from 'react'
import BackgroundDesign from '../Components/BgDesign/BackgroundDesign'
import SkillBar from '../Components/SkillBar/SkillBar'


const Skills = () => {

  

  return (
    <>
        <BackgroundDesign />
      <main className='-mt-20 max-sm:-mt-56 '>
        <div className='flex justify-center '>
          <div className='container flex justify-around max-sm:flex-col max-md:flex-col px-4  '>
            <div className='w-96 space-y-8 max-sm:w-full '>
              <SkillBar skillName="HTML, CSS" percentage={90} />
              <SkillBar skillName="JavaScript" percentage={80}  />
              <SkillBar skillName="React" percentage={85}  />
            </div>
            <div className='w-96 space-y-8 max-sm:w-full max-sm:mt-6 '>
              <SkillBar skillName="Express" percentage={70} />
              <SkillBar skillName="Socket IO" percentage={50}  />
              <SkillBar skillName="Mongo Db" percentage={70}  />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Skills