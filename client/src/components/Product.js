import React from 'react';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import RaisedButton from 'material-ui/RaisedButton';
import NavigateNext from 'material-ui/svg-icons/image/navigate-next';
import '../styles/Product.css';

const Product = ({ item }) => (
  <div className="product">
    <div className="content">
      <img src={item.info.photo} />
      <div className="content-left">
        <h3>{item.info.name}</h3>
        <div className="content-info">
          <div><b>Display size: </b><span>{item.info.displaySize}</span></div>
          <div><b>Display resolution: </b><span>{item.info.displayResolution}</span></div>
          <div><b>CPU: </b><span>{item.info.cpu}</span></div>
          <div><b>Internal memory: </b><span>{item.info.internalMemory}</span></div>
          <div><b>RAM: </b><span>{item.info.ram}</span></div>
          <div><b>Camera: </b><span>{item.info.camera.length < 50 ? item.info.camera : item.info.camera.slice(0, 50) + '...'}</span></div>
        </div>
      </div>
      <div className="content-right">
        <div className="content-info">
          <p><b>Price:</b></p>
          <h2>{numeral(item.info.price).format('$0,0.00')}</h2>
        </div>
        <RaisedButton
          containerElement={<Link to={`/product/${item._id}`} />}
          className="btn"
          label="See more"
          labelPosition="before"
          primary={true}
          icon={<NavigateNext />}
        />
      </div>
    </div>
  </div>
);

export default Product;