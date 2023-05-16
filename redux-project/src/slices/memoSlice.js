import { createSlice } from "@reduxjs/toolkit";

export const memoSlice = createSlice({
    name : "memo",
    initialState : [
        {
            id : 1,
            text : "메모입니다.",
            date : "2023-05-16",
            isBookmarked : false,
        }
    ],
    reducers : {
        addMemoToolkit : (state, action)=>{
            const newMemo = {
                ...action.payload,
                id : id
            }
            id++
            state.push(newMemo)
        },
        deleteMemoSplice : (state,action)=>{
            state.splice(action.payload, 1);
        },
        toggleBookmark : (state, action) => {
            const memoId = action.payload;
            return state.map((memo)=>(memo.id === memoId ? {...memo, isBookmarked : !memo.isBookmarked } : memo ))
        },
        filterBookmark : (state, action)=>{
            const liked = action.payload;
            return state.map((memo)=>(memo.filter(...memo, isBookmarked => isBookmarked === true)))
        }
        
    }
})

let id=2;

export const {addMemoToolkit, deleteMemoSplice, toggleBookmark, filterBookmark} = memoSlice.actions
export default memoSlice.reducer