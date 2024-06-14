"use client"
import { uptade, uptadeUser } from "@/api/UpdateData"
import { useMutation } from "@tanstack/react-query"
import {toast} from "sonner"
import {useRouter} from "next/navigation"

export const putUpdate = ()=>{
    const route = useRouter();
    return useMutation({
        mutationFn:(data)=> uptade(data),
        mutationKey: ["uptade"],
        onSuccess: (response)=>{
            toast.success("Has been updated correctly", { position: "top-center" });
            console.log(response)
        }
    })
}

export const putUpdateUser = ()=>{
    const route = useRouter();
    return useMutation({
        mutationFn:(data)=> uptadeUser(data),
        mutationKey: ["uptade"],
        onSuccess: (response)=>{
            toast.success("Has been updated correctly", { position: "top-center" });
            console.log(response)
        }
    })
}