import SectionTitle from "./UI/SectionH2";
import SectionP from "./UI/SectionP";
import SectionWrapper from "./UI/SectionWrapper";

export default function About() {
  return (
    <SectionWrapper color="bg-dark">
      <SectionTitle>About</SectionTitle>
      <SectionP>
        A self-taught developer with solid fundamental skills in JavaScript,
        React.js, Node.js, Next.js, looking for an exciting opportunity to
        explore full stack development.
      </SectionP>
      <br />
      <SectionP>
        I’m a curious and enthusiastic self-learner with a methodical and
        data-driven approach to completing tasks and solving problems. I have a
        passion for improvement and growth, of both myself and projects I own.
      </SectionP>
      <br />
      <SectionP>
        After a career break to thru-hike Te Araroa (New Zealand’s 3,000km
        trail) and explore the rugged outdoors whilst experiencing an
        alternative lifestyle, I’m excited for an opportunity to further develop
        my existing digital and business skills.
      </SectionP>
    </SectionWrapper>
  );
}
