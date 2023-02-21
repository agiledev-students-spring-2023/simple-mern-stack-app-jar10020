import { Link } from 'react-router-dom'
import './About.css'
import aboutphoto from "./aboutphoto.svg"

/**
 * A React component that represents the Home page of the app.
 * @param {*} param0 an object holding any props passed to this component from its parent component
 * @returns The contents of this component, in JSX form.
 */
const About = props => {
  return (
    <>
      
      <img src={aboutphoto} alt="my incredible photo"/>
      
      <h1>About Us</h1>

      <p>
        My name is Jackson Reinhart, and I am a junior here at New York University studying Computer Science and politics.
        I'm from Connecticut, but my family recently relocated to Kansas City. I have a dog named Winter who is almost 14 now,
        and my brother Owen just started his second semester of his freshman year at Arizona State University. Those are all the details
        I can think of!
      </p>

      <p>
        Click here to <Link to="/">return home</Link>
      </p>
    </>
  )
}

// make this component available to be imported into any other file
export default About
