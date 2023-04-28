import React from 'react'

import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

export default function BoardCard({board}) {
  return (
    <Card style={{ width: '18rem', margin:'auto'}}>
      <Card.Body>
        <Link style={{fontSize:"1.2rem"}} to={`/boardlist/${board.id}`}>{board.title}</Link>
        <Card.Text>{board.date}</Card.Text>
      </Card.Body>
    </Card>
  )
}