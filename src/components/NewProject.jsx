// it will be a component
// that should display all the inputs we need

import { func } from "prop-types";
import Input from "./Input";
import { useRef } from "react";

// to gather the data we need for a new project.
export default function NewProject() {
    // We can use refs to connect to HTML elements and we can interact with those elements.
    // Ref 
    const title = useRef();
    const description = useRef();
    const dueDate = useRef();

    // function to save 
    
    function handleSave() {
        

    }


    return (
    <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-6 my-4">
            <li><button className="text-stone-800 hover:text-stone-950">Cancel</button></li>
            <li><button className="px-6 py-2 bg-stone-800 rounded-md text-stone-100 hover:bg-stone-950">Save</button></li>
        </menu>
        <div >
            <Input ref={title} label="Title"/>
            <Input ref={description} label="Description" textarea/>
            <Input ref={dueDate} label="Due Date"/>
        </div>
    </div> )
}