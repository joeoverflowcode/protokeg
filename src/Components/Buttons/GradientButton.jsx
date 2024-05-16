import React from 'react'

const GradientButton = () => {
  return (
<button class="m-4 p-1 rounded-full from-blue-700 via-sky-800 to-blue-900 bg-gradient-to-r">
  <span class="block text-black px-4 py-2 font-semibold rounded-full bg-white hover:bg-transparent hover:text-white transition">Follow Me</span>
</button>
  )
}

export default GradientButton