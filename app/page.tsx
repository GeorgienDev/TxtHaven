import Image from "next/image";
import style from "./page.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <>
      <div className="border border-black mt-5 w-100 h-75 rounded d-flex flex-column justify-content-between">
        <h1 className="text-center">Messages</h1>

        <div 
          id="messages-box" 
          className="p-2" 
          style={{ overflowY: "scroll", maxHeight: "60vh" }} 
        >
          {Array.from({ length: 5 }, (_, i) => (
            <div key={i} className="border border-black ms-3 me-3 mb-3 rounded">
              <b className="ms-3">Name</b>
              <div className="ms-4 me-4">
                <p id="message">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-3 mb-3">
          <div className="d-flex">
            <input 
              className="form-control form-control-lg border border-black w-75 me-2 ms-3" 
              type="text" 
              placeholder="Enter message" 
              aria-label="Message input field"
            />
            <button className="btn btn-dark me-2" type="submit">Send</button>
          </div>
        </div>
      </div>
    </>
  );
}
