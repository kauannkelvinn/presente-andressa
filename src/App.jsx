import { useState, useRef } from 'react';

const presentes = [
  'Um buquê do tamanho do espaço',
  'Uma serenata à luz da lua, muito gay',
  'Um jantar à luz de velas com muito vinho',
  'Uma viagem congelando de frio visse',
  'Um xero gostoso',
];

export default function App() {
  const [tela, setTela] = useState(1);
  const [sorteado, setSorteado] = useState(null);

  function sortearPresente() {
    const idx = Math.floor(Math.random() * presentes.length);
    setSorteado(presentes[idx]);
  }

  return (
    <main style={styles.main}>
      {tela === 1 && (
        <section style={styles.tela}>
          <p style={styles.texto}>
            Hoje era pra ser diferente. <br />
            Era pra ter flor, brisa, beijo. <br />
            Mas o que sobrou foi o essencial: você aqui, e eu — completamente seu, mesmo à distância.
          </p>
          <button
            style={styles.btn}
            onClick={() => setTela(2)}
            onMouseEnter={e => (e.target.style.opacity = '0.85')}
            onMouseLeave={e => (e.target.style.opacity = '1')}
          >
            Me deixa te mostrar do que isso ainda é capaz
          </button>
        </section>
      )}

      {tela === 2 && (
        <section style={styles.tela}>
          <button
            style={styles.btn}
            onClick={() => alert('Beijão enviado!')}
            onMouseEnter={e => (e.target.style.backgroundColor = '#f06292')}
            onMouseLeave={e => (e.target.style.backgroundColor = '#e91e63')}
          >
            Clique pra ganhar um beijo virtual 💋
          </button>

          <button
            style={{ ...styles.btn, marginTop: 24 }}
            onClick={() => alert('Te peguei no flagra ein')}
            onMouseEnter={e => (e.target.style.backgroundColor = '#f06292')}
            onMouseLeave={e => (e.target.style.backgroundColor = '#e91e63')}
          >
            Toque aqui pra ouvir o que eu queria te dizer
          </button>


          <button
            style={{ ...styles.btn, marginTop: 24 }}
            onClick={() => {
              sortearPresente();
              alert('Presente sorteado! Confira aqui 👇');
            }}
            onMouseEnter={e => (e.target.style.backgroundColor = '#f06292')}
            onMouseLeave={e => (e.target.style.backgroundColor = '#e91e63')}
          >
            Qual presente eu teria te dado?
          </button>

          {sorteado && (
            <p style={styles.presente}>
              🎁 {sorteado}
            </p>
          )}

          <button
            style={{ ...styles.btn, marginTop: 40, backgroundColor: '#ba68c8' }}
            onClick={() => setTela(3)}
            onMouseEnter={e => (e.target.style.backgroundColor = '#ab47bc')}
            onMouseLeave={e => (e.target.style.backgroundColor = '#ba68c8')}
          >
            Próxima
          </button>
        </section>
      )}

      {tela === 3 && (
        <section style={styles.tela}>
          <p style={styles.texto}>
            Se eu pudesse, te entregava um buquê com: <br />
            🌹 Cada riso teu <br />
            🌹 Cada ideia maluca que me fez te querer mais <br />
            🌹 Cada plano adiado que só deixou mais vontade
          </p>

          <p style={styles.texto}>
            3 coisas que eu faria se estivesse contigo agora... (só baitolage) <br />
            1. Te colocaria no colo e ficava em silêncio só sentindo tua pele <br />
            2. Trocava teu fone por minha voz sussurrando <br />
            3. Te roubava um sorriso com um improviso só nosso 😏<br />
          </p>

          <div style={styles.spotifyWrapper}>
            <iframe
              style={styles.spotify}
              src="https://open.spotify.com/embed/playlist/37i9dQZF1DX0XUsuxWHRQd"
              width="300"
              height="80"
              frameBorder="0"
              allow="encrypted-media"
              title="Playlist Nosso Date"
            />
            <button
              style={{ ...styles.btn, marginTop: 20, backgroundColor: '#d81b60' }}
              onClick={() => alert('Feche os olhos, aperte o play e imagine a gente ali...')}
              onMouseEnter={e => (e.target.style.backgroundColor = '#f06292')}
              onMouseLeave={e => (e.target.style.backgroundColor = '#d81b60')}
            >
              Aperta o play, fecha os olhos, imagina a gente ali
            </button>
          </div>

          <button
            style={{ ...styles.btn, marginTop: 40, backgroundColor: '#d81b60' }}
            onClick={() => setTela(4)}
            onMouseEnter={e => (e.target.style.backgroundColor = '#f06292')}
            onMouseLeave={e => (e.target.style.backgroundColor = '#d81b60')}
          >
            Finalizar
          </button>
        </section>
      )}

      {tela === 4 && (
        <section style={styles.tela}>
          <p style={styles.textoFinal}>
            E mesmo sem restaurante, sem Uber, sem floricultura… <br />
            hoje ainda é sobre você. <br />
            E isso já basta pra mim.
          </p>

          <button
            style={{ ...styles.btn, backgroundColor: '#d81b60' }}
            onClick={() => alert('🎉 Surpresa! Vale um dia viagem de jumentin só nosso, paz e amor. Te amo nega ❤️')}
            onMouseEnter={e => (e.target.style.backgroundColor = '#ad1457')}
            onMouseLeave={e => (e.target.style.backgroundColor = '#d81b60')}
          >
            Toque pra abrir um presente
          </button>
        </section>
      )}
    </main>
  );
}

const styles = {
  main: {
    fontFamily: "'Playfair Display', serif",
    background: 'radial-gradient(circle at center, #f8bbd0, #f06292)',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    color: '#3e0e2f',
    textAlign: 'center',
    userSelect: 'none',
  },
  tela: {
    maxWidth: 420,
    background: 'rgba(255 255 255 / 0.9)',
    padding: '40px 30px',
    borderRadius: 24,
    boxShadow: '0 20px 40px rgb(0 0 0 / 0.2)',
    transition: 'all 0.3s ease',
  },
  texto: {
    fontFamily: "'Playfair Display', serif",
    fontSize: 20,
    lineHeight: 1.6,
    marginBottom: 28,
    fontWeight: 500,
    letterSpacing: '0.03em',
  },
  textoFinal: {
    fontSize: 22,
    fontWeight: '600',
    color: '#880e4f',
    lineHeight: 1.7,
    marginBottom: 38,
  },
  btn: {
    fontFamily: "'Montserrat', sans-serif",
    backgroundColor: '#e91e63',
    border: 'none',
    padding: '14px 28px',
    borderRadius: 28,
    fontSize: 17,
    fontWeight: '600',
    color: 'white',
    cursor: 'pointer',
    transition: 'all 0.25s ease',
    boxShadow:
      '0 6px 10px rgb(233 30 99 / 0.6), 0 0 15px rgb(233 30 99 / 0.4)',
    userSelect: 'none',
  },
  presente: {
    marginTop: 14,
    fontStyle: 'italic',
    color: '#ad1457',
    fontWeight: '600',
  },
  spotifyWrapper: {
    marginTop: 30,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  spotify: {
    borderRadius: 20,
    boxShadow: '0 8px 16px rgb(0 0 0 / 0.15)',
  },
};
