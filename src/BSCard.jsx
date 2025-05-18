
import Card from "react-bootstrap/Card";

export default function BSCard() {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>Apparel</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Pricing</Card.Subtitle>
        <Card.Text>
          Just Throw It In The Bag! See what you like? Then add it to your cart!
        </Card.Text>
        <Card.Link href="#">Shop</Card.Link>
        
      </Card.Body>
    </Card>
  );
}
