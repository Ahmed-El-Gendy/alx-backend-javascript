console.log("Welcome to Holberton School, what is your name?\n");

process.stdin.on('data', (data) => {
  process.stdout.write(`Your name is: ${data}\n`);
  process.stdin.end();
});

process.stdin.on('end', () => {
  console.log('This important software is now closing\n');
});
