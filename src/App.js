
import {Header} from "./componants/header/Header"
import {Aboute} from "./componants/about/About";
import { HireMe } from "./componants/hireMe/HireMe";
import { Services } from "./componants/services/Services";
import { Footer } from "./componants/footer/Footer";


export default function App() {
  return (
    <div>
        <Header/>
        <Aboute/>
        <Services/>
        <HireMe/>
        <Footer/>
    </div>
  );
}


