

const InputKeypad = ({ addValueToArray }) => {
    const backspace = <img src="/svg/backspace.svg" alt="backspace" />
    const keypadList = [
        {
            id: 1,
            content: "1"
        },
        {
            id: 2,
            content: "2"
        },
        {
            id: 3,
            content: "3"
        },
        {
            id: 745,
            content: backspace
        },
        {
            id: 4,
            content: "4"
        },
        {
            id: 5,
            content: "5"
        },
        {
            id: 6,
            content: "6"
        },
        {
            id: 100,
            content: "000"
        },
        {
            id: 7,
            content: "7"
        },
        {
            id: 8,
            content: "8"
        },
        {
            id: 9,
            content: "9"
        },
        {
            id: 0,
            content: "0"
        },
    ]
    return (
        <div dir="ltr" className="sc-qRumB dlPItp">
            {
                keypadList.map(n => (
                    <div key={n.id}>
                        <button onClick={() => {addValueToArray(n)}} className="sc-fsQiph hvQCvS H3-Bold" > {n.content} </button>
                    </div>
                ))
            }
        
        </div>
    )
}


export default InputKeypad