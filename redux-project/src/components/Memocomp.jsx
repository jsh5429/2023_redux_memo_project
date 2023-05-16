import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addMemoToolkit, deleteMemoSplice, toggleBookmark, filterBookmark } from '../slices/memoSlice'

export default function Memocomp() {
    const memo = useSelector((state)=>(state.memo))
    const [input, setInput] = useState("")

    const dispatch = useDispatch();
  return (
    <div>
        <h2>메모장</h2>
        <input type='text' value={input} onChange={(e)=>{
            setInput(e.target.value);
        }} />
        <button onClick={()=>{dispatch(addMemoToolkit({text : input, date : "2023-05-16"}))}}>
            추가
        </button>
        <br />
        <br />
        <button onClick={()=>{}}>
            즐겨찾기 목록
        </button>
        {
            memo && memo.map((m, index)=>(
                <div key={m.id}>
                    <h3>{m.text}</h3>
                    <span>{m.date} </span>
                    <button onClick={()=>{dispatch(toggleBookmark(m.id))}}>
                        {m.isBookmarked ? '♥' : '♡'} 
                    </button>
                    <button
                        onClick={()=>{dispatch(deleteMemoSplice(index))}}
                        >
                        X
                    </button>
                </div>
            ))
        }
    </div>
  )
}
