import '../NewsLetter/NewsLetter.scss'
export const NewsLetter = (props) => {



    return (
        <section id="NewsLetterContainer">
            <h4>tilmeld dig vores nyhedsbrev</h4>
            <p>Der er mange tilgængelige udgaver af Lorem ipsum, men de fleste udgaver</p>
            <form action="">
                <input placeholder="     indtast din email..." type="text" />
                <button>TILMELD</button>
            </form>
        </section>
    );
}
