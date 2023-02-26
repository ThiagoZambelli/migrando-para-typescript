import './Footer.css';

const Footer = () => {
    return(
      <section className='footer'>
        <div>
            <a href="facebook.com">
                <img src='/img/fb.png' alt='Icone facebook'/>
            </a>
            <a href="twitter.com">
                <img src='/img/tw.png' alt='Icone Twiter'/>
            </a>
            <a href="instagram.com">
                <img src='/img/ig.png' alt='Icone Instagram'/>
            </a>
        </div>
        <img src='/img/logo.png' alt='Logo Organo'/>
        <p>Desenvolvido por Alura.</p>
      </section>  
    )
}

export default Footer