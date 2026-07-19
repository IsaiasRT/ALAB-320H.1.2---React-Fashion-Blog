export default function Nav({type}) {
    const links = [
        "Women's",
        "Men's",
        "On the Street",
        "The CatWalk",
        "AdWatch",
        "About"
    ]
    
    return (
        <nav classname={`nav ${type}`} aria-label="Main Navigation" role="navigation"></nav>
    )
}