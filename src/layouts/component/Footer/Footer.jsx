import { Link } from 'react-router-dom';
import "./Footer.css"
const Footer = () => {
    return (
        <footer>
            <div className="footer-information">
                <div class="footer-wrapper">
                    <div class="footer-columns">
                        <div class="footer-column">
                            <h3 class="title">Về chúng tôi</h3>
                            <ul>
                                <li className="footer-links">
                                    <Link to="/">Giới thiệu</Link>
                                </li>

                                <li className="footer-links">
                                    <Link to="/">Liên hệ</Link>
                                </li>

                                <li className="footer-links">
                                    <Link to="/">Tuyển dụng</Link>
                                </li>

                                <li className="footer-links">
                                    <Link to="/">Đối tác</Link>
                                </li>
                            </ul>
                        </div>

                        <div class="footer-column">
                            <h3 class="title">Hỗ trợ</h3>
                            <ul>
                                <li className="footer-links">
                                    <Link to="/huong-dan-mua-hang">Hướng dẫn mua hàng</Link>
                                </li>

                                <li className="footer-links">
                                    <Link to="/chinh-sach-bao-mat">Chính sách bảo mật</Link>
                                </li>

                                <li className="footer-links">
                                    <Link to="/chinh-sach-doi-tra">Chính sách đổi trả</Link>
                                </li>

                                <li className="footer-links">
                                    <Link to="/cau-hoi-thuong-gap">Câu hỏi thường gặp</Link>
                                </li>
                            </ul>
                        </div>

                        <div class="footer-column">
                            <h3 class="title">Tài khoản</h3>
                            <ul>
                                <li className="footer-links">
                                    <Link to="/dang-nhap">Đăng nhập</Link>
                                </li>

                                <li className="footer-links">
                                    <Link to="/dang-ky">Đăng ký</Link>
                                </li>

                                <li className="footer-links">
                                    <Link to="/quen-mat-khau">Quên mật khẩu</Link>
                                </li>

                                <li className="footer-links">
                                    <Link to="/thong-tin-tai-khoan">Thông tin tài khoản</Link>
                                </li>
                            </ul>
                        </div>

                        <div class="footer-column">
                            <h3 class="title">Kết nối</h3>
                            <ul>
                                <li className="footer-links">
                                    <Link to="/">Facebook</Link>
                                </li>

                                <li className="footer-links">
                                    <Link to="/">Instagram</Link>
                                </li>

                                <li className="footer-links">
                                    <Link to="/">Twitter</Link>
                                </li>

                                <li className="footer-links">
                                    <Link to="/">Youtube</Link>
                                </li>
                            </ul>
                        </div>

                    </div>

                </div>
            </div>
            <div className="footer-contact">
                <div className="footer-wrapper">
                    <div className="footer-columns">
                        <div className="footer-column">
                            <img
                                className="footer-logo"
                                src="https://www.nicepng.com/png/full/223-2235489_want-logo-hbo-white.png"
                                alt=""
                            />
                        </div>
                        <div className="footer-column">
                            <span>Địa chỉ:Quận 1, TP HCM  </span>
                        </div>
                        <div className="footer-column">
                            <span>Email: info@website.com</span>
                        </div>
                        <div className="footer-column">
                            <span>Điện thoại: 1900 0000</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    );
}

export default Footer;