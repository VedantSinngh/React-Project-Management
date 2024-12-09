import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectSidebar from "./components/ProjectSidebar";

function App() {
  const [projectState,setProjectState] = useState({
    selectedProjectId: undefined, //Neither adding a new project nor have a project selected.
    projects: [] // create an array of projects 
    });
    
    // Handling (Creating New Project)
    function handleStartAddProject() {
      setProjectState(prevState => {
        return {
          selectedProjectId: null, // we r adding a new project
        };
      });
    }

    let content;
    if (projectState.selectedProjectId === null){
      content = <NewProject />
    } else if (projectState.selectedProjectId === undefined) {
      content = <NoProjectSelected />
    }

  return (
    <main className="h-screen my-8 flex gap-8 ">
    <ProjectSidebar onStartAddProject={handleStartAddProject} />
    {content}
    </main>
  );
}

export default App;
