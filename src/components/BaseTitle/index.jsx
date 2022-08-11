const BaseTitle = ({tag, className, children, color}) => {
    return (
        <>
            {tag === 'h1' && <h1 className={className} color={color}>{children}</h1>}
            {tag === 'h2' && <h2 className={className} color={color}>{children}</h2>}
            {tag === 'h3' && <h3 className={className} color={color}>{children}</h3>}
            {tag === 'h4' && <h4 className={className} color={color}>{children}</h4>}
            {tag === 'h5' && <h5 className={className} color={color}>{children}</h5>}
            {tag === 'h6' && <h6 className={className} color={color}>{children}</h6>}
        </>        
    )
}
export default BaseTitle;