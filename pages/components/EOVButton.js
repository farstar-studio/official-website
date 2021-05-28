import buttonImg from '../images/EOV/ui/Button4.png'

export default function EOVButton(props){
    let baseSize = 4; //rem
    let buttonStyle = {
        backgroundImage: `url(${buttonImg})`,
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: `${baseSize}rem`,
        minWidth: `${baseSize * 3.2}rem`,
        textAlign: "center",
        lineHeight: `${baseSize}rem`
    };

    return (
    <a className="btn p-0" href={props.href} target="_blank" style={buttonStyle}>
        <span style={{color: "white", fontSize: `${baseSize * 0.4}rem`, verticalAlign: "middle"}}>下載</span>
    </a>
    )
}