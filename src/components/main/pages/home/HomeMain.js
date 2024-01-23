import React from 'react'
import "./HomeMain.css"
import cover from "../../../../pictures/dentist cover.jpg"
import surati from "../../../../pictures/tipis surati.png"

export default function HomeMain() {
  return (
    <>
      <section className='uper-section'>
        <picture className='cover-picture'>
          <img src={cover} alt='cover' className='cover-img' />
          <div className='inside-picture-div'>
            <h1> Hey, I am Nini kadskjdak, adsknkads adsknadsk ad, dknasdkk kadsnknads </h1>
          </div>
        </picture>
      </section>
      <section className='down-section'>
        <div className='ninis-picture'>
          <img src={surati} alt="ninis surati" className='nininini' />
        </div>
        <div className='about-div'>
          <div className='inside-about-div'>
            <h2>About Me</h2>
            <span>dbsdfhksdfhkdshkfdshk sdhf khf sdkh fkh kh kh khk dskhfkhg  kshkg hskg hk skgh ksh ksjdg s </span>
          </div>
        </div>
      </section>
      <section className='last-section'></section>
    </>
  )
}
