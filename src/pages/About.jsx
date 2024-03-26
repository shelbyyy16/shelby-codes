function About() {
    return (
      <>
        <div className="row container" id="about">
        <div id="about-info" className="col s6">
          <h2>A Little About Me</h2>
          <br></br>
          <h5>Nurse To Developer</h5>
          <br></br>
          <h6>
          Before going into Software Engineering I worked as a Registered Nurse for almost 10 years. During my time as a nurse I found myself attracted to fast-paced environments filled with complex cases and high stakes situations. I worked in the Emergency Room, Cancer Research and an Electrophysiology Lab. Along the way I developed a <span id="highlight">curiosity for technology, passion for problem-solving and I itched for a new challenge.</span>
          </h6>
          <h6>
          So, in 2023 I took a leap and went back to school for Software Engineering. I dived head first into an intensive <span id="highlight">Full Stack Software Engineering</span> immersive program: 420 hours of learning product development fundamentals, object-oriented programming, MVC frameworks, data modeling, and team collaboration strategies. 
          </h6>
          <h6>
          By the end of my program I had become proficient in the full life cycle of code, building robust back ends and user-friendly front ends. This combined with my previous experiences has created within me a keen eye for design and a commitment to delivering <span id="highlight">high-quality code.</span>
          </h6>
        </div>
        <div className="col s6">
          <img src="/images/about-image.png" alt="Image" id="about-image"></img>
        </div>
      </div>
      </>
    )
  }
  
  export default About;
  