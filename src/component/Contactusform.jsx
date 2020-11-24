import React from "react";

function Contactusfrom() {
  return (
    <div class="container">
      <h1 class="text-primary">Contact</h1>
      <form>
        <div class="form-group">
          <label for="exampleFormControlTextarea1">Name</label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="1"
            placeholder="Name"
          ></textarea>
        </div>

        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          <small id="emailHelp" class="form-text text-muted"
            >We'll never share your email with anyone else.</small
          >
        </div>

        <div class="form-group">
          <label for="exampleFormControlTextarea1">Message</label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="Enter Message Here"
          ></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default Contactusfrom;