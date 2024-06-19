import styles from "../styles/mystyle.module.css";
import AboutSub from "./AboutSub";

const user = {
  name: "Tibor",
  telefon: "+49 1512 8986560",
};

let content = <AboutSub />;

function About() {
  return (
    <>
      <h1 className={styles.avatar}>About Page</h1>
      <br />
      <div>
        <AboutSub />
      </div>
      <div>{content}</div>
      <div>User Name: {user.name}</div>
    </>
  );
}
export default About;
