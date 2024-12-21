import './about.css'
import about from'./about.png'
export default function About(){
    return <section className='about'>
        <div className="container">
            <div className="row">
                <div className="col-sm-6 text-center">
                    <h3 className='ab'>About Me...!</h3>
                    <ol>
                        <li className='text-left li linefont'>Hi, I'm Yogeshwaran, a college student with a passion for web and app development. I thrive on creating user-friendly and innovative digital solutions.</li>
                        <li className='text-left li linefont'>I specialize in web and app development, utilizing the latest technologies and frameworks to build responsive and dynamic applications.</li>
                        <li className='text-left li linefont'>Committed to continuous learning, I am always exploring new tools and techniques to enhance my development skills and stay ahead in the tech industry.</li>
                    </ol>
                </div>

                <div className="col-sm-6 abimg">
                    <img className='abimge' src={about}/>
                </div>
            </div>
        </div>
    </section>
}