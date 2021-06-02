const logos = [
  "Nodejs",
  "Golang",
  "Python",
  "Expressjs",
  "React",
  "MongoDB",
  "SocketIO",
  "TypeScript",
  "JavaScript",
  "Redux",
  "Sass",
  "Docker",
  "kubernetes",
  "Bootstrap",
  "MaterialUI",
  "D3js",
  "git",
  "GitHub",
  "PostgreSQL",
  "Bash",
];

function Skills() {
  return (
    <div className="skills split__projects">
      {logos.map((i) => (
        <section key={i}>
          <label>{i}</label>
          <img src={`${process.env.PUBLIC_URL}/icons/${i}.svg`} alt={i.label} />
        </section>
      ))}
    </div>
  );
}

export default Skills;
