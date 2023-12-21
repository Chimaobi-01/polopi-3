
const CustomHeader = ({ closeCustomModal }) => {
    return (
        <div className="tt-sheet__header flex-shrink-0">
            <div dir="ltr">
                <div dir="ltr">
                    <div className="TUXNavBar">
                        <div className="box-border top-0 left-0 right-0">
                            <header className="flex items-center px-2 overflow-hidden relative h-[52px]" role="navigation" >
                                <div role="none" className="absolute w-full h-full top-0 left-0 -z-[1] bg-white" >
                                </div>
                                <div className="inline-flex items-center justify-start flex-1 h-full">
                                    <button className="tux-nav-bar-icon-action h-10 w-10 p-0 text-color-TextPrimary flex items-center justify-center">
                                        <img className="h-[22px] w-[22px]" src="/svg/question.svg" alt="question mark" />
                                    </button>
                                </div>
                                <div className="truncate flex-3 px-1 text-center H3-Bold text-[rgb(0, 0, 0)] leading-[52px]" >
                                    Custom
                                </div>
                                <div className="flex-1 inline-flex items-center justify-end h-full">
                                    <button onClick={closeCustomModal} className="tux-nav-bar-icon-action h-10 w-10 p-0 text-color-TextPrimary flex items-center justify-center">
                                        <img src="/svg/cancel.svg" alt="exit" />
                                    </button>
                                </div>
                                <div className="absolute bottom-0 left-0 right-0">
                                    <div role="separator" className="flex flex-shrink-0 box-border tux-separator--horizontal tux-separator--medium" style={{ backgroundColor: "rgba(22, 24, 35, 0.2)", transformOrigin: "center bottom" }}></div>
                                </div>
                            </header>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CustomHeader