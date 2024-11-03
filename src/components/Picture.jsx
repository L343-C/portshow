const Picture = ({picture, title}) => {
    if(!picture) {
        return null;
    }
    return (
        <div>
            <div className="w-5/6">
                <img className="rounded-md border-2" src={picture} alt={title} />
            </div>
        </div>
    )
}

export default Picture;