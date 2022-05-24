/* eslint-disable jsx-a11y/anchor-is-valid */
import trade from '../../static/media/trade.png'
import privacy from '../../static/media/privacy.png'
import copyright from '../../static/media/copyright.png'

function BottomBar() {
    return (
            <div className='row buttom-bar'>
                <div className='col-5 text-center p-3'>
                    <div className='col pt-1'><img src={trade} alt='trade'/></div>
                    <div className='col pt-3'><img src={copyright} alt='copyright'/></div>
                    <div className='col pt-1'><img src={privacy} alt='privacy'/></div>
                </div>
                <div className='col-7 text-center p-3 text-white'>
                    <div className='row font-big'>
                        <div className='col'><a href='#'>Product</a></div>
                        <div className='col'><a href='#'>Features</a></div>
                        <div className='col'><a href='#'>Resources</a></div>
                        <div className='col'><a href='#'>Company</a></div>
                    </div>
                    <div className='row'>
                        <div className='col'><a href='#'>Product</a></div>
                        <div className='col'><a href='#'>Features</a></div>
                        <div className='col'><a href='#'>Resources</a></div>
                        <div className='col'><a href='#'>Company</a></div>
                    </div>
                    <div className='row'>
                        <div className='col'><a href='#'>Product</a></div>
                        <div className='col'><a href='#'>Features</a></div>
                        <div className='col'><a href='#'>Resources</a></div>
                        <div className='col'><a href='#'>Company</a></div>
                    </div>
                    <div className='row'>
                        <div className='col'><a href='#'>Product</a></div>
                        <div className='col'><a href='#'>Features</a></div>
                        <div className='col'><a href='#'>Resources</a></div>
                        <div className='col'><a href='#'>Company</a></div>
                    </div>
                </div>
            </div>
    )
}

export default BottomBar;