import Link from "next/link"



const OrderSummaryHeader = () => {

    



    return (
        <header className="tiktok-1xvkyhs">
            <div >
                <div dir="ltr">
                    <div className="TUXNavBar">
                        <div className="box-border top-0 left-0 right-0">
                            <header className="flex items-center px-2 overflow-hidden relative" role="navigation" style={{ height: "52px" }}>
                                <div role="none" className="absolute w-full h-full top-0 left-0 -z-[1]" style={{ backgroundColor: "rgb(255, 255, 255)" }}></div>
                                <div className="inline-flex items-center justify-start flex-1 h-full">
                                    <Link href={"/"}>
                                        <button className="tux-nav-bar-icon-action h-10 w-10 p-0 text-color-TextPrimary flex items-center justify-center">
                                            <img src="/svg/arrow-left.svg" alt="back arrow" />
                                        </button>
                                    </Link>
                                </div>
                                <div className="truncate flex-3 px-1 text-center H3-Bold" style={{ color: "rgb(0, 0, 0)", lineHeight: "52px" }}>
                                    <div style={{ display: "flex", flexDirection: "column" }}>
                                        <span className="H3-Bold">Order summary</span>
                                        <div >
                                            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                <div className="tiktok-18hu44o">
                                                    <img src="/svg/padlock.svg" alt="secure" />
                                                </div>
                                                <span className="P3-Regular mx-1 tiktok-1bz1e8y">Your info is private and secure.</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-1 inline-flex items-center justify-end h-full">
                                    <button className="tux-nav-bar-icon-action h-10 w-10 p-0 text-color-TextPrimary flex items-center justify-center">
                                        <img className="w-6 h-6" src="/svg/question.svg" alt="question mark" />
                                    </button>
                                </div>
                                <div className="absolute bottom-0 left-0 right-0">
                                    <div role="separator" className="flex flex-shrink-0 box-border tux-separator--horizontal tux-separator--medium" style={{ backgroundColor: "rgba(22, 24, 35, 0.2)", transformOrigin: "center bottom" }}>
                                    </div>
                                </div>
                            </header>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default OrderSummaryHeader