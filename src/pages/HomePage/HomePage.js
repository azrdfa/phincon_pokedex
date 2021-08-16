import { Badge, Container } from 'react-bootstrap'

const HomePage = () => {
    const techStack = ["React JS", "React Hooks", "React Context", "GraphQL", "Apollo Client"]
    return (
        <div style={{ margin: "1rem" }}>
            <h1>Tokopedia Pokedex</h1>
            <p>
                This website was created in order to complete the online test for <b>Software Engineer - Web Platform</b> role. This website was created for 1 week starting from Monday, August 9 2021 to Monday, August 16 2021. 
                I'm using <b>React JS</b> and implementing <b>React Hooks</b> and <b>React Context</b>. Apart from that, I also use <b>GraphQL</b> and <b>Apollo Client</b> to fetch the data.<br/>
                <br />
                Regards,<br/>
                Azhar Difa Arnanda<br/>
            </p>
        </div>
    )
}

export default HomePage
