import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const PetGroupCard = () => {
    const [pets, setPets] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch pet data from the API
        axios.get('http://localhost:5000/pets')
            .then((response) => {
                setPets(response.data); // Assuming the response contains an array of pet objects
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching pet data:', error);
                setError(error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error || !Array.isArray(pets)) {
        return <p>Error: Unable to fetch pet data.</p>;
    }

    return (
        <div>
            <h2>All Pets</h2>
            <div className="row">
                {pets.map((pet) => (
                    <div key={pet.id} className="col-sm-6 col-md-4 col-lg-3 mb-3">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img src={`data:image/jpeg;base64,${pet.photo}`} alt={pet.name} />
                            <Card.Body>
                                <Card.Title>{pet.name}</Card.Title>
                                <Card.Text>
                                    Breed: {pet.breed}
                                </Card.Text>
                                <Card.Text>
                                    Age: {pet.age}
                                </Card.Text>
                                <Card.Text>
                                    Gender: {pet.gender}
                                </Card.Text>
                                <Button variant="primary">Donate your soul to {pet.name}</Button>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PetGroupCard;
