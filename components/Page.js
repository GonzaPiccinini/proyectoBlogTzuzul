import Navbar from "./Navbar/Navbar"
import Header from './Header'
import Footer from "./Footer"

const Page = ({ children }) => {
    return (
        <div className="font-montserrat">
            <Header />
            <Navbar />
            <div className="flex justify-center">
                <div className="flex justify-center h-screen w-screen">
                    <div className="pt-16 w-[85%] md:w-[60%]">
                        {children}
                        <Footer />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page