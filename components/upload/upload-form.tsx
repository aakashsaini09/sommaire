'use client'
import UploadFromInput from "./upload-form-input";

export default function UploadForm() {
    const handleSubmit = () => {
        alert('form submitted')
    }
    return <div>
        <UploadFromInput onSubmit={handleSubmit}/>
    </div>
    
}