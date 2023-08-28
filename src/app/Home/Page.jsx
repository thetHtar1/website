import FooterCurve from "../../Components/FooterCurve"
import HomeBodyComponent from "../../Components/HomeBody/HomeBody"
import Footer from "../../Components/footer/Footer"
import Menu from "../../Components/menu/Menu"
import Projects from '../../Components/Projects'
import SlidingImages from '../../Components/SlidingImages'

const HomePage=()=>{
    return(
        <div>
            <Menu/>
            <HomeBodyComponent/>
            <Projects/>
<SlidingImages/>
<FooterCurve/>
    <Footer/>
        </div>
    )
}
export default HomePage