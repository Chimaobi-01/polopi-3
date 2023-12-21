"use client"

import { useState } from "react"
import HeaderLayout from "./HeaderLayout"
import DivLayoutEntity from "./DivLayoutEntity"
import DivLayoutFooter from "./DivLayoutFooter"
import DivCoinCustomInput from "../custom/DivCoinCustomInput"

const DivApp = () => {

  const [totalCoinAmount, setTotalCoinAmount] = useState('$ 0.74')
  const [isBlur, setIsBlur] = useState('1')
  const [transformY, setTransformY] = useState("")
  const [maskHidden, setMaskHidden] = useState("hidden")
  const [arrayOfNumbers, setArrayOfNumbers] = useState([]);

  const addValueToArray = (value) => {
    if (value.id === 745) {
      const updatedArray = [...arrayOfNumbers];
      updatedArray.pop();
      setArrayOfNumbers(updatedArray);
      return;
    }

    setArrayOfNumbers([...arrayOfNumbers, value.content]);
  };

  const commaSeperatedArray =
    arrayOfNumbers.length > 3 && arrayOfNumbers.length <= 4
      ? [].concat(arrayOfNumbers[0], ",", arrayOfNumbers.slice(1))
      : arrayOfNumbers.length > 4 && arrayOfNumbers.length <= 5
        ? [].concat(arrayOfNumbers.slice(0, 2), ",", arrayOfNumbers.slice(2))
        : arrayOfNumbers.length > 5 && arrayOfNumbers.length <= 6
          ? [].concat(arrayOfNumbers.slice(0, 3), ",", arrayOfNumbers.slice(3))
          : [...arrayOfNumbers];




  const updateTotalCoinAmount = coin => {
    if (coin.id !== 8) {
      setTotalCoinAmount(coin.coinInDollar)
    }
    if (coin.id === 8) {
      setMaskHidden("")
      setTransformY("translateY(0px)")
    }
  }

  const closeCustomModal = () => {
    setMaskHidden("hidden")
    setTransformY("")
    setArrayOfNumbers([])
  }







  return (
    <div id="app" className="h-full min-h-full overflow-hidden">
      <div dir="ltr" className="h-full">
        <div className="tiktok-1c5r3za-DivLayoutContainer e1t7jvfs0">
          <HeaderLayout />
          <DivLayoutEntity
            updateTotalCoinAmount={updateTotalCoinAmount}
            isBlur={isBlur}
          />
          <DivLayoutFooter
            setIsBlur={setIsBlur}
            totalCoinAmount={totalCoinAmount} />
        </div>
      </div>


      <DivCoinCustomInput
        transformY={transformY}
        maskHidden={maskHidden}
        closeCustomModal={closeCustomModal}
        commaSeperatedArray={commaSeperatedArray}
        addValueToArray={addValueToArray}
      />
    </div>
  )
}

export default DivApp
