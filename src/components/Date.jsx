const FormatDate = ({isHighlight ,children}) => {
    return (
        <div>
            <div className={`text-2xl duration-300 ${isHighlight ? "text-white" : ""}`}>
                <span className="text-sm">
                    {children}
                </span>
             </div>
        </div>
    )
}

export default FormatDate;