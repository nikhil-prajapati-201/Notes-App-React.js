import React, { useState } from 'react'
import './index.css'
import { SquarePen, Trash2 } from 'lucide-react'


const App = () => {

  const [heading,setHeading] = useState('')
  const [note,setNote] = useState('')

  const [list,setList] = useState([])

  

  // function inputHandler2(e){
         
  // }

  // function inputHandler1(elem){
          
  // }


  function submitHandler(e){
    e.preventDefault()

    const copyList = [...list]

    copyList.push({heading,note})
    setList(copyList)
    console.log(list)
          setHeading('')
          setNote('')
  }

  const obj = {
    hello:'Nikhii',
    age:21
  }


  return (
    <div className="bg-gray-100 m-14 bg-violet-200 flex p-10 items-center justify-between ">

      <form className="p-6 w-[700px] bg-gray-200 shadow-lg rounded-2xl flex flex-col gap-4"
        onSubmit={submitHandler}>
        
        <h2 className="text-xl font-bold text-center text-violet-600">
          Add New Note
        </h2>

        <input
          type="text"
          placeholder="Enter Notes"
          className="p-3 border border-violet-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-400"
          value={heading}
          onChange={(e)=>{
            setHeading(e.target.value)
          }}
        />

        <textarea
          placeholder="Enter Your Task Here"
          rows="4"
          className="p-3 border border-violet-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-400 resize-none"
          value={note}
          onChange={(elem)=>{
               setNote(elem.target.value)
          }}
        ></textarea>

        <button
          type="submit"
          className="bg-violet-500 text-white py-2 rounded-lg hover:bg-violet-600 transition duration-200"
        >
          Add Note
        </button>

      </form>

      
          

      <div className="w-[500px] h-[500px] bg-violet-300 p-4 rounded-2xl shadow scrollbar-hide">

  {/* HEADER (FIXED) */}
  <h2 className="text-2xl font-bold mb-4 text-gray-800">
    Recent Notes
  </h2>

  {/* SCROLLABLE AREA */}
  <div className="h-[420px] overflow-y-auto flex flex-col gap-4 pr-2 scrollbar-hide">

    {list.map((elem, idx) => (
      <div
        key={idx}
        className="bg-gray-100 rounded-2xl p-4 shadow hover:shadow-md transition"
      >
        <h3 className="font-semibold text-lg mb-1 text-gray-800">
          {elem.heading}
        </h3>

        <p className="text-sm text-gray-600 break-words">
          {elem.note}
        </p>

        {/* ACTIONS */}
        <div className="flex justify-end gap-3 mt-3">
          
          <button className="flex items-center gap-1 px-3 py-1 text-sm bg-orange-400 text-white rounded-full hover:bg-orange-500 transition">
            <SquarePen size={14} />
          </button>

          <button className="flex items-center gap-1 px-3 py-1 text-sm bg-red-500 text-white rounded-full hover:bg-red-600 transition">
            <Trash2 size={14} />
          </button>

        </div>
      </div>
    ))}

  </div>

</div>
    </div>
  )
}

export default App