import React from 'react'
import { FlowerList } from '../data/flowerData'
import './css/Flowers.css'

function Flowers() {
  return (
    <>
      <div className="flowers-container">
        <h1>2021 Flower Catalog </h1>
        <h2>Hurry up, limited stock</h2>
        <div class="table-responsive">
          <table className="flowers-table">
            <tbody>
              <tr className="flowers-header">
                <th>ID</th>
                <th>Name</th>
                <th>Instructions</th>
                <th>Price</th>
              </tr>
              {FlowerList.map((flower) => {
                return (
                  <tr key={flower.productId} className="flowers-list">
                    <td>{flower.productId}</td>
                    <td>{flower.name}</td>
                    <td>{flower.instructions}</td>
                    <td>${flower.price}</td>

                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default Flowers
