import { wait } from "@/app/lib/functions"
import { useRouter } from "next/navigation"
import { useState } from "react"


const RechargeCoinButton = ({ setIsBlur }) => {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)

    const loadingUI = (
        <div className="loader">
            <div className="w-1 h-full relative top-1 left-1/2 bg-[#fe2c55] z-20"></div>
        </div>
    )
    const TriggerButton = async () => {
        setIsLoading(true)
        setIsBlur('.5')
        await wait(4000)
        setIsLoading(false)
        setIsBlur('1')
        router.push('/cashier_v2')
    }

    return (
        <button onClick={TriggerButton} type="button" className="ebido945 tiktok-lf1nf1-Button-StyledBuyButton e5u1qxo0">
            {isLoading ? loadingUI : "Recharge"}
        </button>
    )
}

export default RechargeCoinButton