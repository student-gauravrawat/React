function handleFormSubmit(event){
    event.preventDefault();
    console.log('form was submit')
}

export default function Form(){
    return(
        <>
            <form>
                <input type="text" placeholder="write something"/>
                <button onClick={handleFormSubmit}>Submit</button>
            </form>
        </>
    )
}