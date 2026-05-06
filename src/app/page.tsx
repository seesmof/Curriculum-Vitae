const EMAIL = "seesmwork@gmail.com";
const LIST_PROPERTIES = "list-disc list-inside";

export default function Page() {
  return (
    <div className="p-3 flex flex-col gap-3">
      {/* A title. */}
      <article>
        <h1>Oleh Onyshchenko</h1>
        <p>Christian Developer & Translator</p>
      </article>

      {/* Interests */}
      <article>
        <h2>Interests</h2>

        <h3>Professional</h3>
        <p>My main technical interests are:</p>
        <ul className={LIST_PROPERTIES}>
          <li>embedded systems</li>
          <li>city planning</li>
          <li>frontend development</li>
        </ul>

        <h3>Personal</h3>
        <p>And my main personal interests are:</p>
        <ul className={LIST_PROPERTIES}>
          <li>Christian faith</li>
          <li>church going</li>
          <li>Gospel sharing</li>
        </ul>
      </article>

      {/* Projects */}
      <article>
        <h2>Projects</h2>
        <p>Here are my personal projects.</p>

        <h3>Class Opening Automator</h3>
        <em>Python</em>
        <p>This is a simple app that opens classes in their scheduled time.</p>

        <h3>YouVersion Volunteering</h3>
        <em>English to Ukrainian translations</em>
        <p>
          Had some experience volunteering at YouVersion, translating their
          app’s content to Ukrainian
        </p>

        <h3>Bible Automations</h3>
        <em>Python</em>
        <p>
          This was a script where I automated Bible text formatting and copying
          to different places.
        </p>

        <h3>Online Trucks Store</h3>
        <em>Python, NiceGUI</em>
        <p>
          This was a diploma’s work where I used NiceGUI library to create a
          simple trucks store app.
        </p>
      </article>

      {/* Contacts */}
      <article>
        <h2>Contacts</h2>
        <p>To get in touch use these:</p>
        <ul className={LIST_PROPERTIES}>
          <li>
            <a href={`mailto:${EMAIL}`}>E-Mail</a>
          </li>
          <li>
            <a href="https://github.com/seesmof">GitHub</a>
          </li>
        </ul>
      </article>
    </div>
  );
}
