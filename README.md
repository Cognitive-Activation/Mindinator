# Mindinator

Mindinator is a mental fitness website aimed at relaxing and stimulating the brain to achieve optimal brain activity and maximum efficiency in all of your work.

## Setting up the project

If you have developed a game, we'd love to see it and add your contribution!
Here's a guide to help you get started with it

Fork this project.

Navigate to the directory where you want to create this project.

```bash
git clone https://github.com/<your-github-username>/cognitive-stimulation-with-svelte.git
cd cognitive-stimulation-with-svelte
npm install
npm run dev -- --open
```

After this, a new browser window will open with the mindinator.com website

Now, go to the routes/games directory and add a directory with your game's name
In that directory, make a +page.svelte file which will contain your svelte code. Make sure you test it by going to the $localhosturl/games/<your-game>

Once done, you can push it to your fork using

```bash
git add src/routes/<your-game-name>
git commit -m "<describe-your-game!>"
git push -u origin main
```

Then, create a pull request! We will review your game and get back to you.
