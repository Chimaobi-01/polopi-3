import SecureLogo from "./SecureLogo"



const OrderSummarySection = () => {
    return (
        <section className="tiktok-zmqnyo">
            <div >
                <div className="text-color-TextPrimary P1-Semibold my-2" >
                    <div className="flex content-around mb-3">
                        <div className="flex-1">Account</div>
                        <div className="flex items-center">
                            <div className="rounded-full" style={{ backgroundImage: "url(https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/08aff28306e88273c9d6d67c34911c1b~c5_720x720.jpeg?x-expires=1702911600&amp;x-signature=EK%2FNwDWmWHtJug87rBHZ3eUNhC0%3D)", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "50% 50%", width: "24px", height: "24px" }}>
                                <div className="rounded-full border border-solid border-color-LineSecondary box-border" style={{ width: "24px", height: "24px" }}>

                                </div>
                            </div>
                            <span className="ms-1">hush_khaled</span>
                        </div>
                    </div>
                    <div className="flex content-around mb-3" >
                        <div className="flex-1">3000 Coins</div>
                        <div className="flex items-center">$ 31.8</div>
                    </div>
                    <div className="flex flex-col content-around mb-3"></div>
                    <div role="separator" className="flex flex-shrink-0 box-border tux-separator--horizontal tux-separator--medium" style={{ backgroundColor: "rgba(22, 24, 35, 0.2)", transformOrigin: "center center" }}></div>
                </div>
                <div className="flex w-full items-center content-around my-4">
                    <div className="font-normal P1-Regular text-color-TextTertiaryAlt flex-1">Payment method</div>
                    <div className="flex items-center text-color-TextTertiary">
                        <div className="P2-Semibold" >View more methods</div>
                        <div className="w-2.5 h-2.5 flex items-center">
                            <img src="/svg/right-arrow.svg" alt="right arrow" />
                        </div>
                    </div>
                </div>
                <div className="mb-6">
                    <div className="w-full pt-6 ">
                        <div className="flex content-around items-center">
                            <div className="w-full truncate">
                                <div className="font-normal H4-Regular items-center tiktok-tneykt">
                                    <img className="w-6 h-4 me-2" src="/visa.png" style={{ opacity: 1, minWidth: "26px" }} alt="VISA" />
                                    <span className="flex flex-wrap items-center">
                                        <span className="text-color-TextPrimary me-3 tiktok-6z7b6u" >**** **** **** 7045</span>
                                    </span>
                                </div>
                            </div>
                            <div className="flex items-center tiktok-zylfkk">
                                <button className="tux-button box-border flex select-none appearance-none outline-none cursor-pointer border-solid items-center justify-center px-0 relative w-full radius-control-tiny action-controller-button border-color-Transparent text-color-ConstTextInverse background-color-ConstBGMat2 border-0 tux-button--const-secondary P3-Semibold" type="button" style={{ height: "24px" }}>
                                    <div className="flex items-center justify-center w-full px-1.5">
                                        <span className="truncate" style={{ lineHeight: "24px" }}>
                                        </span>
                                    </div>
                                </button>
                            </div>
                            <div className="text-color-TextQuaternary flex items-center" >
                                <label className="inline-block box-border w-4 h-4">
                                    <input className="hidden" type="radio" checked />
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-full h-full TUXRadio__icon"><path d="M23 12a11 11 0 11-22 0 11 11 0 0122 0z" stroke="currentColor" stroke-width="1.5" stroke-linecap="square" stroke-opacity="1" fill="none" className="text-color-LineSecondary3" opacity="0"></path><path d="M23 12a11 11 0 11-22 0 11 11 0 0122 0z" className="text-color-Primary" stroke="currentColor" stroke-width="1.33" stroke-linecap="square" stroke-opacity="1" fill="none" opacity="1"></path><path fillRule="evenodd" clipRule="evenodd" d="M12 20a8 8 0 100-16 8 8 0 000 16z" className="text-color-Primary" fill="currentColor" fillOpacity="1" opacity="1"></path>
                                    </svg>
                                </label>
                            </div>
                        </div>
                        <div className="ms-6 pb-6"><div>
                            <header className="flex flex-col pt-4 pb-2">
                                <div className="flex justify-between">
                                    <div className="H4-Semibold text-color-TextPrimary">Security code</div>
                                </div>
                            </header>
                            <div className="flex flex-col box-border">
                                <div className="flex items-center">
                                    <div className="flex-1" style={{ padding: "15px 0px" }}>
                                        <input className="tt-text-field--input H4-Regular text-color-TextPrimary w-full appearance-none background-color-transparent p-0 m-0" name="cvv" type="text" placeholder="CVV/CVC" inputMode="numeric" autoComplete="cc-csc" aria-label="Security code" style={{ lineHeight: "20px" }} />
                                    </div>
                                    <svg fill="currentColor" className="text-color-TextQuaternary mx-2 hidden" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" style={{ fontSize: "16px" }}><path d="M24 46a22 22 0 1 0 0-44 22 22 0 0 0 0 44Zm-8.85-15.27L21.88 24l-6.73-6.73a1 1 0 0 1 0-1.42l.7-.7a1 1 0 0 1 1.42 0L24 21.88l6.73-6.73a1 1 0 0 1 1.42 0l.7.7a1 1 0 0 1 0 1.42L26.12 24l6.73 6.73a1 1 0 0 1 0 1.42l-.7.7a1 1 0 0 1-1.42 0L24 26.12l-6.73 6.73a1 1 0 0 1-1.42 0l-.7-.7a1 1 0 0 1 0-1.42Z"></path>
                                    </svg>
                                </div>
                                <div className="tt-text-field--divider background-color-LineInput"></div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div role="separator" className="flex flex-shrink-0 box-border tux-separator--horizontal tux-separator--medium" style={{ backgroundColor: "rgba(22, 24, 35, 0.2)", transformOrigin: "center center" }}></div>
                    <div className="w-full py-6 " >
                        <div className="flex content-around items-center">
                            <div className="w-full truncate">
                                <div className="font-normal H4-Regular items-center tiktok-tneykt">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 18" width="1em" height="1em" className="w-6 h-4 me-2" data-e2e="payment-method-icon-image" style={{ opacity: 1, minWidth: "26px" }}><path fill="black" d="M14.625 11.25a.375.375 0 00-.375.375v.75c0 .207.168.375.375.375h3a.375.375 0 00.375-.375v-.75a.375.375 0 00-.375-.375h-3z"></path><path fill="black" fillRule="evenodd" d="M4.5 2.625a1.5 1.5 0 00-1.5 1.5v9.75a1.5 1.5 0 001.5 1.5h15a1.5 1.5 0 001.5-1.5v-9.75a1.5 1.5 0 00-1.5-1.5h-15zm0 1.5h15v1.688h-15V4.125zm0 3.188h15v6.562h-15V7.312z" clipRule="evenodd"></path>
                                    </svg>
                                    <span className="flex flex-wrap items-center">
                                        <span className="text-color-TextPrimary me-3 tiktok-6z7b6u" >Add credit or debit card</span>
                                    </span>
                                </div>
                            </div>
                            <div className="flex items-center tiktok-zylfkk">
                                <button className="tux-button box-border flex select-none appearance-none outline-none cursor-pointer border-solid items-center justify-center px-0 relative w-full radius-control-tiny action-controller-button border-color-Transparent text-color-ConstTextInverse background-color-ConstBGMat2 border-0 tux-button--const-secondary P3-Semibold" type="button" style={{ height: "24px" }}>
                                    <div className="flex items-center justify-center w-full px-1.5">
                                        <span className="truncate" style={{ lineHeight: "24px" }}>
                                        </span>
                                    </div>
                                </button>
                            </div>
                            <div className="text-color-TextQuaternary flex items-center" >
                                <img src="/svg/arrow-right.svg" alt="arrow right" />
                            </div>
                        </div>
                    </div>
                    <div role="separator" className="flex flex-shrink-0 box-border tux-separator--horizontal tux-separator--medium" style={{ backgroundColor: "rgba(22, 24, 35, 0.2)", transformOrigin: "center center" }}></div>
                </div>
                <div style={{ display: "flex", columnGap: "8px" }}>
                    <div style={{ display: "flex", flexDirection: "column", rowGap: "8px" }}>
                        <div>
                            <span className="P2-Regular text-color-TextTertiary">
                                By tapping
                                <span className="P2-Semibold text-color-TextPrimary">Pay now</span>, you agree to our <a className="P2-Semibold text-color-TextPrimary tiktok-4g6ai3" href="https://www.tiktok.com/coin/legal/terms-of-purchase-for-coins?lang=en" target="_blank">
                                    Terms of Purchase for Coins</a>. By using any amount of Coins within 14 days after tapping <span className="P2-Semibold text-color-TextPrimary">Pay now</span>, you acknowledge and confirm that you will no longer be eligible for a refund of this order.
                            </span>
                        </div>
                        <div className="terms-and-conditions" ><div>
                            <div className="mt-2">
                                <span className="P2-Regular text-color-TextTertiary">
                                    To assess your tax rate in accordance with our <span className="P2-Semibold text-color-TextPrimary">
                                        Privacy Policy
                                    </span>, TikTok detected that your location is <span className="P2-Semibold text-color-TextPrimary">
                                        United States, Los Angeles, Los Angeles, California
                                    </span>.
                                </span>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                    <button type="button" className="mt-4 p-0" >
                        <SecureLogo />
                    </button>
                </div>
            </div>
        </section>
    )
}

export default OrderSummarySection