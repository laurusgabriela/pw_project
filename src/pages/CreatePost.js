import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import {useState} from "react";
import {Navigate} from "react-router-dom";

/*const modules = {
        toolbar : [
            ['bold', 'italic', 'underline', 'strike'],
            ['blockquote', 'code-block'],
            [{ 'header': 1 }, { 'header': 2 }],
            [{ 'list': 'ordered'}, { 'list': 'bullet' }],
            [{ 'script': 'sub'}, { 'script': 'super' }],
            [{ 'indent': '-1'}, { 'indent': '+1' }],
            [{ 'direction': 'rtl' }],
            [{ 'size': ['small', false, 'large', 'huge'] }],
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
            [{ 'color': [] }, { 'background': [] }],
            [{ 'font': [] }],
            [{ 'align': [] }],
            ['clean']
        ]};*/
const formats = [
    'header', 'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent', 'link', 'image'
];

export default function CreatePost(){
    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [content, setContent] = useState('');
    const [files, setFile] = useState('');
    const [redirect, setRedirect] = useState(false);
    async function createNewPost(ev){
        const data = new FormData();
        data.set('title', title);
        data.set('summary', summary);
        data.set('content', content);
        data.set('file', files[0] );
        ev.preventDefault();
        console.log(files);
        const response = await fetch('http://localhost:4000/post', {
            method:'POST',
            body: data,
            credentials: 'include',
        });
        if(response.ok){
            setRedirect(true);
        }
    }


    if(redirect){
       return(
        <Navigate to={'/'}/>);
    }
    return(
        <form onSubmit={createNewPost}>
            <input type="title" placeholder={'Title'} value={title} onChange={ev=>setTitle(ev.target.value)}/>
            <input type="summary" placeholder={'Summary'} value={summary} onChange={ev=>setSummary(ev.target.value)}/>
            <input type="file" onChange={
                ev=>setFile(ev.target.files)
            }/>
            <ReactQuill value={content} onChange={newValue=>setContent(newValue)} formats={formats}/>
            <button style={{marginTop:'5px'}}>Create post</button>
        </form>

    )
}