"use client"




 const InputContainer = ({ commaSeperatedArray }) => {



    return (
        <>
            <div className="sc-beqWaB gDgwxO">
                <img src="/svg/coin.svg" alt="Tiktok coin" className="w-4 h-4" />
                <div className="sc-hLseeU kurHcH H2-Bold">
                    <div className="sc-dmqHEX ePJla-D">
                        <input placeholder="30 - 2,500,000" readOnly className="sc-eDDNvR eVvRjh" value={commaSeperatedArray.join("")} />
                        <span className="sc-jTrPJq bVKQAh"> {commaSeperatedArray.join("")} </span>
                        <div className="sc-gLDzan cfsGIz" >
                        </div>
                    </div>
                </div>
            </div>

            <div className="sc-iAEyYk fXDZex P2-Regular text-color-TextTertiary invisible">
                <img src="/svg/error.svg" alt="error" />
                <div className="tiktok-fxxih4-DivMobileInputSubtitle e4yj8b621">Minimum: 30</div>
            </div>
        </>
    )
}

export default InputContainer