

function Features(props) {
    return (
        <div className='feature'>
            <img
                src={props.file}
                alt={props.alt}
                className='logo'/>
            <h1>{props.title}</h1>
            <p>{props.text}</p>
        </div>
    )
}

export default Features;