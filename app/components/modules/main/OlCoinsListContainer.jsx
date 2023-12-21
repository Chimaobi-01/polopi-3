import { useEffect, useRef } from "react"



const OlCoinsListContainer = ({ updateTotalCoinAmount, isBlur }) => {
    const selected = useRef()
    const coinList = [
        {
            id: 1,
            ariaLabel: "70 Coins",
            coinNum: "70",
            coinInDollar: "$ 0.74"
        },
        {
            id: 2,
            ariaLabel: "350 Coins",
            coinNum: "350",
            coinInDollar: "$ 3.7"
        },
        {
            id: 3,
            ariaLabel: "700 Coins",
            coinNum: "700",
            coinInDollar: "$ 7.4"
        },
        {
            id: 4,
            ariaLabel: "1400 Coins",
            coinNum: "1,400",
            coinInDollar: "$ 14.8"
        },
        {
            id: 5,
            ariaLabel: "3500 Coins",
            coinNum: "3,500",
            coinInDollar: "$ 37"
        },
        {
            id: 6,
            ariaLabel: "7000 Coins",
            coinNum: "7,000",
            coinInDollar: "$ 74"
        },
        {
            id: 7,
            ariaLabel: "17500 Coins",
            coinNum: "17,500",
            coinInDollar: "$ 185"
        },
        {
            id: 8,
            ariaLabel: "Custom",
            coinNum: "Custom",
            coinInDollar: "Large amount supported"
        }
    ]

    
    useEffect(() => {
        selected.current.focus()
    }, [])


    return (
        <ol className="tiktok-whj5i8-OlCoinsListContainer eyr93xl2" style={{opacity: isBlur}}>
            {
                coinList.map(item => (
                    <li key={item.coinNum}>
                        <button onClick={() => updateTotalCoinAmount(item)} ref={item.id === 1 ? selected : undefined} aria-label="70 Coins" aria-selected="true" className="tiktok-p49reg-ButtonSmCoinContainer ">
                            <div className="tiktok-anqhdb-DivSmCoinNumContainer e4yj8b614">
                                <span className="tiktok-yvg2im-SpanSmCoinNumIcon e4yj8b615">
                                    <img
                                        src="/svg/coin.svg"
                                        alt="tiktok coin"
                                        className="tiktok-zgtowa-StyledSmCoinIcon e4yj8b612" />

                                </span>
                                <span className="tiktok-378qhd-SpanSmCoinNumDisplay e4yj8b616"> {item.coinNum} </span>
                            </div>
                            <div className="tiktok-hyowoo-DivSmCoinTextContainer e4yj8b618">
                                <div className="tiktok-1wv0d69-DivSmCoinTextNow e4yj8b619"> {item.coinInDollar} </div>
                            </div>
                        </button>
                    </li>
                ))
            }
        </ol>
    )
}

export default OlCoinsListContainer