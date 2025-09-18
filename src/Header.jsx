function Header(){
    return(
        <>
        <div className="header">
            <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" className="logo" />
            <input type="text" className="header-inp" placeholder="Enter the dish..." />
            <div className="buttons">
                <button className="btn1">Log-in</button>
                <button className="btn2">Sign Up</button>
            </div>
        </div>
        </>
    )
}

export default Header;