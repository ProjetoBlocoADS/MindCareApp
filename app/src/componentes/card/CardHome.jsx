import './cardHome.css';

export default function CardHome({ image, label, alt = '' }) {
  return (
    <div className="image-with-label-container">
      <img 
        src={image} 
        alt={alt}
        className="image-with-label-img"
      />
      <div className="image-with-label-overlay">
        <span className="image-with-label-text">
          {label}
        </span>
      </div>
    </div>
  );
}