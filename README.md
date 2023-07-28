# Etch-a-Sketch

Goal 1:
Create an interactive Etch-a-Sketch simulation
- allows users to "sketch" on a given grid of squares
- provide users the option of determining the number of squares per side in the grid (up to 100 max)

Lessons Learned:
- DOM manipulation: querySelector, querySelectorAll, getElementsByClassName, classList.add/remove, createElement, appendChild
- Event Listeners: mouseover and click events

Goal 2:
Extra credit
Transform the behavior of a square when interacting with the mouse by introducing a series of modifications.

1. Rather than a simple color change from black to white, each interaction should randomize the square’s RGB value entirely.
2. Additionally, implement a progressive darkening effect where each interaction adds 10% more black or color to the square. The objective is to achieve a completely black square only after ten interactions.