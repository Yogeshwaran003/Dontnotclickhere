import './project.css'
import pro from './pro1.png'
import pro1 from './appimg.png'
import pro2 from './aiimg.png'
import pro3 from './achi.png'
export default function Project(){
    return <section>
        <div className='container txtfontt text-center'>
            <h1 className='title'>Worked Project <i class="fa-duotone fa-thumbs-up"></i></h1>
            <div className='row txtfont'>
                <div className='col-sm-6'>
                    <img className='proimg' src={pro}/>
                    <h1 className='protext'>Website development</h1>
                </div>

                <div className='col-sm-6 prote'>
                    
                </div>
            </div>

            <div className='row txtfont'>
                <div className='col-sm-6'>
                </div>

                <div className='col-sm-6'>
                    <img className='proimg' src={pro1}/>
                    <h1 className='protext'>Application Development</h1>
                </div>
            </div>
            <div className='row txtfont'>
                <div className='col-sm-6'>
                    <img className='proimg' src={pro2}/>
                    <h1 className='protext'>AI,ML,DS Project</h1>
                </div>

                <div className='col-sm-6'>
                </div>
            </div>
            <div className='row txtfont'>
                <div className='col-sm-6'>
                </div>

                <div className='col-sm-6'>
                    <img className='proimg' src={pro3}/>
                    <h1 className='protext'>Achicvement</h1>

                </div>
            </div>
        </div>
    </section>
}