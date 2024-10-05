import { useEffect } from "react";

export function Output(props){
   switch (props.input) {
    case "help":
        return(
            <div>
                <br />
                social &emsp; -&emsp; Display Social Links <br />
                about &emsp; -&emsp; Display About me <br />
                clear  &emsp;&nbsp;&nbsp;-&emsp; Clear the Terminal <br />
                help   &emsp;&emsp;-&emsp; Gives command for the terminal <br />
                exit   &emsp;&emsp;-&emsp; Credits <br />
                <br />
            </div>
        )
        break;
    case "social":
        return(
            <div>
                <br />
                Github &nbsp;- <a href={"https://github.com/Sharwesh05/Sharwesh05"} rel="noopener noreferrer" target="_blank">https://github.com/Sharwesh05</a> <br />
                Linkedin - <a href={"https://www.linkedin.com/in/sharan-kumar-muthu-saravanan-b4742a2b3/"} rel="noopener noreferrer" target="_blank">https://www.linkedin.com/in/sharan-kumar-muthu-saravanan-b4742a2b3/</a>
                <br /><br />
            </div>
        )
        break;
    case "about":
        return(
            <div>
                <br />
                Hello! I'm M.Sharan Kumar, <br />
                a passionate Computer Science student currently studying at Shiv Nadar University Chennai. <br />
                I have a strong interest in software development, data science, artificial intelligence,CyberSecurity<br /> 
                and I'm dedicated to expanding my knowledge and skills in this ever-evolving field.
                <br /><br />
            </div>
        )
        break;
    case "":
        return;
        break;
    case "exit":
        setTimeout(() => {window.close()},3000); 
        useEffect(()=>{
            document.title="exiting....";
        },[]);
        return <div><br />thank you for trying out!! <br />Made using React.js <br /><br /></div>;
        break;    
    default:
        return <div>Command not found <br /></div>;
        break;
   }
}
