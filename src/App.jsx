import { useState } from 'react';

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState({ 0: 1, 1: 3, 2: 4, 3: 2 })

  const handleNextClick = () => {
    const randomIndex = Math.floor(Math.random() * anecdotes.length)
    setSelected(randomIndex)
  }

  const handleVoteClick = () => {
    const newVotes = { ...votes }
    newVotes[selected] += 1
    setVotes(newVotes)
  }
  const getMostVotedAnecdote = () => {
    const maxVotes = Math.max(...Object.values(votes))
    const mostVotedIndex = Object.keys(votes).find(key => votes[key] === maxVotes)
    return anecdotes[mostVotedIndex]
  }
  
  
  

    
  return (
    <div>
      <h1>Anecdote of the day</h1>
      
      {anecdotes[selected]}
      <br />
      has {votes[selected]} votes
      <br />
      <button onClick={handleVoteClick}>Vote</button>
      <button onClick={handleNextClick}>Next Anecdote</button>

      <h1>Anecdote with most votes</h1>

      
      {getMostVotedAnecdote()}

    </div>
  )
}

export default App
