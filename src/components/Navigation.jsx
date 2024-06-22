import './Navigation.css';

export default function Navigation() {
    return (
        <>
            <nav>
                <div>
                    <img src='/images/brand_logo.png' alt="Logo" />
                </div>
                <div>
                    <ul>
                        <li>MENU</li>
                        <li>LOCATION</li>
                        <li>ABOUT</li>
                        <li>CONTACT</li>
                    </ul>
                </div>
                <div>
                    <button>Login</button>
                </div>
            </nav>
        </>
    )
}