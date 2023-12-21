"use client"

import { Suspense, useEffect, useState } from "react"
import TiktokLoadingUI from "../../loading/TiktokLoadingUI"
import TtSheetBody from "./TtSheetBody"
import Link from "next/link"




const DivOrderSummary = () => {

    const [translateY, setTranslateY] = useState("")
    const [maskHidden, setMaskHidden] = useState("hidden")

    useEffect(() => {
        setTranslateY("translateY(0px)")
        setMaskHidden("")
    }, [])



    return (
        <div class="box-border text-color-TextPrimary">
            <Link href={"/"}>
                <div class={`tt-sheet__mask ${maskHidden} fixed bg-[rgba(0,0,0,0.5)] z-[1000] opacity-100`} role="none">
                </div>
            </Link>

            <div class="tt-sheet__container radius-containerslevel1-large-t pb-safe fixed z-[2000] flex flex-col medium visible" style={{ minHeight: "90%", maxHeight: "73%", backgroundColor: "rgb(255, 255, 255)", transform: translateY }} >
                <div class="tt-sheet__header flex-shrink-0">
                    <div dir="ltr"></div>
                </div>

                <Suspense fallback={<TiktokLoadingUI />}>
                    <TtSheetBody />
                </Suspense>
            </div>
        </div>
    )
}

export default DivOrderSummary





