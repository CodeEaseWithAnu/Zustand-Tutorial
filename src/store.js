import { create } from "zustand";

export const userStore = create((set)=>({
    count:0,
    incrementFtn:()=>set((state)=>({count:state.count+1})),
    decrementFtn:()=>set((state)=>({count:state.count-1}))
}))

