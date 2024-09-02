const cp = require("child_process");
const deploy = require("gh-pages");
const path = require("path");

cp.execSync("npm run build", {
  stdio: "inherit",
  cwd: `${__dirname}/..`,
});

deploy.publish(
  path.resolve(`${__dirname}/../out`),
  {
    branch: "gh-pages",
    dotfiles: true,
  },
  (err) => {
    if (err) {
      console.log(err);
      process.exit(-1);
    } else clear();
  }
);
