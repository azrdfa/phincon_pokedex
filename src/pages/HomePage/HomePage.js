import { Badge, Container } from 'react-bootstrap'
import "./HomePage.css"

const HomePage = () => {
    const techStack = ["React JS", "React Hooks", "React Context", "GraphQL", "Apollo Client"]
    return (
        <div style={{ margin: "1rem" }}>
            <h1>Phincon Pokedex</h1>
            <p>
                This website was created in order to complete the Project Assignment for
                <b>Software Engineer - Mobile or Web Platform</b> role. This website was
                created in 2 days starting from Tuesday, October 26 2021 to Wednesday,
                October 27 2021. The following are the points that I do and do not do
                to help assess the examiner.
                <br /><br />
                <ol class="hp-ol">
                    <li>
                        <b>(Finsihed)</b> Build a Mobile or <b>Web</b> app using Technology Stack (see notes below) you Preferred, where it should have 3 pages,
                        Pokemon List, Pokemon Detail, and My Pokemon List.
                    </li>
                    <li>
                        <b>(Finsihed)</b>You can use this API http://pokeapi.co as your data source.
                    </li>
                    <li>
                        <b>(Finsihed)</b>Pokemon List page; should show a list of Pokemons’ names and picture. When a Pokemon is clicked, it should
                        go to that Pokemon Detailpage.
                    </li>
                    <li>
                        <b>(Finsihed)</b>Pokemon Detail page; should show a picture of the Pokemon with its moves and types (this information is from the API,
                        feel free to add more information of the Pokemon if you want to). The mandatory thing is that there should be a button to
                        catch the Pokemon (success probability is 50%, see poin 6), if success then user can give the Pokemon a nickname
                        and add that Pokemon to ‘My Pokemon List’
                    </li>
                    <li>
                        <b>(Finsihed)</b>My Pokemon List page; should show a list (like Pokemon List page, but with each of their nicknames as well) of all
                        Pokemons you have caught. It should also be possible to release and rename (see poin 6) a Pokemon from the list on
                        this page.
                    </li>
                    <li>
                        <b>(Not Finsihed)</b>There should be 3 REST API delivered as a backend service:
                    </li>
                    <ol class="hp-ol">
                        <li>
                            <b>(Not Finsihed)</b>REST API to return probability is 50 % when catching Pokemon.
                        </li>
                        <li>
                            <b>(Not Finsihed)</b>REST API to release pokemon.This API should return a prime number, if the number returned by the API
                            is not a prime number, then release will fail and vice versa.
                        </li>
                        <li>
                            <b>(Not Finsihed)</b>REST API to rename pokemon.This function should return a combination of first name assigned combined
                            with Fibonacci sequence, e.g.:
                        </li>
                        <ol className="hp-ol">
                            <li><b>(Not Finsihed)</b>First name assigned is “Mighty Pikachu”, first time renamed should be: “Mighty Pikachu-0”</li>
                            <li><b>(Not Finsihed)</b>Second time renamed should be: “Mighty Pikachu-1”</li>
                            <li><b>(Not Finsihed)</b>Third time renamed should be: “Mighty Pikachu-1”</li>
                            <li><b>(Not Finsihed)</b>Fourth time renamed should be: “Mighty Pikachu-2”, and so on.</li>
                        </ol>
                    </ol>
                    <li>
                        <b>(Not Finsihed)</b>Any additional implementation microservice with containerization is an added value
                    </li>
                </ol>
                Regards,<br />
                Azhar Difa Arnanda<br />
            </p>
        </div>
    )
}

export default HomePage