import MDEditor from "@uiw/react-md-editor";
import styles from "../../styles/textAreaMarkdown.module.scss";
const TextAreaMarkdown = ({ value, setValue }) => (
  <div className={styles.container}>
    <MDEditor height={500} value={value} onChange={setValue} />
  </div>
);
export default TextAreaMarkdown;
