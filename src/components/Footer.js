function Footer() {
    return(
        <footer className="page-footer bg-primary">
            <div className="footer-copyright">
                <div className="container">
                    {new Date().getFullYear(0)} copyright Text
                </div>
            </div>
        </footer>
    )
}

export { Footer }