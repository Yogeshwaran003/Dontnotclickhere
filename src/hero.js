import'./hero.css'
import hero from './hero1.png'
import wave from'./wave1.png'
export default function Hero(){
    return <div className='bg'>
            <div className='container'>
                <div className="row ">
                    <div className="col-sm-6 text-left aline tc" >
                        <div className='marg'>
                            <h3>HELLO!</h3>
                            <p>I am Yogeshwaran B</p>
                            <p>A Full Stack Developer</p>
                        </div>
                    </div>

                    <div className="col-sm-6">
                        <img src={hero}/>
                    </div>
                </div>
            </div>
            <img className='wavewi' src={wave}/>
    </div>
}