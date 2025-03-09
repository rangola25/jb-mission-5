import './Home.css'

export default function Home(): JSX.Element {
    return (
        <div className="container">
          <h3>Welcome to Developer Meetings Hub</h3>
          <p>
            Our platform provides an easy and efficient way to schedule, manage, and keep track of all your developer team meetings. Whether you're organizing a brainstorming session, a sprint planning, or a quick catch-up, we’ve got you covered.
          </p>
    
              <h3>Create and manage meetings</h3>
              <p>Quickly set up meetings with your team, complete with date, time, room, and description.</p>


              <h3>View upcoming meetings</h3>
              <p>Stay updated on your scheduled meetings and easily access relevant details.</p>


              <h3>Team collaboration</h3>
              <p>Assign meetings to specific developer teams and ensure everyone stays on the same page.</p>
    
          <p>Join our community of developers and streamline your team’s meeting management today!</p>
        </div>
      );
}