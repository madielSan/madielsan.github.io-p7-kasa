import footerLogo from "../../assets/footer-logo.png"
import "../../_scss/layouts/footer.scss"
function Footer() {
    const thisYear = new Date().getFullYear()
    return (
        <footer className="footer">
            <img className="footer__logo" src={footerLogo} alt="footer logo kasa" />
            <p className="footer__copyright"> &copy; {thisYear} Kasa. All rights reserved</p>
        </footer>
    )
}
export default Footer 