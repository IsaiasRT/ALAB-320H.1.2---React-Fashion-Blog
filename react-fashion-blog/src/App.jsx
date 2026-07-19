
import Header from "./components/Header.jsx"
import Article from "./components/Article.jsx"
import Footer from "./components/Footer.jsx"

export default function App() {
  return(
    <>
    <Header />

    <main>

      <section>
        <Article 
        date="11/12/2020"
        title="On the Street in Brooklyn"
        img="./src/assets/blog-image-1.jpg" 
        alt="Street Fashion in Brooklyn"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tempore earum qui, natus adipisci ducimus maiores?"
        />

        <Article 
        date="11/11/2020"
        title="Vintage in Vogue"
        img="./src/assets/blog-image-2.jpg" 
        alt="Vintage fashion"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tempore earum qui, natus adipisci ducimus maiores?"
        />

      </section>

    </main>

    <Footer />
    </>

  )
}