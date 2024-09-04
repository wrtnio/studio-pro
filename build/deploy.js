const cp = require("child_process");
const deploy = require("gh-pages");
const fs = require("fs");
const path = require("path");

cp.execSync("npm run build", {
  stdio: "inherit",
  cwd: `${__dirname}/..`,
});

const directory = fs.readdirSync(`${__dirname}/../public`);
for (const file of directory)
  if (
    file === "robots.txt" ||
    (file.startsWith("sitemap") && file.endsWith(".xml"))
  )
    fs.copyFileSync(
      `${__dirname}/../public/${file}`,
      `${__dirname}/../out/${file}`
    );

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
