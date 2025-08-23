
import "/src/Styles/SocialItem.css"

function SocialItem({href,src,alt,tieneimagen,children,onClick}) {
  return (
   <li className= {`${tieneimagen ? "SocialItem" : "" }`}>
    <a href={href} {...(onClick? {onClick} : {})}>
        { tieneimagen && <img src={src} alt={alt} />}
        {children}
    </a>
   </li>
  )
}

export default SocialItem