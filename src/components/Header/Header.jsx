import './Header.css'

function Header() {

    return (
        <>
            <div className="container">
                <nav className="nav">
                    <div className="logo">
                        <h1>Logo</h1>
                    </div>
                    <div className="ul">
                        <ul>
                            <li>Home</li>
                            <li>About</li>
                            <li>Contact</li>
                            <li>More</li>
                        </ul>
                    </div>
                    <div className="input">
                        <input type="text" />
                    </div>
                </nav>
            </div>
        </>
    );
}

export default Header;