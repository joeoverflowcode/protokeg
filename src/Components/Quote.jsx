import React from 'react'
import { useState,useEffect } from 'react'


function Quote({className}) {

    const defaultQuoteStyle = `${className}`

    const quotes = [
        "The only way to do great work is to love what you do. - Steve Jobs",
        "In the middle of every difficulty, lies opportunity. - Albert Einstein",
        "Believe you can and you're halfway there. - Theodore Roosevelt",
        "If I have seen further, it is by standing on the shoulders of Giants. - Isaac Newton",
        "Engineering is the closest thing to magic that exists in the world. - Elon Musk",
        "The biggest risk is not taking any risk. - Mark Zuckerberg"
      ]

      const [randomQuote, setRandomQuote] = useState({
        quote:"",
        author:""
      })

useEffect(() => {
    const randomIndex = Math.floor(Math.random() * quotes.length)
    const [quotePart, authorPart] = quotes[randomIndex].split(' - ')
    setRandomQuote({
      quote: quotePart,
      author: authorPart,
    })
}, [] )


return ( 
<div className="">
        <h2 >{randomQuote.quote && <div 
        className={defaultQuoteStyle}
        style={{ textShadow: '1px 1px 1px rgba(0, 0, 0, 0.5)' }}
        > 
        <p

        >{randomQuote.quote} </p>
          <p className={`${defaultQuoteStyle} pl-8`}>-{randomQuote.author}</p>
        </div>
  }
  
        </h2>
</div>
  )
  }

export default Quote