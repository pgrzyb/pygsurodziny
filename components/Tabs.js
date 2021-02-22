import React from 'react'

import Countdown from 'react-countdown'
import Header from '@components/Header'
import { useAppContext as state } from 'context/state'

class Tabs extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      days: [
        {
          id: 1,
          date: 'Feb 22, 2021',
          title: 'Poniedziałek',
          heading: 'Na dobry początek...',
          intro: 'Na kolację zaprasza szef kuchni Don Pedro! ',
          svg: `<svg class="w-12 h-12 pb-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" /></svg>`
        },
        {
          id: 2,
          date: 'Feb 23, 2021',
          title: 'Wtorek',
          heading: 'Wracasz do szkoły!',
          intro: 'Około 23 kwietnia weźmiesz udział w pierwszej z wielu lekcji w ramach kursu krawiectwa!',
          svg: `<svg class="w-12 h-12" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path  d="M12 14l9-5-9-5-9 5 9 5z" />
          <path  d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
        </svg>`
        },  
        {
          id: 3,
          date: 'Feb 24, 2021',
          title: 'Środa',
          heading: 'Przerwa od nauki?',
          intro: 'W prawdzie nie będziesz już co chwilę nazywana Królową, ale i bez tego ciąg dalszy kampanii jest ultra zajebiaszczy :D',
          svg: `<svg class="w-12 h-12" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>`
        }, 
        {
          id: 4,
          date: 'Feb 25, 2021',
          title: 'Czwartek',
          heading: 'Relaks',
          intro: 'Giereczki, szczególnie na najbrutalniejszych poziomach trudności, potrafią zmęczyć i pospinać mięśnie... Całe szczęście, czeka na Ciebie relaks w SP!',
          svg: `<svg class="w-12 h-12" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>`
        }, 
        {
          id: 5,
          date: 'Feb 26, 2021',
          title: 'Piątek',
          heading: '(Krótka) Wycieczka!',
          intro: 'Całodniowy wypad do Łańcuta! Jedzenie, spacerowanie, rozmowy o wszystkim i jeszcze więcej jedzenia! <3',
          svg: `<svg class="w-12 h-12" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>`
        },                               
      ],
      activeId: 1
    }
  }

  render() {

    return (
      <section class="text-gray-400 bg-gray-900 body-font">
        <h1 class="font-bold title-font text-white mb-1 text-5xl md:text-6xl text-center pt-20">PYGS<span class="text-green-600">Urodziny</span></h1>
        <div class="px-5 py-24 mx-auto flex-wrap flex-row flex">
          {this.state.days.map(day => {   
            let date = new Date(day.date);
            return (
              <div key="{day.heading}" class="flex relative pt-10 pb-20 w-full sm:items-center md:w-2/3 mx-auto">
                <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
                  <div class="h-full w-1 bg-gray-800 pointer-events-none"></div>
                </div>
                <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-green-600 text-white relative z-10 title-font font-medium text-sm">{day.id}</div>
                <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                  <div class="flex-shrink-0 w-24 h-24 bg-gray-800 text-green-400 rounded-full inline-flex items-center justify-center" dangerouslySetInnerHTML={{__html: day.svg}}>
                  </div>
                  <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                    <h2 class="font-medium title-font text-white mb-1 text-xl">{day.title}</h2>                      
                    <Countdown date={date} className='text-xl font-bold'>
                      <div>                      
                        <h3 class="font-medium title-font text-white mb-1 text-md">{day.heading}</h3>
                        <p class="leading-relaxed">
                          {day.intro}
                        </p>
                      </div>
                    </Countdown>
                  </div>
                </div>
              </div>         
          )
        })} 
        </div>
      </section>    
    )    
  }
}

export default Tabs