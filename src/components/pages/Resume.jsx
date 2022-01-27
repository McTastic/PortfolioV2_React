import ResumePDF from "../../utils/Resume.pdf";
import "../../css/resume.css"

const Resume = () =>{
    return (
        <div className="resume">
        <iframe src={ResumePDF} width="55%" height="950em">
        </iframe>
        </div>
    ) 
}

export default Resume;