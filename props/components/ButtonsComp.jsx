import React from 'react'

function ButtonsComp({Name}) {
  return (
    <>
       <div className="flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0">
      <button
        type="button"
        className="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      >
       {Name.btn1} 
      </button>
      <button
        type="button"
        className="rounded-md border border-yellow-600 px-3 py-2 text-sm font-semibold text-yellow-600 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"
      >
        {Name.btn2}
      </button>
      <button
        type="button"
        className="rounded-md border border-red-600 px-3 py-2 text-sm font-semibold text-red-600 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
      >
        {Name.btn3}
      </button>
      <button
        type="button"
        className="rounded-md border border-green-600 px-3 py-2 text-sm font-semibold text-green-600 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
      >
        {Name.btn4}
      </button>
    </div>
    </>
  )
}

export default ButtonsComp