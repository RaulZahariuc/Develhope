function firstUncompletedNote(notes) {
    // Cerca la prima nota non completata
    for (const note of notes) {
      const isNoteCompleted = note.todos.every(todo => todo.done);
      if (!isNoteCompleted) {
        return note;
      }
    }
    // Se tutte le note sono completate, restituisci null
    return null;
  }
  
  const notes = [
    {
      id: 1,
      description: 'Workout program',
      todos: [
        {
          id: 1,
          name: 'Push ups - 10 x 3',
          done: true
        },
        {
          id: 2,
          name: 'Abdominals - 20 x 3',
          done: true
        },
        {
          id: 3,
          name: 'Tapis Roulant - 15min',
          done: true
        }
      ]
    },
    {
      id: 2,
      description: 'Front-end Roadmap',
      todos: [
        {
          id: 1,
          name: 'Learn HTML',
          done: true
        },
        {
          id: 2,
          name: 'Learn CSS',
          done: false
        },
        {
          id: 3,
          name: 'Learn JavaScript',
          done: true
        },
        {
          id: 4,
          name: 'Learn Angular',
          done: false
        }
      ]
    },
    {
      id: 3,
      description: 'My Movies Library',
      todos: [
        {
          id: 1,
          name: 'La città incantata',
          done: true
        },
        {
          id: 2,
          name: 'Avatar',
          done: true
        },
        {
          id: 3,
          name: 'Titanic',
          done: false
        }
      ]
    }
  ];
  
  const noteInProgress = firstUncompletedNote(notes);
  
  console.log('Tutte le note:', notes);
  console.log('Prima nota in corso:', noteInProgress);
  