import { wait } from "@/app/lib/functions"
import OrderSummaryHeader from "./OrderSummaryHeader"
import OrderSummarySection from "./OrderSummarySection"
import OrderSummaryFooter from "./OrderSummaryFooter"




const TtSheetBody = async () => {

    await wait(3000)

    return (
        <div class="tt-sheet__body flex-1">
            <div id="cashier-page" class="cashier-phase2">
                <div dir="ltr">
                    <div class="tiktok-hzmqtq">
                        <OrderSummaryHeader />
                        <OrderSummarySection />
                        <OrderSummaryFooter />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TtSheetBody