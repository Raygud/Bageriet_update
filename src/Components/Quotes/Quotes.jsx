import Article from '../../Imgs/article.jpg'
import Article2 from '../../Imgs/article2.jpg'
import Article3 from '../../Imgs/article3.jpg'

import '../Quotes/Quotes.scss'


export const Quotes = (props) => {



    return (
        <section >
            <h2>Vi Skaber lækkert! brød</h2>
            <p>Der er mange tilgængelige udgaver af lorem ipsum, men de fleste udgaver har gennemgået forandring, når nogen har <br /> tilføjet humor eller tilfældige ord, som på ingen måde ser ægte ud</p>
            <div id="CircleGrid">
                <div>
                    <img src={Article} alt="" />
                    <h4>KREATIVITET DYRKES</h4>
                    <p>Der er mange tilgængelige udgaver af lorem ipsum, men de fleste udgaver har gennemgået forandring, når nogen har</p>
                </div>
                <div>
                    <img src={Article2} alt="" />
                    <h4>VI ELSKER BRØD</h4>
                    <p>Der er mange tilgængelige udgaver af lorem ipsum, men de fleste udgaver har gennemgået forandring, når nogen har</p>
                </div>
                <div>
                    <img src={Article3} alt="" />
                    <h4>SANS FOR DETALJER</h4>
                    <p>Der er mange tilgængelige udgaver af lorem ipsum, men de fleste udgaver har gennemgået forandring, når nogen har</p>
                </div>
            </div>
        </section>
    );
}
