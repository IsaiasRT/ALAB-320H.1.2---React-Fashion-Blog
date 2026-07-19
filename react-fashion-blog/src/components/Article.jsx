export default function Article({date, title, img, alt, text}) {
    return(
        <article>
    <h2>{date}</h2>
    <h2>{title}</h2>
    <img src={img} alt={alt}/>
    <p>{text}</p>
      <a href="#" class="continues">continues...</a>
  </article>

    )
}