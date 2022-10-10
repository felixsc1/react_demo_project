import classes from "./Layout.module.css";
import MainNavigation from "./MainNavigation";

export default function Layout(props) {
  // good example of wrapper component. all routing content in app.js is passed as children here
  // also, classes.main very simple css example to make content centered with whitespace.
  return (
    <div>
      <MainNavigation />
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}
