// @ts-nocheck
import React, { Component } from 'react'

export class App extends Component {
  state = {
    id: null,
    board: [
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    ],
    state: '',
    mines: null,
  }

  handleCellClick = async (row, col) => {
    if (this.state.state !== 'won' || this.state.state !== 'lost') {
      const body = { row, col }
      const response = await fetch(
        `https://minesweeper-api.herokuapp.com/games/${this.state.id}/check`,
        {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify(body),
        }
      )
      if (response.status === 200) {
        // Get the response as JSON
        const game = await response.json()
        // Make that the new state!
        this.setState(game)
      }
    }
  }

  handleNewGame = async () => {
    // Make a POST request to ask for a new game
    const response = await fetch(
      'https://minesweeper-api.herokuapp.com/games',
      {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
      }
    )
    if (response.status === 200) {
      // Get the response as JSON
      const game = await response.json()
      console.log(game)
      // Make that the new state!
      this.setState(game)
    }
  }

  handleCellClass(cell) {
    switch (cell) {
      case '_':
        return 'revealed'
      case '*':
        return 'bomb'
      case 'F':
        return 'flag'
      default:
        return 'unrevealed'
    }
  }

  componentDidMount() {
    this.handleNewGame()
  }

  render() {
    return (
      <>
        <h1>Sweeping for Mines!</h1>
        <button onClick={this.handleNewGame}>New Game!</button>
        <div>
          {this.state.board.map((row, rowIndex) => {
            return (
              <div key={rowIndex} className="row">
                {row.map((cell, columnIndex) => {
                  return (
                    <div
                      key={columnIndex}
                      className={`cell ${this.handleCellClass(cell)}`}
                      onClick={() =>
                        this.handleCellClick(rowIndex, columnIndex)
                      }
                    >
                      {cell}
                    </div>
                  )
                })}
              </div>
            )
          })}
        </div>
      </>
    )
  }
}
