import '../../styles/common.css'
import Header from './header/Header'
import Main from "./main/Main"
import Anchor from '../../Elements/anchor/Anchor'
function Landing() {
  return (
    <div className="wrap">
        <div className='AnchorBlock'>
        <Header />
        <Main />
      </div>
      <Anchor /> 
    </div>

  )
}

export default Landing
