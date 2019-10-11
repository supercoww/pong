import { Ball } from './ball.js';
import { Paddle } from './paddle.js';

const canvas = document.getElementById('game-canvas');
const context = canvas.getContext('2d');

canvas.width = 432;
canvas.height = 243;

context.font = '15px retro';
context.fillStyle = 'white';
context.textAlign = 'center';

const Game = {
	lastFrameTime: null,
	init: function(time) {
		if (this.lastFrameTime) {
			this.update((time - this.lastFrameTime) / 1000);
			this.render();
		}
		this.lastFrameTime = time;

		requestAnimationFrame(time => {
			this.init(time);
		});
	},
	update: function(dt) {
		// Update game state here
		ball.update(dt);

		if (ball.x + ball.width > ball.canvas.width || ball.x < 0) {
			ball.reset();
		}
	},
	render: function() {
		// clear the canvas for redraw
		context.clearRect(0, 0, canvas.width, canvas.height);

		// All rendering stuff
		context.fillText('Hello Pong!', canvas.width / 2, 30);

		ball.render(context);

		context.fillRect(10, 30, 5, 20);
		context.fillRect(canvas.width - 15, canvas.height - 30, 5, 20);
	}
};

const ball = new Ball(canvas.width / 2 - 2, canvas.height / 2 - 2, 4, 4, context);

Game.init();
