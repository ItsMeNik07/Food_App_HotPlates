import Footer from "../components/Footer";
function FooterPage({footerRef}){
    return(
        <div className='flex justify-center bg-yellow-600 py-4' ref={footerRef}>
        <Footer />
        </div>
    )
}

export default FooterPage;