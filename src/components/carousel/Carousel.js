import React from 'react'
import './Carousel.css'

export default function Carousel() {
  return <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://img.freepik.com/free-vector/circuits-blue-red-gradient-digital-background_23-2148821701.jpg" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://media.istockphoto.com/id/1435226158/photo/circuit-board-background-computer-data-technology-artificial-intelligence.webp?b=1&s=170667a&w=0&k=20&c=d-gHg6uCV5JEaKJCpxhJ01Ab19m032daRC8vDo8NzDI=" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://png.pngtree.com/thumb_back/fh260/background/20201022/pngtree-technical-abstract-technology-background-with-geometric-shape-image_430549.jpg" className="d-block w-100" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
}
