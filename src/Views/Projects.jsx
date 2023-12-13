import React from 'react'
import Project from '../Components/Project'
import Mixtape from '../assets/Mixtape.png'
import Watchlist from '../assets/Watchlist.png'
import Portfolio from '../assets/Portfolio.png'

function Projects() {
  return (
    <div className=' flex flex-col items-center bg-gradient-radial from-slate-100 via-neutral-200 to-gray-500'>
<div className='w-full flex-1 flex-col'>

<h1 className='text-center m-2 text-4xl sm:text-5xl font-bold underline'>Projects</h1>
<p>Id venenatis a condimentum vitae sapien pellentesque habitant morbi tristique. Faucibus vitae aliquet nec ullamcorper sit. Amet est placerat in egestas erat imperdiet sed. Nam libero justo laoreet sit amet cursus sit. Facilisis sed odio morbi quis commodo. Nam aliquam sem et tortor consequat id porta.</p>
<div className='w-full grid grid-cols-1 md:grid-cols-2 p-4 gap-10'>
<Project
href="#"
source={Watchlist}
title={'Watchlist'}
date={'October 2023'}
/>
<Project
href='#'
source={Mixtape}
title={'Mixtape'}
date={'November 2023'}
/>
<Project
href='#'
source={Portfolio}
title={'Portfolio'}
date={'December2023'}

/>

</div>

</div>
    </div>
  )
}

export default Projects