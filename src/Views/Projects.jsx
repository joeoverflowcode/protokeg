import React from 'react'
import Project from '../Components/Project'
import Mixtape from '../assets/Mixtape.png'
import Watchlist from '../assets/Watchlist.png'
import Portfolio from '../assets/Portfolio.png'
import BaseballCards from '../assets/BaseballCards.png'
import Movies from '../assets/Movies.png'

function Projects() {
  return (
    <div className=' flex flex-col items-center bg-gradient-radial from-slate-100 via-neutral-200 to-gray-500 p-8'>
<div className='w-full flex-1 flex-col'>

{/* <h1 className='text-center m-2 text-4xl sm:text-5xl font-bold underline'>Projects</h1> */}
<h1 className='py-4 text-center text-4xl font-bold m-1 text-[#001b5e] tracking-tighter'><span className='pl-1 pr-1 border-[#001b5e] border '>P</span>rojects</h1>
<p>Id venenatis a condimentum vitae sapien pellentesque habitant morbi tristique. Faucibus vitae aliquet nec ullamcorper sit. Amet est placerat in egestas erat imperdiet sed. Nam libero justo laoreet sit amet cursus sit. Facilisis sed odio morbi quis commodo. Nam aliquam sem et tortor consequat id porta.</p>
<div className='w-full grid grid-cols-1 md:grid-cols-2 p-8 gap-10'>


<Project
href={'https://youtu.be/zZusiRffkuo?si=ZdnPl4NPNNDRT1mj'}
source={BaseballCards}
title={'Baseball Cards App'}
date={'August 2023'}
/>




<Project
href={'#'}
source={Movies}
title={'Movies Rating App'}
date={'September 2023'}
/>

<Project
href="#"
source={Watchlist}
title={'Stock Market App'}
date={'October 2023'}
/>

<Project
href='#'
source={Mixtape}
title={'Music Social Media App'}
date={'November 2023'}
/>


<Project
href='#'
source={Portfolio}
title={'Portfolio App'}
date={'December 2023'}
/>


</div>

</div>
    </div>
  )
}

export default Projects