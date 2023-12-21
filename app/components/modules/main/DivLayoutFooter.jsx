import RechargeCoinButton from "./RechargeCoinButton"


const DivLayoutFooter = ({ totalCoinAmount, setIsBlur }) => {



    return (
        <div className="tiktok-vxr7wh-DivLayoutFooter e1t7jvfs6">
            <div className="notice-shadow">
                <div className="tiktok-18yyph1-DivFooterContainer ebido940 pt-3 px-4 pb-4">
                    <div className="tiktok-16dswth-DivCoinsTotalContainer ebido941">
                        <div className="flex items-center gap-1" >
                            <span className="tiktok-19p50er-SpanCoinsTotalText ebido942">Total</span>
                        </div>
                        <div>
                            <span className="tiktok-lyumwd-SpanCoinsTotalMount ebido943"> {totalCoinAmount} </span>
                        </div>
                    </div>
                    <div className="tiktok-146s4m-DivButtonContainer ebido944">
                        <button type="button" className="ebido946 tiktok-1hw0lra-Button-StyledQuestionButton e5u1qxo0">
                            <div className="tiktok-1yvzd37-DivQuestionWrapper e1xm5yq0">
                                <img
                                    src="/svg/question.svg"
                                    alt="question mark"
                                    className="tiktok-ybgbda-StyledQuestionIconWrapper e1xm5yq1" />
                            </div>
                        </button>
                        <RechargeCoinButton setIsBlur={setIsBlur} />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default DivLayoutFooter