import ParticlesBackground from "./components/ParticlesBackground";
import styles from "./Home.module.css";
import { Autoplay } from "./components/Carrosel";
import Image from 'next/image';
import imgGit from './img/GitHub.png';
import imgLinkedin from './img/Linkedin.png';
import imgLogo from './img/Logo.png';

export default function Home() {
  return (
    <div className={styles.container}>
      <ParticlesBackground />

      {/* Navbar */}
      <nav className={styles.navbar}>
        <Image src={imgLogo}></Image>
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
          <br></br>
          <footer className={styles.rodape}>
            <a href="https://www.linkedin.com/in/vin%C3%ADcius-czechoski-coelho-340614310/" target="_blank" rel="noopener noreferrer" className={styles.link}>
              <div className={styles.divLinkedin}>
              <p>LinkedIn</p>
                <Image src={imgLinkedin} className={styles.imgLinkedin} alt="LinkedIn" />
              </div>
            </a>
            <a href="https://github.com/vinicks06" target="_blank" rel="noopener noreferrer" className={styles.link}>
              <div className={styles.divGitHub}>
              <p>GitHub</p>
                <Image src={imgGit} className={styles.imgGit} alt="GitHub" />
              </div>
            </a>
          </footer>
          <a href="mailto:viniciuscoelho0608@gmail.com">
            <div className={styles.email}>
              <p>Me mande um email</p>
            <svg width="52" height="52" viewBox="0 0 48 48">
                <path d="M24 25.29L4.02 14.5C4.28 11.42 6.86 9 10
                 9h28c3.14 0 5.72 2.42 5.98 5.5L24 25.29zM23.76
                  28.48C22.64 30.4 22 32.62 22 35c0 2.16.53 4.2 1.47 
                  6H10c-3.31 0-6-2.69-6-6V17.89l19.29 10.43C23.44 
                  28.4 23.6 28.46 23.76 28.48zM44 
                  17.89v7.74c-2.04-1.97-4.73-3.28-7.72-3.56L44 17.89zM46 
                  35c0 6.075-4.925 11-11 11s-11-4.925-11-11 4.925-11 
                  11-11S46 28.925 46 35zM34.707 
                  31.293l-2-2c-.391-.391-1.023-.391-1.414 0l-2 2c-.391.391-.391 1.023 
                  0 1.414s1.023.391 1.414 0L31 32.414V40c0 .553.447 1 1 
                  1s1-.447 1-1v-7.586l.293.293C33.488 32.902 33.744 33 34 
                  33s.512-.098.707-.293C35.098 32.316 35.098 31.684 
                  34.707 31.293zM40.707 37.293c-.391-.391-1.023-.391-1.414 
                  0L39 37.586V30c0-.553-.447-1-1-1s-1 
                  .447-1 1v7.586l-.293-.293c-.391-.391-1.023-.391-1.414 
                  0s-.391 1.023 0 1.414l2 2C37.488 40.902 37.744 41 38 
                  41s.512-.098.707-.293l2-2C41.098 38.316 41.098 37.684 
                  40.707 37.293z" style={{ fill: 'white', stroke: '#00ff50', strokeWidth: 3 }}/>
              </svg>
            </div>
          </a>
      </main>
    </div>
  );
}