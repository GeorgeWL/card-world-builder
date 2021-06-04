import MDEditor from "@uiw/react-md-editor";
const TextAreaMarkdown = ({ value, setValue }) => (
  <div className="container">
    <MDEditor height={500} value={value} onChange={setValue} />
  </div>
);
export default TextAreaMarkdown;
