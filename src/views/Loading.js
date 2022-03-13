import logo from '../images/vxPress-logo-small.png';

export default function Loading() {
    return (
        <>
            <div classname="spinner"></div>
            <div className="LoadingContentContainer">
                <h1 className="loading">Give us a second</h1>
                <img src={logo} alt="vXpress" />
            </div>

        </>
    )
}