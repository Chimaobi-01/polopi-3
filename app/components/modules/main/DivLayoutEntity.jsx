import OlCoinsListContainer from "./OlCoinsListContainer"


const DivLayoutEntity = ({ updateTotalCoinAmount, isBlur }) => {
    return (
        <div className="tiktok-a0l9sg-DivLayoutEntity e1t7jvfs5 pt-16 px-4 pb-4">

            <div className="tiktok-1dn30l4-DivBannerWrapper e1xyt5ek2">
                <div className="tiktok-mf6dyz-DivProfileInfoBanner e1lnnrsb3">
                    <div className="tiktok-hru8n0-DivProfileNameCoinInfo e1lnnrsb4">
                        <div
                            tabindex="0"
                            role="button"
                            aria-haspopup="true"
                            aria-controls=""
                            className="tiktok-15iwytd-DivProfileContainer efubjyv0 min-w-[40px] h-40px ml-4" ></div>
                        <div className="tiktok-1si61jd-DivNameCoinInfo e1lnnrsb5">
                            <div className="tiktok-1fmthhl-DivNameInfo e1lnnrsb6">hush_khaled</div>
                            <div className="tiktok-1ljhbn4-DivCoinInfo e1lnnrsb7">
                                <img
                                    src="/svg/coin.svg"
                                    alt="tiktok coin"
                                    className="tiktok-z10yas-StyledCoinIcon e1lnnrsb8" />

                                <span className="tiktok-1cedbxm-SpanCoinNum e1lnnrsb9">29</span>
                            </div>
                        </div>
                    </div>
                    <span className="tiktok-1dsge25-SpanLogoutButton e1lnnrsb13">
                        <img src="/svg/logout.svg" alt="logout " />
                        <span className="tiktok-ouyf2l-SpanLogoutText e1lnnrsb14">Log out</span>
                    </span>
                </div>
                <div dir="ltr"></div>
            </div>

            <div className="tiktok-11aw0lw-DivRechargeCoins eyr93xl0">
                Recharge
                <span className="tiktok-z95cm-SpanContentContainer e13as4wb0">
                    <div className="tiktok-xbwdih-DivRechargeAdvantageInfo e13as4wb2">
                        Save around 25% with a lower third-party service fee.
                        <div tabindex="0" aria-describedby="webapp-advantage" aria-labelledby="tux-0" className="tiktok-1lfugd2-DivExplanationContainer e13as4wb4">
                            <img
                                src="/svg/exclamation.svg"
                                alt="exclamation mark in circle icon" />

                        </div>
                    </div>
                </span>
            </div>

            <div className="tiktok-1un7bi9-DivCoinsBkgContainer eyr93xl1">
                <OlCoinsListContainer 
                    isBlur={isBlur}
                    updateTotalCoinAmount={updateTotalCoinAmount} />
            </div>

            <div className="tiktok-4e61hp-DivPaymentIconsRow eue81d40">
                <img src="/visa.png" alt="VISA" className="tiktok-15hrbep-ImgPaymentIcon eue81d41" />
                <img src="/mastercard.png" alt="MASTER" className="tiktok-15hrbep-ImgPaymentIcon eue81d41" />
                <img src="/american_express.png" alt="AMEX" className="tiktok-15hrbep-ImgPaymentIcon eue81d41" />
                <img src="/jcb.png" alt="JCB" className="tiktok-15hrbep-ImgPaymentIcon eue81d41" />
                <img src="/diners.png" alt="DINERS" className="tiktok-15hrbep-ImgPaymentIcon eue81d41" />
                <img src="/maestro.png" alt="MAESTRO" className="tiktok-15hrbep-ImgPaymentIcon eue81d41" />
                <img src="/paypal.png" alt="PAYPAL" className="tiktok-15hrbep-ImgPaymentIcon eue81d41" />
            </div>
            
            <div dir="ltr"></div>

        </div>
    )
}

export default DivLayoutEntity