import ReactQuill from "react-quill";

export default function Editor({value, onChange}){
    const formats = [
        'header', 'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent', 'link', 'image'
    ];
    return(
        <ReactQuill value={value} theme={'snow'} onChange={onChange} formats={formats}/>
    );
}