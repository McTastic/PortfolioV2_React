import "../../css/projects.css"
import ProjectCard from "../ProjectCard";
import { Grid } from "@mui/material";

const Projects = () =>{
    return (
        <>
        <div class="stars"></div>
        <div class="twinkling"></div>
        <Grid container >
        <ProjectCard/>
        </Grid>
        </>
    ) 
}

export default Projects;