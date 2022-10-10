import NewMeetupForm from "../components/meetups/NewMeetupForm";

export default function NewMeetupsPage() {
  function addMeetupHandler(meetupData) {
    // called from within NewMeetupForm.js
    // fetch is built-in js function, could also use axios here
    fetch(
      "https://react-meetup-demo-c5731-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    // Explanation: can add any name to the firebase url, has to end in .json, will create a 'meetups' table in the database
    // Get request is default doesn't need any parameters
    // headers part is optional, some APIs require it to make it clear that body contains json data
    // fetch can also listen for the success or errors of the request, normally would add that also, but code above is sufficient.
  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}
