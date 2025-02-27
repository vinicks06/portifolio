import ParticlesBackground from "./components/ParticlesBackground";
import styles from "./Home.module.css";
import { Autoplay } from "./components/Carrosel"

export default function Home() {
  return (
    <div className={styles.container}>
      <ParticlesBackground />

      {/* Navbar */}
      <nav className={styles.navbar}>
        <div className={styles.logo}>^</div>
        <div className={styles.menuIcon}>☰</div>
      </nav>

      {/* Conteúdo Principal */}
      <main className={styles.content}>
        <h1 className={styles.title}>Olá, Eu sou o Vinícius</h1>
          <div className={styles.flex}>
          <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Aliquam elit diam, pellentesque sed felis at, tincidunt dignissim justo. Fusce nibh ligula, 
          laoreet ut volutpat et.
          </p>
          <p className={styles.imagem}>Imagem</p>
          </div>
          <p className={styles.textBottom}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Praesent sagittis justo sed sapien blandit luctus. 
          Phasellus lacinia tellus eget commodo facilisis. 
          Cras facilisis est finibus justo consequat pellentesque. 
          Integer rhoncus, nibh vel gravida dictum, orci tortor lacinia lacus, 
          vitae scelerisque nisi odio at diam.
          </p>
          <h1 className={styles.fontMarge}>Minhas ferramentas:</h1>
          <br></br>
          <Autoplay></Autoplay>
      </main>
    </div>
  );
}