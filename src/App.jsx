import { useState } from "react";

const App = () => {
  const [isVisible, setVisible] = useState(false);

  return (
    <div className="h-dvh w-full container px-2 md:px-32 lg:px-48 xl:px-72 mx-auto py-4">
      <h1 className="text-3xl font-bold">Github Actions</h1>
      <div className="py-4 space-y-4">
        <button
          className="text-white bg-neutral-800 px-4 py-2 rounded-md font-semibold"
          onClick={() => setVisible(!isVisible)}
        >
          Get Started
        </button>
        {isVisible && (
          <ul
            className="list-disc list-inside"
            id="list-items"
            data-testid="list-items"
          >
            <li>
              GitHub Actions makes it easy to automate all your software
              workflows, now with world-class CI/CD. Build, test, and deploy
              your code right from GitHub. Make code reviews, branch management,
              and issue triaging work the way you want.
            </li>
            <li>
              Kick off workflows with GitHub events like push, issue creation,
              or a new release. Combine and configure actions for the services
              you use, built and maintained by the community.
            </li>
            <li>
              Whether you want to build a container, deploy a web service, or
              automate welcoming new users to your open source projects—there's
              an action for that. Pair GitHub Packages with Actions to simplify
              package management, including version updates, fast distribution
              with our global CDN, and dependency resolution, using your
              existing GITHUB_TOKEN.
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default App;
