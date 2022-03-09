import Navbar from "./Navbar/Navbar"
import Header from './Header'

const Page = ({ children }) => {
    return (
        <div className="font-montserrat">
            <Header />
            <Navbar />
            <div className="flex justify-center">
                <div className="flex justify-center h-screen w-screen">
                    <div className="pt-16 w-[85%] md:w-[70%]">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page