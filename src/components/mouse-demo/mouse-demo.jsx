import axios from "axios";
import { useEffect, useState } from "react";
import './mouse-demo.css';

export function MouseDemo() {
  const [mobiles, setMobiles] = useState([]);
  const [previewSrc, setPreviewSrc] = useState('m1.png');

  useEffect(() => {
    axios.get('mobile.json')
      .then(response => {
        setMobiles(response.data);
      });
  }, []);

  function handleMouseOver(e) {
    setPreviewSrc(e.target.src);
  }

  return (
    <div className="container-fluid">
      <div className="row mt-5">

        <div className="col-1">
          {
            mobiles.map(mobile => (
              <div key={mobile.img_src} className="my-4 container-style">
                <img onMouseOver={handleMouseOver} src={mobile.img_src} alt="mobile" width='50px' height='50px' />
              </div>
            ))
          }
        </div>

        <div className="col-11">
          <img width="400" height="400" src={previewSrc} alt="preview" />
        </div>

      </div>
    </div>
  );
}
