

const OrderSummaryFooter = () => {
    return (
        <footer class="tiktok-1e0qvkm">
            <div class="pt-3 pb-4 css-6fs61b background-color-BGSecondary" data-e2e="pay-now-footer">
                <div class="flex content-around py-3 text-color-TextPrimary H3-Bold mx-4">
                    <div class="flex-1">Total</div>
                    <div style={{ direction: "ltr" }}>$ 31.8</div>
                </div>
                <div class="mx-4">
                    <button class="tux-button box-border flex select-none appearance-none outline-none cursor-pointer border-solid items-center justify-center px-0 relative w-full radius-control-large text-color-ConstTextInverse background-color-Primary border-0 H4-Semibold" type="button" style={{ height: "44px" }}>
                        <div class="flex items-center justify-center w-full px-6">
                            <span class="truncate" style={{ lineHeight: "44px" }}>
                                Pay now
                            </span>
                        </div>
                    </button>
                </div>
            </div>
        </footer>
    )
}

export default OrderSummaryFooter