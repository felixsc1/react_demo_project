import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";
import { useRef } from "react";

// Here we only use an image URL, to learn how to upload own images with react, see this tutorial by the course author:
// https://academind.com/tutorials/reactjs-image-upload

// Lesson 40 may be useful to revisit. how to handle form submission.

export default function NewMeetupForm(props) {
  // to get the input we could use useState() and onChange event listeners on each input to update the state with every keystroke.
  // Here we are only interested in the input once during submission, for this we can use the react concept of 'refs' with useRef
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  // see below ref={} keyword is used to connect forms to this constant

  function submitHandler(event) {
    // By default html would send a request to server and reload page when pressing submit button.
    // we want to prevent this to run our own JS logic.
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const meetupData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    };

    // for testing: console.log(meetupData);
    // passing data to parent component 'NewMeetup.js'
    props.onAddMeetup(meetupData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id="title" ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup Image (URL)</label>
          <input type="url" required id="image" ref={imageInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Meetup Address</label>
          <input type="text" required id="address" ref={addressInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Meetup Description</label>
          <textarea
            required
            id="description"
            rows="5"
            ref={descriptionInputRef}
          />
        </div>
        <div className={classes.actions}>
          {/* to add other buttons use <button type="button">, if its just <button>, html uses that to submit the whole form */}
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}
