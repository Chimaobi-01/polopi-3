import CustomFooter from "./CustomFooter"
import CustomHeader from "./CustomHeader"
import InputContainer from "./InputContainer"
import InputKeypad from "./InputKeypad"




export const DivCoinCustomInput = ({ transformY, maskHidden, closeCustomModal, commaSeperatedArray, addValueToArray }) => {
    return (
        <div dir="ltr">
            <div className="box-border text-color-TextPrimary">

                <div onClick={closeCustomModal} className={`tt-sheet__mask fixed background-color-SDSecondary z-[1000] opacity-100 ${maskHidden}`} role="none"></div>

                <div className="tt-sheet__container radius-containerslevel1-large-t pb-safe fixed z-[2000] flex flex-col high visible min-h-[240px] max-h-full bg-white " style={{ transform: transformY }} >

                    <CustomHeader
                        closeCustomModal={closeCustomModal}
                     />
                    
                    <div className="tt-sheet__body flex-1">
                        <section className="tiktok-d73sg9-SectionContentContainer enumr4n0">
                            <div className="mb-2 inline-flex items-center gap-1" aria-labelledby="tux-1" ><span className="P1-Semibold">Number of Coins</span>
                                <img src="/svg/arrow-down.svg" alt="arrow down" />
                            </div>
                            <InputContainer 
                                commaSeperatedArray={commaSeperatedArray}  />
                            <InputKeypad addValueToArray={addValueToArray} />
                            <CustomFooter />
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DivCoinCustomInput

