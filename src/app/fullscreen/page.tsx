"use client"

export default function FullScreen () {

    function divFS() {
        document.getElementsByClassName("fc")[0].requestFullscreen();
    }

    return (
        <>
            <button onClick={divFS}>
                FullScreen
            </button>
            <div className="fc">

            </div>
        </>
    );
}