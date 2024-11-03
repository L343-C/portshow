const Tech = ({isHighlight, data}) => {
    return (
        <div>
            <div className="flex gap-4 text-sm">
                {
                    data.map((e, i) => (
                        <div key={`${e}-${i}`} className={`text-primaryBg font-medium bg-primaryContent px-3 py-1 rounded-md transition-all ${isHighlight ? "text-primaryTitle" : "" }`}>{e}</div>
                    ))
                }        
            </div>
        </div>
    )
}

export default Tech;