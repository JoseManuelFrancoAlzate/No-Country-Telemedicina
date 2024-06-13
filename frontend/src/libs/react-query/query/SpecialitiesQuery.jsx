"use client"

import { getSpecialities } from "@/api/Specialities"
import { useQuery } from "@tanstack/react-query"

export const getAllSpecialities = ()=>{
    return useQuery({
        queryKey: ["getSpecialities"],
        queryFn: ()=> getSpecialities(),
    });
};

