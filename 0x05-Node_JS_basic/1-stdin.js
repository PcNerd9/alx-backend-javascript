#!/usr/bin/node

const message = "Welcome to Holberton School, what is your name?\n";

process.stdout.write(message);

process.stdin.on("readable", data => {
	let chunck = process.stdin.read();
	if (chunck != null) {
		process.stdout.write("Your name is: " + chunck);
	}
})


process.stdin.on("end", () => {
	process.stdout.write("This important software is now closing\n");
}
);

