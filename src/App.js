import "./App.css";
import Skills from "./components/skills";

function App() {
  return (
    <main className="page-split">
      <div className="split">
        <div className="home">
          <img
            className="home__img"
            src={`${process.env.PUBLIC_URL}/smartMonkey.png`}
            alt="Srikanth Thyagarajan"
          />

          <div className="home__container">
            <div className="home__links">
              <a href="https://github.com/highflyer910" aria-label="Github">
                <i className="fab fa-github-square" aria-hidden="true"></i>
              </a>
            </div>
            <div className="home__links">
              <a href="https://twitter.com/highflyer910" aria-label="Twitter">
                <i className="fab fa-twitter-square" aria-hidden="true"></i>
              </a>
            </div>
            <div className="home__links">
              <a href="https://codepen.io/highflyer/" aria-label="Codepen">
                <i className="fab fa-codepen" aria-hidden="true"></i>
              </a>
            </div>
            <div className="home__links">
              <a href="https://dev.to/highflyer910/" aria-label="Dev.to">
                <i className="fab fa-dev" aria-hidden="true"></i>
              </a>
            </div>
            <div className="home__links">
              <a
                href="https://www.behance.net/highflyer910"
                aria-label="Behance"
              >
                <i className="fab fa-behance" aria-hidden="true"></i>
              </a>
            </div>
            <div className="home__text">
              <p id="text">
                FullStack Developer,Pursuing my M.Sc in AI, AI Enthusiast, Tech
                geek, Photographer,
                <br />
                Lifelong Learner, Tea & Coffee Lover
              </p>
            </div>
          </div>
        </div>
        <div className="split__content">
          <div className="split__center">
            <div className="split__intro">
              <h1>Srikanth Thyagarajan</h1>
              <span className="split__intro--title">FullStack Engineer</span>
            </div>

            <div className="split__bio">
              <p>
                I am a self-taught and constantly learning Full stack engineer
                <br />I occasionally{" "}
                <a
                  href="https://srikanth-thyagarajan.medium.com/"
                  title="My Blog"
                  target="_blank"
                  rel="noreferrer"
                >
                  blog{" "}
                </a>
                about things I learn and excited to learn any new tool or
                technology to solve the right problems. Check my{" "}
                <a
                  href="https://github.com/Srikanththyagarajan"
                  title="Github Repo"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github Repo.{" "}
                </a>
                <br />
                I build software with Golang, Python, NodeJS, ExpressJS, HTML,
                CSS, JavaScript, React.js, Bootstrap, Material UI <br />
                working on Python libraries like Numpy, Pandas, Matplotlib,
                Seaborn, Scikit Learn, SciPy, OpenCV
                <br />
                I'd love to work on challenging projects and grow as a Full
                Stack AI engineer <br />
                I've put myself far outside my comfort zone to get into Software
                Development <br />
                I believe the only way to live a happy life is to do what you
                love <br />
                For more information check my{" "}
                <a
                  href="https://www.linkedin.com/in/srikanth-thyagarajan-14358a3b/"
                  target="_blank"
                  rel="noreferrer"
                >
                  linkedIn Profile{" "}
                </a>
              </p>
            </div>
            <h2>Skills</h2>
            <Skills />
            {/* <h2>Projects</h2>

            <div className="grid split__projects">
              <div className="flex__grid flex__grid--item">
                <a href="https://github.com/highflyer910/new-tab-page">
                  <h4>Chrome Extension</h4>
                  (Vue.js)
                </a>
              </div>

              <div className="flex__grid flex__grid--item">
                <a href="https://cryptoid.netlify.com/">
                  <h4>Crypto Tracker</h4>
                  (Nuxt.js,PWA)
                </a>
              </div>

              <div className="flex__grid flex__grid--item">
                <a href="https://techiestuff.netlify.com/">
                  <h4>My Personal Blog</h4>
                  (JAMstack with Gridsome)
                </a>
              </div>

              <div className="flex__grid flex__grid--item">
                <a href="https://github.com/highflyer910/COVID-19-tracker">
                  <h4>COVID19 Tracker</h4>
                  (Python, Tkinter, Covid library)
                </a>
              </div>

              <div className="flex__grid flex__grid--item">
                <a href="https://codepen.io/HighFlyer/full/GRZyONO">
                  <h4>Line Art Animation</h4>
                  (SVG)
                </a>
              </div>

              <div className="flex__grid flex__grid--item">
                <a href="https://puppiesworld.netlify.app/">
                  <h4>
                    Puppies World
                    <br />(<i>in progress</i>)
                  </h4>
                  (Vue.js/Tailwind)
                </a>
              </div>
            </div> */}

            <h2>Contact</h2>

            <ul className="split__info">
              <li>srikanth.thyagarajan@hotmail.com</li>
              <li>
                <div className="split__social">
                  <a href="https://github.com/highflyer910" aria-label="Github">
                    <i className="fab fa-github-square" aria-hidden="true"></i>
                  </a>
                </div>
                <div className="split__social">
                  <a
                    href="https://twitter.com/highflyer910"
                    aria-label="Twitter"
                  >
                    <i className="fab fa-twitter-square" aria-hidden="true"></i>
                  </a>
                </div>
                <div className="split__social">
                  <a href="https://codepen.io/highflyer/" aria-label="Codepen">
                    <i className="fab fa-codepen" aria-hidden="true"></i>
                  </a>
                </div>
                <div className="split__social">
                  <a href="https://dev.to/highflyer910/" aria-label="Dev.to">
                    <i className="fab fa-dev" aria-hidden="true"></i>
                  </a>
                </div>
                <div className="split__social">
                  <a
                    href="https://www.behance.net/highflyer910"
                    aria-label="Behance"
                  >
                    <i className="fab fa-behance" aria-hidden="true"></i>
                  </a>
                </div>
              </li>
            </ul>

            <div className="split__credit">
              <p id="wday"></p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
