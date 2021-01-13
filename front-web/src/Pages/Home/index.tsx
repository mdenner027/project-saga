import Footer from "../../Components/Footer/Footer";
import NavHeader from "../../Components/NavHeader/NavHeader";
import MainMenu from "../../Components/SidebarMenu";
import CardAtendidos from "./CardAtendidos";
import CardAtendimentos from "./CardAtendimentos";

export default function Home() {
    return (
        <div className="wrapper">
            <div className="main-panel ps ps--active-y" id="main-panel">
                <MainMenu nameActive="inicio"/>
                <NavHeader title="Início" />
                <div className="content">
                    <CardAtendimentos />
                    <CardAtendidos />
                </div>
                <Footer />
            </div>
        </div>
    );
}