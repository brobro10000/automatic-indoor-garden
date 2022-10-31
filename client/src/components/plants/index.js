import { Card } from "semantic-ui-react"
import { useQuery } from "@apollo/client";
import { QUERY_PLANTS } from "../../utils/queries";
import { useLocation } from "react-router-dom";

export default function Plants() {
    const location = useLocation()
    const { loading, data } = useQuery(QUERY_PLANTS, {
        variables: { uuid: new URLSearchParams(location.search).get("uuid") }
    });
    const plants = data?.plantsByUUID.plants || [];
    console.log(plants)
    if (plants.length === 0) {
        return <h3 className='center-text'>No Plants Yet</h3>;
    }
    return (
        <div className="my-2">
            {loading ? (
                <div>Loading...</div>
            ) : (
                <Card.Group itemsPerRow={4}>
                    {plants.map((plant) => (
                        <Card key={plant._id}>
                            <Card.Content>
                                <Card.Header>{plant.name}</Card.Header>
                                <Card.Meta>Plant #{plant.position + 1}</Card.Meta>
                                <hr />
                                <Card.Description>
                                    <p>Temperature: {plant.temperature}</p>
                                    <p>pH: {plant.pH}</p>
                                    <p>Humidity: {plant.humidity}</p>
                                </Card.Description>
                            </Card.Content>
                        </Card>
                    ))}
                </Card.Group>
            )}
        </div>
    );
};