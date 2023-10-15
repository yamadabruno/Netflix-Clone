import { Link} from "react-router-dom"



export const Footer = ()=>{
    return(
        <>
            <section className="footerContainer flex-center ">
            <div className="flex-center flex-space-around py-2 px-2 w-100">
                <div className="logo mr-1"></div>
                <p className="p1 mx-2">Bruno Yamada © 2023</p>
                <div className="flex-center">
                    <Link to = {`https://www.linkedin.com/in/yamadabruno`}  target="_blank"><div className="iconLinkedIn mr-2" ></div></Link>
                    <Link to = {`https://github.com/yamadabruno`}  target="_blank"><div className="iconGitHub"></div></Link>
                </div>
            </div>
            
    
            </section>
        </>
    )
}