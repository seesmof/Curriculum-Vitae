const EMAIL = "seesmwork@gmail.com";
const LIST_PROPERTIES = "list-disc list-inside";
const HEADING_TWO_CLASSES = "text-2xl";
const HEADING_THREE_CLASSES = "text-lg mt-3";

export default function Page() {
  return (
    <div className="p-3 flex flex-col gap-5">
      {/* A title. */}
      <article className="mb-3">
        <h1 className="text-3xl">Oleh Onyshchenko</h1>
        <p>Christian Developer & Translator</p>
      </article>

      {/* Interests */}
      <article>
        <h2 className={HEADING_TWO_CLASSES}>Interests</h2>

        <h3 className={HEADING_THREE_CLASSES}>Professional</h3>
        <p className="mt-2">My main technical interests are:</p>
        <ul className={LIST_PROPERTIES}>
          <li>embedded systems</li>
          <li>city planning</li>
          <li>frontend development</li>
        </ul>

        <h3 className={HEADING_THREE_CLASSES}>Personal</h3>
        <p className="mt-2">And my main personal interests are:</p>
        <ul className={LIST_PROPERTIES}>
          <li>Christian faith</li>
          <li>church going</li>
          <li>Gospel sharing</li>
        </ul>
      </article>

      {/* Projects */}
      <article>
        <h2 className={HEADING_TWO_CLASSES}>Projects</h2>
        <p className="mt-2">Here are my personal projects.</p>

        <h3 className={HEADING_THREE_CLASSES}>Class Opening Automator</h3>
        <em>Python</em>
        <p className="mt-2">
          This is a simple app that opens classes in their scheduled time.
        </p>

        <h3 className={HEADING_THREE_CLASSES}>YouVersion Volunteering</h3>
        <em>English to Ukrainian translations</em>
        <p className="mt-2">
          Had some experience volunteering at YouVersion, translating their
          app’s content to Ukrainian
        </p>

        <h3 className={HEADING_THREE_CLASSES}>Bible Automations</h3>
        <em>Python</em>
        <p className="mt-2">
          This was a script where I automated Bible text formatting and copying
          to different places.
        </p>

        <h3 className={HEADING_THREE_CLASSES}>Online Trucks Store</h3>
        <em>Python, NiceGUI</em>
        <p className="mt-2">
          This was a diploma’s work where I used NiceGUI library to create a
          simple trucks store app.
        </p>
      </article>

      {/* Contacts */}
      <article>
        <h2 className={HEADING_TWO_CLASSES}>Contacts</h2>
        <p className="my-2">To get in touch use these:</p>
        <ul className={LIST_PROPERTIES}>
          <li>
            <a
              className="hover:underline underline-offset-4"
              href={`mailto:${EMAIL}`}
            >
              E-Mail
            </a>
          </li>
          <li>
            <a
              className="hover:underline underline-offset-4"
              href="https://github.com/seesmof"
            >
              GitHub
            </a>
          </li>
        </ul>
      </article>
    </div>
  );
}
