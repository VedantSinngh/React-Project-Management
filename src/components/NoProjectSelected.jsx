import noProjectImage from "../assets/no-projects.png";
import Button from "./Button";

export default function NoProjectSelected({onStartAddProject}) {
    return (
        <div className="ml-36 w-160 h-16 items-center">
            <img 
            src={noProjectImage} 
            className="w-16 h-16 object-contain items-center mx-auto" 
            alt="An empty task list."
            />
            <h2 className="text-xl font-bold items-center text-stone-500 my-4">
                No project selected
            </h2>
            <p className="text-stone-400 items-center mb-4">Select a project or get started with a new One</p>
            <p className="mt-8">
                <Button onClick={onStartAddProject}>Create new project</Button>
            </p>
        </div>
    )
}