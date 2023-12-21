


const TiktokLoadingUI = () => {
    return (
        <div id="loading" className="h-full min-h-full overflow-hidden">
            <span className="min-h-screen flex justify-center items-center">
                <svg preserveAspectRatio="none" viewBox="0 0 200 200" width="48" height="48" className="css-qmnyxf-SvgContainer e1ugmybf1 m-auto">
                    <defs>
                        <mask id="redhole-1698045640999">
                            <rect width="100%" height="100%" fill="white"></rect>

                            <circle r="36" cy="99" cx="128" className="css-dt84ji-Circle e1ugmybf0"></circle>
                        </mask>
                        <mask id="greenhole-1698045640999">
                            <rect width="100%" height="100%" fill="white"></rect>

                            <circle r="36" cy="99" cx="60" className="css-nuz7yg-Circle e1ugmybf0"></circle>
                        </mask>
                    </defs>

                    <circle r="36" cy="99" cx="60" fill="#0f0f0f" stroke-width="2" stroke="#3AF2FF" className="css-1ibclz-Circle e1ugmybf0"></circle>

                    <circle r="36" cy="99" cx="60" mask="url(#redhole-1698045640999)" className="css-1ie96h1-Circle e1ugmybf0"></circle>

                    <circle r="36" cy="99" cx="128" mask="url(#greenhole-1698045640999)" className="css-162i5jd-Circle e1ugmybf0"></circle>
                </svg>
            </span>
        </div>
    )
}

export default TiktokLoadingUI