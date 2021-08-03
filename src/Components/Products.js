import React from 'react';

const Products = () => {
  return <div className='productCard'>
           {products.map((product) => (
             <Row>
             <Col md={4}>
               <Image fluid rounded src={product.image_url} alt={product.name} />
             </Col>
             <Col md={3}>
               <ListGroup varient='flush'>
                 <ListGroup.Item>
                   <h4>{product.name}</h4>
                 </ListGroup.Item>
                 <ListGroup.Item>{product.tagline}</ListGroup.Item>
               </ListGroup>
             </Col>))}
             <Row/>
        </div>;
};

export default Products;
