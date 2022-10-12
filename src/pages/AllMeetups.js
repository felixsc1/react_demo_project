import MeetupList from "../components/meetups/MeetupList";
import { useState, useEffect } from "react";

export default function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  // why put fetch inside useEffect? Otherwise set state functions would cause rerendering of component -> new fetch -> infinite loop.
  // requires two inputs: a function, and an array of dependencies
  // without second argument useEffect would execute function whenever component is executed.
  // If we enter empty array [], useEffect will execute only the first time. See lesson 45 for explanation.
  useEffect(() => {
    fetch(
      "https://react-meetup-demo-c5731-default-rtdb.firebaseio.com/meetups.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // MeetupsList.js expects an array, but we get an object from firebase, so we construct it here:
        const meetups = [];

        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };
          meetups.push(meetup);
        }

        setIsLoading(false);
        setLoadedMeetups(meetups);
      });
  }, []);

  // About fetch:
  // For firebase use the same url as for the post request, no configuration needed here since its GET
  // this time were are interested in the response which is passed to then()
  // one tricky detail: response.json() turns response into plain js format, BUT this also returns a promise, hence the second then() command
  // error handling omitted here

  // since fetching above may take some time to resolve promise,
  // return some fallback html in the meantime
  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={loadedMeetups} />
    </section>
  );
}
