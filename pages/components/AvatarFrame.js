
import avatarFrame from '../images/EOV/ui/ui_frame_wide_gray.png'

export default function AvatarFrame(props){
    return  <div style={{backgroundImage: `url(${avatarFrame})`, backgroundPosition: "center", backgroundSize: "cover"}}>
        <div className="p-4">
          <img src={props.src} width="120" height="120" style={{clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)"}}></img>
        </div>
    </div>
}