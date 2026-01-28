import "../Styles/TopNavOne.css"

export function TopNavOne (){
    return(
        <div className="TopNavOne">
            <figure>
                <img src="/images/logo.png" alt="logo image" />
            </figure>
            <div className="navMenu">
                <div className="info"><p>info@gmail.com</p></div>
                <div className="contactUsNow"><p>Contact Us Now</p></div>
                <div className="question"><p>Questions</p></div>
            </div>
        </div>
    )
}