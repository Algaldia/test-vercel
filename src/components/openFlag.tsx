"use client"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import Image from "next/image";
import { useState, useEffect } from "react";

type countryFlagsType = {
    pt: string;
    en: string;
    es: string;
}

const countryFlags: any = {
    pt: "/images/flags/brazil-flag-32px.png",
    en: "/images/flags/united-states-flag-32px.png",
    es: "/images/flags/mexican-flag-32px.png",
}

export default function OpenFlag() {
    const [main, setMain] = useState<keyof countryFlagsType>("pt");
    const [notMain, setNotMain] = useState([]);

    useEffect(() => {
        const notSelected: any = [];
        for (const item in countryFlags) {
            if (item !== main) {
                notSelected.push(item as keyof countryFlagsType);
            }
        }
        setNotMain(notSelected);
    }, [main]);

    return (
        <div className="flags">
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <Image 
                        src={countryFlags[main]} 
                        alt="flags"
                        width={32}
                        height={32}
                    />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    {notMain.map((value) => (
                        <DropdownMenuItem
                            key={value} 
                            onSelect={() => { 
                                console.log(value);
                                setMain(value);
                            }}
                        >
                            <Image 
                                src={countryFlags[value]} 
                                alt="flags"
                                width={32}
                                height={32}
                            />
                        </DropdownMenuItem>
                    ))}
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
}


/* "use client"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import Image from "next/image";
import { useState } from "react";

type countryFlagsType = {
    pt: string;
    en: string;
    es: string;
}

const countryFlags : any = {
    pt: "/images/flags/brazil-flag-32px.png",
    en: "/images/flags/united-states-flag-32px.png",
    es: "/images/flags/mexican-flag-32px.png",
}

export default function OpenFlag(){
    const [main, setMain] = useState<keyof countryFlagsType>("pt");
    const notSelected : any = [];
    for (const item in countryFlags){
        if (item !== main) {
            notSelected.push(item)
        }
    }
    const [notMain, setNotMain] = useState<any>(notSelected)
    return(
        <div className="flags">
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <Image 
                        src={countryFlags[main]} 
                        alt="flags"
                        width={32}
                        height={32}
                    ></Image>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    {notMain.map((value: any) => (
                        <DropdownMenuItem
                            key={value} 
                            onSelect={() => { 
                                console.log(value)
                                setMain(value);
                                console.log(main);
                                
                                const notSelected2 : any = [];
                                for (const item in countryFlags){
                                    if (item !== main) {
                                        notSelected2.push(item)
                                    }
                                }
                                console.log(main);
                                console.log(notSelected2)
                                setNotMain(notSelected2); 
                            }
                        }>
                            <Image 
                                src={countryFlags[value]} 
                                alt="flags"
                                width={32}
                                height={32}
                            ></Image>
                        </DropdownMenuItem>
                    ))}
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
}*/
/* <DropdownMenuItem onSelect={() => setMain("en")} >
<Image 
    src={countryFlags.en} 
    alt="flags"
    width={32}
    height={32}
></Image>
</DropdownMenuItem>
<DropdownMenuItem>
<Image 
src={countryFlags.es} 
alt="flags"
width={32}
height={32}
></Image>
</DropdownMenuItem> */