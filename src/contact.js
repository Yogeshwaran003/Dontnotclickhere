import './contact.css'
import wave2 from'./wave2.png'
export default function Contact(){
    return <section className="bgc">
        <img className='wave2' src={wave2}/>
        <div className="container text-center">
            <h1 className="cotext">Contact Me</h1>
            <div className="row">
                <div className="col-sm-6 text-left con1">
                    <div className='incon'>
                        <p><b>Phone: </b> +919345031089</p>
                        <p><b>E-mail </b> Yogiwar33@gmail.com</p>
                    </div>
                </div>
                <div className="col-sm-6 con2">
                    <div className='mai'>
                        <table>
                            <tr>
                                <td><p>Name: </p></td>
                                <td><input placeholder='Name' className='contentind'></input></td>
                            </tr>
                            <tr>
                                <td><p>your Mail: </p></td>
                                <td><input placeholder='Mail' className='contentind'></input></td>
                            </tr>
                            <tr>
                                <td><p>Content: </p></td>
                                <td><input className='contentin' placeholder='Enter the content'></input></td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </section>
}