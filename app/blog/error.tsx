'use client'

export default function ErrorWrapper({error}: {error: Error}) {
return <>{true?`falala ${error.message}`:<h1>ERROR</h1>}</>
{/* <h1>Oops!!! {error.message}</h1> */}
}